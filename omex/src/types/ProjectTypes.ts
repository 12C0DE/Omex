export type ProjectType = {
	title: string;
	description: string;
	img?: string | string[];
	clicked?: () => ProjectType | void;
};
