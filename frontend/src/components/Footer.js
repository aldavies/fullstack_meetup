import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const FooterBar = styled.footer`
    background-color: #35414d;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

`

const StyledLink = styled(Link)`
    font-size: 12px;
    margin-left: 5px;
    padding: 20px;
    color: grey;
    text-decoration: none;
    :hover {
        color: black;
    }
`

const Footer = () => {
    return(
        <FooterBar>
            <StyledLink to="/">Terms of Service</StyledLink>
            <StyledLink to="/">Private Policy</StyledLink>
            <StyledLink to="/">Report Abuse</StyledLink>
        </FooterBar>
    ) 
        
}

export default Footer;