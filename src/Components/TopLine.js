import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 40px;
  top: 0;
  position: fixed;
  background-color: #173854;
`

const Notch = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 0 0 1em 0;
  margin: 0 auto;
  background-color: #173854;
  transform: rotate(45deg);
`

const TopLine = () => {
  return (
    <Container>
      <Notch />
    </Container>
  )
}

export default TopLine
