import styled from 'styled-components'

const TechCardStyled = styled.span`
  background-color: #e7c039;
  color: black;
  padding: 5px;
  margin: 0px 5px 10px 0px;
  font-size: 11px;
  line-height: 11px;
`

export const TechCard = ({ stack }) => {
  return <TechCardStyled>{stack}</TechCardStyled>
}
