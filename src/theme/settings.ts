import { ChatSettings } from '../types';

export type CustomSettings = {};

export const themeSettings: ChatSettings & CustomSettings = {
	isDemo: true,
	alignment: 'left',
	fontSize: 16,
	scrollAnimation: true,
	animation: true,
};
