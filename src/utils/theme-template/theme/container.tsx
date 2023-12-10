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
    <div
      className="container"
      style={{
        fontSize: settings.fontSize || 16,
        gap: settings.messageListGap + 'em',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {messages.map((message) => (
        <AnimatePresence key={message.id}>
          <Message message={message} settings={settings} />
        </AnimatePresence>
      ))}
    </div>
  )
}
