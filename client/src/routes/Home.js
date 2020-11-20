import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import api from '../services/api'

import '../styles/home.css'


const Home = (props) => {
  const history = useHistory()

  const id = props.match.params.id;

  const [user, setUser] = useState()
  const [password, setPassword] = useState('')

  useEffect(() => {
    
    //api.get(`/user/${id}`).then(({ data }) => setUser(data))
  }, [id])

  async function handleUpdate(e) {
    e.preventDefault()

    try {
      const response = await api.put(`/user/${id}`, password)
      alert('Senha atualizada com sucesso!')
    } catch (error) {
      alert('Erro ao atualizar senha. Por favor, tente novamente.')
    }
  }

  return (
    <div id="home-container">
      <aside>
        <h2>Faça video chamadas aqui! {user.name}</h2>
        <div className="">
          <Link to={`/video-chat/${id}`}>
            Entrar em chamada
        </Link>
        </div>
      </aside>

      <main>
        <h2></h2>
        {/* Form de update de senha */}
      </main>

    </div>
  )
}

export default Home