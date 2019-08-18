import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import navbarimage from '../images/navbarimage.jpeg'

const Header = styled.div`
    width: 100vw;
    font-size: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${navbarimage});
    filter: brightness(75%);
    background-color: transparent;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

const HeaderTagLine = styled.p`
    filter: brightness(100%);
    color: white;
    position: sticky;
    top: 100px;
    
`


const HeaderBar = () => {
    return (
        <Header>
            <HeaderTagLine>Full Stack Coding Meetup NYC</HeaderTagLine>
        </Header>
    )
}


export default HeaderBar