import styled from 'styled-components'

const CheerButton = styled.button`
  border-radius: 5em;
  border: none;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  padding: 0.5em 1em;
  background-color: #F5C95B;
  margin-top: 1em;
  cursor: pointer;
  transition: filter 0.5s;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: invert(1);
  }
`

export default CheerButton
