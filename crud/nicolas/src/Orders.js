import db from '../../node/database/db';
import React, { useEffect, useState } from 'react';
import '/Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db
        .Sequelize('mysql')
        .onSnapshot(snapshot => (
            setOrders(snapshot.db.map(db =>({
                id: db.id,
                data: db.data()

            })))
        ))
    

  }, [])

  return (
    <div className='orders'>
        <h1>Tus ordenes estan listas</h1>
      
    </div>
  )
}

export default Orders