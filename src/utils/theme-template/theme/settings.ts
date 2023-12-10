import { ChatSettings } from '../../../types'

export type CustomSettings = {
  usernameBackgroundColor: string
  usernameOffset: number // between 0 and 2, transform to em
  messageListGap: number // between 0 and 5, transform to em
  messageOffset: number // between 0 and 2, transform to em
  messageBackgroundColor: string
  messageRotationRadius: number // between 0 and 10, 0 is no rotation, 10 is WTF rotation
  messageWidthPercentage: number // between 0 and 100, 0 is no width, 100 is full width
}

export const themeSettings: ChatSettings & CustomSettings = {
  isDemo: true,
  fontSize: 16,
  alignment: 'left',
  scrollAnimation: true,
  animation: true,
  badges: true,
  // Custom settings
  usernameBackgroundColor: '#cda0ff',
  usernameOffset: 0.2,
  messageListGap: 0.5,
  messageOffset: 20,
  messageBackgroundColor: '#3e5d9b',
  messageRotationRadius: 1.2,
  messageWidthPercentage: 50,
}
