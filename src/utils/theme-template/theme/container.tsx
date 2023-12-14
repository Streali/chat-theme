import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { ChatSettings, TwitchMessage } from '../../../types'
import { Message } from './message'
import { CustomSettings } from './settings'
import './style.css'

type Props = {
  messages: TwitchMessage[]
  settings: ChatSettings & CustomSettings
}

export function Container(props: Props) {
  const { messages, settings } = props

  return (
    <div className="container" style={{ fontSize: settings.fontSize || 16 }}>
      {messages.map((message) => (
        <AnimatePresence key={message.id}>
          <Message message={message} settings={settings} />
        </AnimatePresence>
      ))}
    </div>
  )
}
