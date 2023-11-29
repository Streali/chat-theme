import { AnimatePresence } from 'framer-motion';
import type { ChatSettings, TwitchMessage } from '../types';
import { Message } from './message';
import './style.css';
import { CustomSettings } from './settings';

type Props = {
	messages: TwitchMessage[];
	settings: ChatSettings & CustomSettings;
};

export function Container(props: Props) {
	const { messages, settings } = props;

	return (
		<div
			className='container'
			style={{
				fontSize: settings.fontSize || 16,
				textAlign: settings.alignment || 'left',
			}}
		>
			{messages.map((message) => (
				<AnimatePresence key={message.id}>
					<Message message={message} settings={settings} />
				</AnimatePresence>
			))}
		</div>
	);
}
