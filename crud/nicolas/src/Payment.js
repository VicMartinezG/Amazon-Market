import React, { useState, useEffect } from 'react'
import "./Payment.css"
import Axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
//import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { getTotalPrice } from './CartTotal'
//import CurrencyFormat from "react-currency-format";
import CartItem from './CartItem';

const promise = loadStripe('pk_test_51MS9IUCwc8NvWGNJanV1sLj0WWvCtMyDaHp7DXEAwKx0lERK9Yq0ilIxpwzQFvKtWISPKDa3rp0lj4dM8mCoosP000LwdSJ0r5');


function Payment({}) {
   const [cartItem, setCartItem] = useState([]);
    console.log(cartItem)
   
   //const history = useHistory();
   //const stripe = useStripe();
   //const elements = useElements();

   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState("");
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true); 
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
    const getClientSecret = async () => {
        const response = await Axios({
            method: 'post',
            url: `/payments/create?total=${getTotalPrice() * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
   },[])
   console.log('Secret >>>', clientSecret)
   //console.log('123', user)

   const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentintent = payment confirmation
            db  
                .Sequelize('mysql')
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cartItem: cartItem,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        }) 
    }

   const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

   
    
    useEffect(() => {
        Axios.get('http://localhost:8000/users/cartitems/').then((response) => {
            setCartItem(response.data)
        })
    }, [])

  return (
    <div className='payment'>
        <div className='payment__container'>
            {/* Payment section - delivery address*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Direccion de Envio</h3>
                </div>
                <div className='payment__address'>
                    <p>Usuario</p>
                    <p>Direccion</p>
                    <p>Ciudad</p>

                </div>
            </div>

            {/* Payment section - Review items*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Revisar objetos y envio</h3>
                </div>
                <div className='payment__items'>
                    {/*{cartItem.map((item) => (
                        <CartItem
                            id={item.id}
                            item={item}                        
                        />
                    ))}*/}
                    <h3>id</h3>
                    <h3>nombre</h3>
                    <h3>imagen</h3>
                    <h3>precio</h3>
                </div>

            </div>

            {/* Payment section - Payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Metodo de pago</h3>
                </div>
                <div className='payment__details'>
                    {/*Stripe*/}
                    <form onSubmit={handleSubmit}>
                       {/* <CardElement onChange={handleChange}/>
                        <div className='payment__pricecontainer'>
                            <CurrencyFormat
                                /*renderText={(value) => (
                                    <>
                                    <h3>Total: {value}</h3>
                                    </>
                                )}
                                decimaleScale={2}
                                value={getTotalPrice()}
                                displayTYpe={"text"}
                                thousandSeparator={true}
                                prefix={"S/"}
                                />
                        </div> */}
                        <button disabled={processing || disabled ||
                        succeeded}>
                            <span>{processing ? <p>Processing</p> :
                            "Comprar Ahora"}</span>
                        </button>
                    <div>
                        {/*Error*/}
                        {error && <div>{error}</div>}

                    </div>
                    </form>

                </div>
            </div>
        </div>     
    </div>
  )
}

export default Payment
