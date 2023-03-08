import styled from 'styled-components'
import { ReactComponent as YellowLineHorizontal } from '../assets/images/YellowLineHorizontal.svg'
import ProfilePic from '../assets/images/prof-pic.jpg'
import Fade from 'react-reveal/Fade'
import ExperienceTimeline from '../components/Timeline'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 40px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    padding: 18px 64px;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
const Wrapper = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 443px;
    text-align: left;
  }
`

const Intro = styled.div`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const StyledLine = styled(YellowLineHorizontal)`
  width: 100px;
`

const ProfileImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
  padding: 0 32px;
  @media (min-width: 768px) {
    padding: 0 114px 0 0;
    margin-bottom: 0;
  }
`

const ProfileImage = styled.img`
  object-fit: cover;
  width: 100%;

  @media (min-width: 768px) {
    height: 550px;
  }
`

const About = () => {
  return (
    <>
      <Container>
        <Content>
          <Fade>
            <ProfileImageWrapper>
              <ProfileImage src={ProfilePic} alt="profile" />
            </ProfileImageWrapper>
          </Fade>

          <Wrapper>
            <Fade right>
              <Intro>
                Highly motivated and goal driven Frontend Developer with a
                strong passion for React. Latest developer experience include
                working at a HealthTech company and a graduate from Technigo - a
                fast-paced Frontend development bootcamp.
                <br />I have a strong interest in technology, I am an analytical
                minded and creative person. Enjoy being challenged and
                continuously developing my skills by dedicating my time to
                learning.
              </Intro>
              <div style={{ marginTop: '18px' }}>
                <StyledLine />
              </div>
            </Fade>
          </Wrapper>
        </Content>
        <Fade>
          <ExperienceTimeline />
        </Fade>
      </Container>
    </>
  )
}

export default About
