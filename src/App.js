import React, { Component, Fragment } from 'react'
import axios from 'axios'

import Beer from './beer.png'

import Container from './Components/Container'
import TopLine from './Components/TopLine'
import Header from './Components/Header'
import Image from './Components/Image'
import ImageWrapper from './Components/ImageWrapper'
import SubHeader from './Components/SubHeader'
import CheerButton from './Components/CheerButton'
import MainCard from './Components/MainCard'
import CardContainer from './Components/CardContainer'
import CardCaption from './Components/CardCaption'
import { SecondaryCardOne, SecondaryCardTwo, SecondaryCardThree } from './Components/SecondaryCard'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      beer: {
        name: 'Cheers!',
        image_url: Beer
      }
    }
  }

  async random () {
    let result = await axios.get('https://api.punkapi.com/v2/beers/random').then(response => response.data)
    this.setState({ beer: result[0] })
  }

  render () {
    const { beer } = this.state

    return (
      <Fragment>
        <TopLine />
        <Container>
          <Header>BEER FOR TODAY</Header>
          <SubHeader>LET’S HAVE SOME FUN</SubHeader>
          <CheerButton onClick={() => this.random()}>Cheers!</CheerButton>
          <CardContainer>
            <SecondaryCardThree><Image src={Beer} /></SecondaryCardThree>
            <SecondaryCardTwo><Image src={Beer} /></SecondaryCardTwo>
            <SecondaryCardOne><Image src={Beer} /></SecondaryCardOne>
            <MainCard>
              <ImageWrapper>
                <Image src={beer.image_url} />
              </ImageWrapper>
              <CardCaption>{beer.name}</CardCaption>
            </MainCard>
            <SecondaryCardOne><Image src={Beer} /></SecondaryCardOne>
            <SecondaryCardTwo><Image src={Beer} /></SecondaryCardTwo>
            <SecondaryCardThree><Image src={Beer} /></SecondaryCardThree>
          </CardContainer>
        </Container>
      </Fragment>
    )
  }
}

export default App
