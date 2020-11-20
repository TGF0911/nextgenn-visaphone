import React, { useState, useEffect } from 'react'
import api from '../services/api'
import {useHistory} from 'react-router-dom'

import '../styles/create-user.css'

// import videoChat from '../assets/videoChat.svg'

const CreateUser = () => {

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  async function handleSubmit(e) {
    e.preventDefault()
  
  const data = {
    name,
    email,
    password
  }

    try {
      const response = await api.post('/users', data)
      alert('Cadastrado com sucesso!')
      history.push('/login')
    } catch (error) {
      alert('Algo deu errado. Verifique seus dados e tente novamente!')
    }
  }
    
  

  return (
    <div id="create-container">
      <aside>
       <h2>Venha fazer parte de nossa comunidade.</h2>
       {/* <img src={videoChat} alt="videoChat" className="video-chat"/> */}
       <p>Aqui você vai poder fazer video chamadas.</p>
       <p>Pode ser reuniões de tabalho, ou até uma chamada com seus amigos!</p>
      </aside>
      <main>
        <div className="create-form" >

          <form onSubmit={handleSubmit} >
            <fieldset>
              <legend>Dados</legend>

              <div className="input-block">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="password">Password:<span>(de 6 à 12 caracteres)</span></label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </fieldset>
            <button type="submit" className="confirm-btn">Cadastrar</button>
          </form>
        </div>
      </main>

    </div>
  )
}

export default CreateUser