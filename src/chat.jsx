import React, { useState } from 'react'

const initialMessages = [
  { id: 1, text: 'Hello!', user: 'Nicolas' },
  { id: 2, text: 'Hey!', user: 'Sergio' },
  { id: 3, text: 'How are you feeling today?', user: 'Nicolas' },
  { id: 4, text: 'Hot hot, you?', user: 'Sergio' },
  { id: 5, text: 'Cool cool!', user: 'Nicolas' }
]

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages)
  const [user, setUser] = useState('Nicolas')

  const addMessage = text => {
    setMessages([...messages, { id: messages.length + 1, text, user: 'Nicolas' }])
  }

  return (
    <div className="chat">
        </div>
  )
}
