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
      rotate: (Math.random() * 10 - 5) * settings.messageRotationRadius,
      width: Math.random() * 10 + settings.messageWidthPercentage + '%',
      right: Math.random() * 10 - 20,
    },
    in: {
      transition: {
        duration: 2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

  const usernameAnimation: Variants = {
    initial: {
      opacity: 0,
      right: Math.random() * 10 - 5 + 'em',
      scale: 0,
    },
    in: {
      scale: 1,
      right: (Math.random() * 10 - 5) * settings.usernameOffset + 'em',
      opacity: 1,
      transition: {
        type: 'spring',
      },
    },
  }

  const contentAnimation: Variants = {
    initial: {
      scale: 0,
      opacity: 0,
      right: Math.random() * 10 - 5,
    },
    in: {
      scale: 1,
      right: (Math.random() * 10 - 5) * settings.messageOffset,
      opacity: 1,

      transition: {
        type: 'spring',
        delay: 0.1,
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
      <div className="message__inner">
        <motion.div
          className="message__username"
          style={{ backgroundColor: settings.usernameBackgroundColor }}
          variants={usernameAnimation}
        >
          {settings?.badges && (
            <div className="message__username--badges">
              {message.badges.map((badge) => (
                <img src={`/badges/${badge}.png`} alt={badge} key={badge} />
              ))}
            </div>
          )}
          <div>{message.username}</div>
        </motion.div>
        <motion.div
          variants={contentAnimation}
          className="message__content"
          style={{ backgroundColor: settings.messageBackgroundColor }}
          dangerouslySetInnerHTML={{ __html: message.message }}
        />
      </div>
    </motion.div>
  )
}
