//import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { useState } from 'react'

let autoId = 0

function App() {
  const [user, setUser] = useState([])

  const handleSubmit = (values) => {
    setUser([...user, { id: autoId++, data: values }])
  }

  return (
    <div className="App">
      <h1>Elige un Color</h1>
      <Form onSubmit={handleSubmit} />
      <Card nombre={user.nombre} color={user.color} className='card' key={user.id}/>
    </div>
  )
}

export default App
