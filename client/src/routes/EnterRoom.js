import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../styles/home.css'


const Home = () => {
  const history = useHistory()
  const [roomName, setRoomName] = useState('')
  const [roomId, setRoomId] = useState('')

  function enter(){
    history.push(`/room/${roomName}/${roomId}`)
  }

  return (
    <div id="home-container">
      <main>
        <h2>Faça video chamadas aqui!</h2>
        <form onSubmit={enter}>
        <div className="input-block">
         <label htmlFor="name">Nome da sala:</label>
         <input type="text" id="name" value={roomName} onChange={e => setRoomName(e.target.value)}/>
        </div>
        <div className="input-block">
         <label htmlFor="id">Nome da sala:</label>
         <input type="text" id="id" value={roomId} onChange={e => setRoomId(e.target.value)}/>
        </div>
        <button type="submit">Entrar na sala</button>
        </form>
      </main>

    </div>
  )
}

export default Home