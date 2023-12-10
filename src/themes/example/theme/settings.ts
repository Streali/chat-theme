import { ChatSettings } from '../../../types'

export type CustomSettings = {
  messageRotationRadius: number
}

export const themeSettings: ChatSettings & CustomSettings = {
  isDemo: true,
  fontSize: 16,
  alignment: 'left',
  scrollAnimation: true,
  animation: true,
  badges: true,
  // Custom settings
  messageRotationRadius: 0,
}
