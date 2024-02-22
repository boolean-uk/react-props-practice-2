import { useState } from 'react'

export default function Title() {
  const [user] = useState('Nicolas')

  return <h1>Welcome, {user}!</h1>
}