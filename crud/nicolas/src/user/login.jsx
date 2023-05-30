import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css";

const URI = 'http://localhost:8000/users/'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleInputChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleInputChangePass = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const validar = async (e) => {
    e.preventDefault()
    const res = await axios.get(`${URI}${email}/${password}`)
    if (res.data) {
      navigate('/')
    }
    setMessage("El usuario no existe")
  }

  return (
    <>
      <div className='container'>
        <h1>LOGIN</h1>
        <form onSubmit={validar}>
        <div className="input-box">
          <span className="details">Correo Electrónico</span>
          <input type={"text"} name="name" placeholder='Nombre' value={email} onChange={handleInputChangeEmail} /> <br />
          </div>
          <div className="input-box">
          <span class="details">Contraseña</span>
          <input type="password"  name="password" placeholder='Contraseña' value={password} onChange={handleInputChangePass} /><br />
          </div>
          {email !== "" ? <input className='button' type="submit" value={"AGREGAR"} /> : <input className='button' disabled type="submit" value={"AGREGAR"} />} <br />
          {message}
        </form>
      </div>

    </>
  )
}

export default Login