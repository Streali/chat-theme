import React, { useEffect, useState } from 'react'
import { Settings } from '../../components/Settings'
import { TwitchMessage } from '../../types'
import { generateTwitchMessage } from '../../utils/generate-chat-message'
import { Container } from './theme/container'
import { themeSettings } from './theme/settings'

function ChatDemo({ darkMode }: { darkMode?: boolean }) {
  const [messages, setMessages] = useState<TwitchMessage[]>([])

  useEffect(() => {
    setMessages((d) => {
      if (d.length >= 50) d.shift()
      const newMessage = generateTwitchMessage('twitch')
      return [...d, newMessage] as TwitchMessage[]
    })

    const interval = setInterval(() => {
      setMessages((d) => {
        if (d.length >= 50) d.shift()
        const newMessage = generateTwitchMessage('twitch')
        return [...d, newMessage] as TwitchMessage[]
      })
    }, 1250)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`chat-demo ${darkMode ? 'dark-mode' : ''}`}>
      <Container messages={messages} settings={themeSettings} />
    </div>
  )
}

export function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    window.addEventListener('dark-mode', (event) => {
      const darkMode: boolean = (event as CustomEvent<boolean>).detail
      setDarkMode(darkMode)
    })
  }, [])

  return (
    <main className={darkMode ? 'dark-mode' : ''}>
      <Settings />
      <div className="message-presentation">
        <Container
          messages={[generateTwitchMessage()]}
          settings={themeSettings}
        />
      </div>
      <ChatDemo darkMode={darkMode} />
    </main>
  )
}
