import styled from 'styled-components'

const CardCaption = styled.div`
  position: absolute;
  width: 250px;
  height: 400px;
  z-index: 1112;
  color: #000;
  border-radius: 16px;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 26px;
  transition: opacity 1s;

  &:hover {
    opacity: 1;
  }
`

export default CardCaption
