import './App.css';
import React, { useEffect, useState } from "react";
import CreateUser from './user/createUser';
import Login from './user/login';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import Payment from './Payment';
//import Orders from '/Orders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Axios from "axios";

function App() {
  const [cartItems, setListaCartITems] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:8000/users/cartitems-all/').then((response) => {
        setListaCartITems(response.data)
    })
}, [])


  return (
   
    <Router>
      <Container>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path='cart/*' element={<Cart cartItems={cartItems}/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/crearUser' element={<CreateUser/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={<Payment/>}/>
          {/*<Route path='/orders' element={<Orders/>}/>*/}
        </Routes>
      </Container>
    </Router>

  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;

`
