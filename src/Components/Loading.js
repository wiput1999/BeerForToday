import React from 'react'
import styled, { keyframes } from 'styled-components'
import Beer from '../beer.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  top: 0;
  left: 0;
  display: flex;
  background-color: #fbf8f4;
  justify-content: center;
  align-items: center;
`

const LoadingImage = styled.img`
  width: 15vw;
  animation: ${rotate} 2s linear infinite;
`

const Loading = ({ className }) => (
  <Container className={className}>
    <LoadingImage src={Beer} />
  </Container>
)

export default Loading
