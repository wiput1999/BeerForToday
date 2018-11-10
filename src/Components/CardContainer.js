import styled from 'styled-components'

const CardContainer = styled.div`
  width: 110%;
  margin-left: -5%;
  margin-top: 5vh;
  display: grid;
  grid-template-areas: "a a a a a a a";
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1440px) {
    grid-template-areas: "a a a a a";
  }

  @media (max-width: 975px) {
    grid-template-areas: "a a a";
    width: 100%;
    margin-left: 0;
  }

`

export default CardContainer
