export type ProjectType = {
	title: string;
	description: string;
	img?: string;
	images?: string | string[];
	thumbnail?: string;
	clicked?: () => ProjectType | void;
};
