import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

function Header({cartItems}) {

    const getCount = ()=> {
        let count = 0;
        console.log(cartItems);
            cartItems.forEach((item) => {
                count += parseInt(item.quantity);
            });

            return count;
    }

    return (
        <div>
            <Container>
                <HeaderLogo>
                    <Link to="/">
                        <img src={"https://i.imgur.com/7I9Was5.png"} alt="logo-amazon" />
                    </Link>

                </HeaderLogo>
                <HeaderOptionAddress>
                    <LocationOnIcon />
                    <HeaderOption>
                        <OptionLineOn>Delivery</OptionLineOn>
                        <OptionLineTwo>Perú</OptionLineTwo>
                    </HeaderOption>

                </HeaderOptionAddress>
                <HeaderSearch>
                    <HeaderSearchInput type="text" />
                    <HeaderSearchIconContainer>
                        <SearchIcon />
                    </HeaderSearchIconContainer>
                </HeaderSearch>
                <HeaderNavItems>
                    <HeaderOption>
                    <Link to="/crearUser">
                    <OptionLineOn>Hola, Registrate</OptionLineOn>
                        <OptionLineTwo>Cuenta & Listas</OptionLineTwo>

                    </Link>

                    </HeaderOption>
                    <HeaderOption>
                        <OptionLineOn>Retornos</OptionLineOn>
                        <OptionLineTwo>& Ordenes</OptionLineTwo>
                    </HeaderOption>

                    <HeaderOptionCart>
                        <Link to="/cart">
                            <AddShoppingCartIcon />
                            <CartCount>{getCount()}</CartCount>
                        </Link>
                    </HeaderOptionCart>


                </HeaderNavItems>
            </Container>

        </div>
    )
}

export default Header

const Container = styled.div`
    height:60px;
    background-color: #0F1111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;

`
const HeaderLogo = styled.div`
    img {
        width:100px;
        margin-left:11px;
    }
`
const HeaderOptionAddress = styled.div`
    padding-left:9x;
    display:flex;
    align-items:center;

`
const OptionLineOn = styled.div`
    color:white;
    font-weight: 700;

`
const OptionLineTwo = styled.div`
    font-weight: 700;
    color:white;
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }

`
const HeaderSearchInput = styled.input`
    flex-grow:1;
    border:0;
    :focus {
        outline:none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width:45px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
`
const HeaderNavItems = styled.div`
    display:flex;
`
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;

`
const HeaderOptionCart = styled.div`
    display:flex;
    a {
        display: flex;
        align-items:center;
        padding-right:9px;
        color:white;
        text-decoration:none;
    }
`
const CartCount = styled.div`
    paddind-left:4px;
    font-weight:700;
    color: #f08804;
`
