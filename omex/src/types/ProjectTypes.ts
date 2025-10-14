export type ProjectType = {
	title: string;
	description: string;
	images?: string | string[];
	thumbnail?: string;
	clicked?: () => ProjectType | void;
};
