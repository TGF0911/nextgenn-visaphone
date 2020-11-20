import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLogIn } from 'react-icons/io'

// import jetsons from '../assets/nave.png'

import '../styles/landing.css'

const Landing = () => {
  return (
    <div id="landing-container">
      <div className="content-wrapper">

        <main>
          <h1>Faça video chamadas com seus amigos!</h1>
          <p>Simples de utilizar.</p>
        </main>

    <div className="links">

        <Link to="/login" className="login">
          <IoMdLogIn size={34} color="#fff" />
        </Link>

        <Link to="/create/user/" className="create">
          <p>Ainda não está Cadastrado?</p>
        </Link>

    </div>

        {/* <img src={jetsons} alt="Os Jetsons"  className="jetsons"/> */}
      </div>
    </div>
  )
}

export default Landing