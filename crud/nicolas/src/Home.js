import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import Axios from "axios";

function Home() {
    const [listaProductos, setListaProductos] = useState([])


    useEffect(() => {
        Axios.get('http://localhost:8000/users/products/').then((response) => {
            setListaProductos(response.data)
        })
    }, [])

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    listaProductos.map((data) => (
                        <Product 
                            title={data.nom_prod}
                            price={data.precio}
                            image={data.img_product}
                            id={data.id}
                        />
                    ))
                }

            </Content>
        </Container>
    )
}
export default Home

const Container = styled.div`
    max-width: 1500px;
    margin:0 auto;
`
const Banner = styled.div`
    background-image: url('https://m.media-amazon.com/images/I/61W-QJozfgL._SX3000_.jpg');
    min-height:600px;
    background-position: center;
    background-size: cover;
    z-index:1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    padding-left:10px;
    padding-right:10px;
    margin-top:-350px;
    display:flex;
    flex-wrap:wrap;
`