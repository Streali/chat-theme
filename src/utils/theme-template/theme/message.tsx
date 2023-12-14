import { Variants, motion } from 'framer-motion'
import React from 'react'
import { ChatSettings, TwitchMessage } from '../../../types'
import { CustomSettings } from './settings'

type Props = {
  message: TwitchMessage
  settings: ChatSettings & CustomSettings
}

export function Message(props: Props) {
  const { message, settings } = props

  const displayAnimation: Variants = {
    initial: {
      [settings?.alignment === 'left' ? 'right' : 'left']: 50,
    },
    in: {
      [settings?.alignment === 'left' ? 'right' : 'left']: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <motion.div
      layout={settings.scrollAnimation}
      variants={displayAnimation}
      initial="initial"
      animate="in"
    >
      <motion.div
        className="message__inner"
        variants={displayAnimation}
        initial={settings?.animation ? 'initial' : false}
        animate={settings?.animation ? 'in' : false}
      >
        <div className="message__username">
          {settings?.badges && (
            <div className="message__username--badges">
              {message.badges.map((badge) => (
                <img src={`/badges/${badge}.png`} alt={badge} key={badge} />
              ))}
            </div>
          )}
          <div>{message.username}</div>
        </div>
        <div
          className="message__content"
          dangerouslySetInnerHTML={{ __html: message.message }}
        />
      </motion.div>
    </motion.div>
  )
}
