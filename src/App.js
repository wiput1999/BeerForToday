import React, { Component, Fragment } from 'react'

import Container from './Components/Container'
import TopLine from './Components/TopLine'
import Header from './Components/Header'
import SubHeader from './Components/SubHeader'
import CheerButton from './Components/CheerButton'
import MainCard from './Components/MainCard'
import CardContainer from './Components/CardContainer'
import { SecondaryCardOne, SecondaryCardTwo, SecondaryCardThree } from './Components/SecondaryCard'

import './App.css'

class App extends Component {
  render () {
    return (
      <Fragment>
        <TopLine />
        <Container>
          <Header>BEER FOR TODAY</Header>
          <SubHeader>LET’S HAVE SOME FUN</SubHeader>
          <CheerButton>Cheers!</CheerButton>
          <CardContainer>
            <SecondaryCardThree />
            <SecondaryCardTwo />
            <SecondaryCardOne />
            <MainCard />
            <SecondaryCardOne />
            <SecondaryCardTwo />
            <SecondaryCardThree />
          </CardContainer>
        </Container>
      </Fragment>
    )
  }
}

export default App
