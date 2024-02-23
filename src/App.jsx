import { useState } from 'react'

import Chat from './components/Chat'
import Title from './components/Title'

import './App.css'
// 
const initialMessages = [
  { id: 1, text: 'Hello!', user: 'Nicolas' },
  { id: 2, text: 'Hey!', user: 'Sergio' },
  { id: 3, text: 'How are you feeling today?', user: 'Nicolas' },
  { id: 4, text: 'Hot hot, you?', user: 'Sergio' },
  { id: 5, text: 'Cool cool!', user: 'Nicolas' }
]

export default function App() {
  return (
    <div className="app">
      <Title />
      <Chat initialMessages={initialMessages} />
    </div>
  );
}
