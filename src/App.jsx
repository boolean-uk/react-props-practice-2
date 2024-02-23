import { useState } from 'react'

import Chat from './components/Chat'
import Title from './components/Title'

import './App.css'




export default function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState('Nicolas')

  
  return (
    <div className="app">
      <Title user={user} />
      <Chat />
    </div>
  )
}
