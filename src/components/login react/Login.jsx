import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handlesubmit = (event) => {
        event.preventDefault();

        alert ('enviando os dados: ' + username + '-' + password)
    }

return (
    <div className='container'>
    <form onSubmit={handlesubmit} >
        <h1>Acesse o sistema </h1>
        <div className='input-field'>
            <input type="email" placeholder='E-mail'
            onChange={(e) => setusername(e.target.value)}/>
            <FaUser className='icon' />
        </div>
        <div className='input-field'>
        <input type="password" placeholder='Password'
        onChange={(e) => setpassword(e.target.value)} />
        <FaLock className='icon' />
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Esqueceu  a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>nao tem uma conta? <a href="#">Registar</a></p>
        </div>
    </form>
    </div>
)
}

export default Login
