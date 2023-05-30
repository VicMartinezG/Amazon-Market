import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./createUser.css";

const URI = 'http://localhost:8000/users/'

const CreateUser = () => {
  const defaultFields = {
    name: "",
    lastnameP: "",
    lastnameM: "",
    country: "",
    departament: "",
    city: "",
    email: "",
    phone: "",
    password: "",
  }

  const [users, setUsers] = useState(defaultFields)
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });

  };

  const save = async (e) => {
    e.preventDefault()
    await axios.post(URI, users)
    const res = await axios.get(`${URI}products`)
    console.log(res.data);
    navigate('/login')
  }

  return (
    <>
      <div className='container'>
        <h1>REGISTRO DE USUARIOS</h1>
        <form onSubmit={save}>
          <div className="input-box">
            <span className="details">Nombre</span>
            <input type={"text"} name="name" placeholder='Nombre' value={users.name} onChange={handleInputChange} /> <br />
          </div>
          <div className="input-box">
            <span className="details">Apellido Paterno</span>
            <input type={"text"} name="lastnameP" placeholder='Apellido Paterno' value={users.lastnameP} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">Apellido Materno</span>
            <input type={"text"} name="lastnameM" placeholder='Apellido Materno' value={users.lastnameM} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">País</span>
            <input type={"text"} name="country" placeholder='Pais' value={users.country} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">Departamento</span>
            <input type={"text"} name="departament" placeholder='Departamento' value={users.departament} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">Ciudad</span>
            <input type={"text"} name="city" placeholder='Ciudad' value={users.city} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">Correo</span>
            <input type={"text"} name="email" placeholder='Correo' value={users.email} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">Teléfono</span>
            <input type={"text"} name="phone" placeholder='Telefono' value={users.phone} onChange={handleInputChange} /><br />
          </div>
          <div className="input-box">
            <span className="details">Contraseña</span>
            <input  name="password" type="password" placeholder='Contraseña' value={users.password} onChange={handleInputChange} /><br />
          </div>
          <input className='button' type="submit" value={"AGREGAR"} />
        </form>
      </div>

    </>
  )
}

export default CreateUser