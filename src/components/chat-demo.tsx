import { useEffect, useState } from 'react'
import { Container } from '../theme/container'
import { generateTwitchMessage } from '../utils/generate-chat-message'
import { TwitchMessage } from '../types'
import { themeSettings } from '../theme/settings'

export function ChatDemo() {
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
    <div className="chat-demo">
      <Container messages={messages} settings={themeSettings} />
    </div>
  )
}
