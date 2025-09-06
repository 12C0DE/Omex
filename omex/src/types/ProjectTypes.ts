export type ProjectType = {
	title: string;
	description: string;
	clicked?: () => ProjectType | void;
};
