// Create this in the AWS console
// name: omex-send-contact-email
// runtime: Node.js 20.x
// arch: x86_64

const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-2' });

exports.handler = async (event) => {
	try {
		const body = JSON.parse(event.body);
		const { email, message } = body;

		// Validate inputs
		if (!email || !message) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: 'Email and message required' }),
				headers: { 'Access-Control-Allow-Origin': '*' },
			};
		}

		// Send email via SES
		const params = {
			Source: 'noreply@yourdomain.com', // Verified sender in SES
			Destination: {
				ToAddresses: ['your-email@omex.com'], // Where you receive the email
			},
			Message: {
				Subject: { Data: `New Contact Message from ${email}` },
				Body: {
					Text: { Data: `From: ${email}\n\nMessage:\n${message}` },
				},
			},
			ReplyToAddresses: [email],
		};

		await ses.sendEmail(params).promise();

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
			headers: { 'Access-Control-Allow-Origin': '*' },
		};
	} catch (error) {
		console.error(error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Failed to send email' }),
			headers: { 'Access-Control-Allow-Origin': '*' },
		};
	}
};

// -----inline policy-----
// {
//   "Version": "2012-10-17",
//   "Statement": [
//     {
//       "Effect": "Allow",
//       "Action": [
//         "ses:SendEmail",
//         "ses:SendRawEmail"
//       ],
//       "Resource": "*"
//     }
//   ]
// }
