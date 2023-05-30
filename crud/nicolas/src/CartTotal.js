import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CartTotal({getTotalPrice, getCount}) {

    return(
        <Container>
            <Subtotal>
                Subtotal ({getCount()} items): S/{getTotalPrice()}
            </Subtotal>
            <CheckoutButton>
                <Link to="/payment">
                    Proceder a pagar                
                </Link>
            </CheckoutButton>
        </Container>
    )
}
export default CartTotal

const Container = styled.div`
    height:200px;
    flex:0.2;
    padding:20px;
    background-color:white;
`
const Subtotal = styled.h2 `
    margin-bottom:16px;
`
const CheckoutButton = styled.button `
    background-color: #f0c14b;
    width:100%;
    border: 2px solind #a88734;
    border-radius:4px;
    cursor:pointer;
    font-size:16px;
    :hover {
        background: #ddb347;
    }
`