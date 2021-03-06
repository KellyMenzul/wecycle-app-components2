import React from 'react'
import styled, { keyframes } from 'styled-components';


const Container = styled.div`
display: flex;
width:100%;

@keyframes move{
    0%{
        transform:translate(0)
    }
    50%{
        transform:translate(310px)
    }
}
`

const Image = styled.img`
width:100px;
animation:move 4s linear infinite;
`

const Holder = styled.div``


const MovingImage2 = ({
    image="/plasticbag.svg"

}) =>{
    
    return <Container>
        <Holder>
            <Image src={image}/>
        </Holder>
    </Container>
}

export default MovingImage2;