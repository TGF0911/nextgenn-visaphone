import React, {useState} from 'react'
import { FiUser, FiLock } from 'react-icons/fi'
import api from '../services/api'
import {useHistory} from 'react-router-dom'

import '../styles/login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

    async function handleLogin(){
      const data = {
        email,
        password
      }
     try {
       const response = await api.post('/api/login', data)
       //history.push(`/home/:${response._id}`)
     } catch (error) {
        alert('Algo deu errado. Verifique seus dados e tente novamente.')
     }
    }
  return (

    <div id="login-container">


      <main>
        <h1>Bem-vindo(a)!</h1>
        <div className="login-form">

          <form onSubmit={() => history.push('/create-room')} >
            <fieldset>
              <legend>Login</legend>
              <div className="input-block">
                <label htmlFor="email"><FiUser size={24} /> Email: </label>
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />

              </div>
              <div className="input-block">
                <label htmlFor="password"><FiLock size={24} /> Password: </label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>

              <button className="confirm-button" >Login</button>

            </fieldset>
          </form>
        </div>
      </main>
    </div>

  )
}

export default Login