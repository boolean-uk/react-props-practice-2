import { useState } from 'react'

import Chat from './components/Chat'
import Title from './components/Title'

import './App.css'

let id = 6

const initialMessages = [
  { id: 1, text: 'Hello!', user: 'Nicolas' },
  { id: 2, text: 'Hey!', user: 'Sergio' },
  { id: 3, text: 'How are you feeling today?', user: 'Nicolas' },
  { id: 4, text: 'Hot hot, you?', user: 'Sergio' },
  { id: 5, text: 'Cool cool!', user: 'Nicolas' }
]

//main App component
//states are moved here to the chatmanager,
//that controls state of messages and user
function ChatManager(){
  //state for messages and user
  const [messages, setMessages] = useState(initialMessages)
  const [user, setUser] = useState('Nicolas')

  //function to add new message
  const addMessage = text => {
    setMessages([...messages, { id: id++, text, user: 'Nicolas' }])
  }

  //render UI
  return (
    <div className="app">
      <Title user={user} />
      <Chat messages={messages} addMessage={addMessage} />
    </div>
  )
}

export default ChatManager; //export chatmanager