import React from "react";
import styled from "styled-components";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";

function Cart({cartItems}) {
    const getTotalPrice = () => {
        let total =  0;
        cartItems.forEach((item) => {
            total += (parseInt(item.price))* (parseInt(item.quantity))
        });
        return total;
    }

    const getCount = ()=> {
        let count = 0;
        console.log(cartItems);
            cartItems.forEach((item) => {
                count += parseInt(item.quantity);
            });

            return count;
    }

    return(
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal getCount={getCount} getTotalPrice={getTotalPrice}/>
        </Container>
    )
}
export default Cart

const Container = styled.div`
    display:flex;
    padding:14px 18px 0 18px;
    align-item:flex-start;
`