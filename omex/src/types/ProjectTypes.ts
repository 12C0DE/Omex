export type ProjectType = {
	title: string;
	description: string;
	img?: string | string[];
	thumbnail?: string;
	clicked?: () => ProjectType | void;
};
