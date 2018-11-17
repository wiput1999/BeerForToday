import styled from 'styled-components'
import Card from './Card'

const SecondaryCardOne = styled(Card)`
  background-color: #cfd9d5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SecondaryCardTwo = styled(Card)`
  background-color: #e1ede7;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 975px) {
    display: none;
  }
`

const SecondaryCardThree = styled(Card)`
  background-color: #edf7f3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1440px) {
    display: none;
  }
`

export { SecondaryCardOne, SecondaryCardTwo, SecondaryCardThree }
