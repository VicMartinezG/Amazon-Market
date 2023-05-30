import React from "react";
import styled from "styled-components";



function CartItem({id, item}) {
    let options = []

    for (let i=1; i<Math.max(item.quantity + 1 , 20); i++){
        options.push(<option value={i}> Cantidad: {i} </option>)
    }
    const changeQuantity = (newQuantity) => {
        console.log(newQuantity)
    }
    return(
        <Container>
            <ImagenContainer>
                <img src={item.image} />
            </ImagenContainer>
            <CartITemInfo>
                <CartItemInfoTop>
                    <h2>
                        {item.name}
                    </h2>
                </CartItemInfoTop>
                <CartITemInfoBottom>
                    <CarItemInfoQuantifyContainer>
                        <select value={item.quantity}
                            onChange={(e)=>changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>
                            
                    </CarItemInfoQuantifyContainer>
                    <CartITemDeleteContainer>
                            Delete
                    </CartITemDeleteContainer>
                </CartITemInfoBottom>
            </CartITemInfo>
            <CartItemPrice>
                    S/{item.price}
            </CartItemPrice>
        </Container>
    )

}

export default CartItem

const Container = styled.div`
    padding:12px 0px;
    display:flex;
    border-bottom:1px solid #DDD;

`
const ImagenContainer = styled.div`
    width:180px;
    height:180px;
    flex-shrink:0;
    flex-grow:0;
    margin-right:16px;

    img{
        object-fit:contain;
        height:100%;
        width:100%;
    }

`
const CartITemInfo = styled.div`
    flex-grow:1;

`
const CartItemInfoTop = styled.div`
    color:#007185;
    h2 {
        font-size: 18px;
    }
`
const CartITemInfoBottom = styled.div`
    display:flex;
    margin-top:4px;
    align-items:center;
`
const CarItemInfoQuantifyContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding:8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);

        :focus {
            outline: none;
        }
    }


`
const CartITemDeleteContainer = styled.div`
    color:#007185;
    margin-left:16px;
    cursor:pointer;
`
const CartItemPrice = styled.div`
    font-size:18px;
    font-weight:700;
    padding-top:20px;
    margin-left:16px;
`