
import styled from 'styled-components'
import Card from './Card'

const SecondaryCardOne = styled(Card)`
  background-color: #CFD9D5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SecondaryCardTwo = styled(Card)`
  background-color: #E1EDE7;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 975px) {
    display: none;
  }
`

const SecondaryCardThree = styled(Card)`
  background-color: #EDF7F3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    display: none;
  }


`

export { SecondaryCardOne, SecondaryCardTwo, SecondaryCardThree }
