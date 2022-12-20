import styled from 'styled-components'

import { ReactComponent as YellowLine } from '../assets/images/YellowLine.svg'
import SocialMedia from './SocialMedia'

const Container = styled.div`
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 0 140px;
    align-items: flex-start;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const Content = styled.div`
  margin-bottom: 64px;
`

const Name = styled.h1`
  font-family: Cour;
  font-size: 46px;
  @media (min-width: 768px) {
    margin: 0 0 0 24px;
    font-size: 72px;
  }
`

const Developer = styled.h2`
  margin: 0;
  font-size: 20px;
  margin-left: 12px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

const StyledLine = styled(YellowLine)`
  height: 70px;
`

const Main = () => {
  return (
    <Container>
      <Content>
        <Name>
          Laima <br />
          Duhovnaja
        </Name>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <StyledLine />
          <Developer>frontend developer</Developer>
        </div>
      </Content>
      <SocialMedia />
    </Container>
  )
}

export default Main
