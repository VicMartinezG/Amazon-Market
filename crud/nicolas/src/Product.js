import React from "react";
import styled from "styled-components";
import Axios from "axios";

function Product(props) {

   const addToCart = () => {
    console.log(props.id);
    const cartITem = Axios.get('http://localhost:8000/users/cartitems-all/').then((response) => {
        
        if(response.exists) {
            cartITem.update({
                quantity: parseInt(response.data().quantity) + 1
                
            })
        } else {
            Axios.post('http://localhost:8000/users/cartitems-create/',{
                name:props.title,
                image:props.image,
                price:props.price,
                quantity:1
            })
        }
     })
   }


    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Price>
                S/{props.price}
            </Price>
            <Rating>
                ⭐ ⭐ ⭐ ⭐ ⭐
            </Rating>
            <Image src={props.image} />
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Agregar al carrito
                </AddToCartButton>
            </ActionSection>
        </Container>

    )
}
export default Product

const Container = styled.div`
    background-color:white;
    z-index:100;
    flex:1;
    padding:20px;
    margin:10px;
    max-height:400px;
    display:flex;
    flex-direction:column;



`
const Title = styled.span`

`
const Price = styled.span`
    font-weight: 500;
    margin-top:3px;
`
const Rating = styled.div`

`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const ActionSection = styled.div`
    margin-top:12px;
    display:flex;
    align-items:center;
    justify-content: center;
`
const AddToCartButton = styled.button`
    width:  100px;
    height: 40px;
    background-color: #f0c14b;
    border:2px solid #a88734;
    border-radius:2px;
    cursor:pointer;
`