import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import '../styles/enter.css'
import imgVideo from '../assets/video-call.png'

const Home = () => {
  const history = useHistory()
  const [roomName, setRoomName] = useState('')
  const [roomId, setRoomId] = useState('')

  function enter(){
    history.push(`/room/${roomName}/${roomId}`)
  }

  return (
    <div id="enter-container">
      <aside>
      <img src={imgVideo} alt="Video chamada" className="video-chat"/>
      </aside>

      <main>
        <h2>Faça video chamadas aqui!</h2>
        <div className="enter-form">

        <form onSubmit={enter}>
          <fieldset>
            <legend>Entre na sala</legend>
        <div className="input-block">
         <label htmlFor="name">Nome da sala:('/room/nome/id')</label>
         <input type="text" id="name" value={roomName} onChange={e => setRoomName(e.target.value)}/>
        </div>

        <div className="input-block">
         <label htmlFor="id">Id da sala:('/room/nome/id')</label>
         <input type="text" id="id" value={roomId} onChange={e => setRoomId(e.target.value)}/>
        </div>

        <button type="submit" className="confirm-btn" >Entrar na sala</button>
          </fieldset>
        </form>
        </div>
      </main>

    </div>
  )
}

export default Home