import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Movie App</FooterText>
            <FooterPara>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea corrupti accusantium quibusdam?</FooterPara>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color:#1a242f;
    height:72px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#ffffff;
    flex-direction:column;
`
const FooterText = styled.div`

`
const FooterPara = styled.div`

`

export default Footer

