import ProjectCardWithImage from './ProjectCardWithImage'
import SomeOtherPic from '../assets/images/business-site.jpg'
import styled from 'styled-components'
import { ReactComponent as YellowLineHorizontal } from '../assets/images/YellowLineHorizontal.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 40px;
  justify-content: center;
  @media (min-width: 768px) {
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    max-width: 1440px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    border: 1px solid red;
  }
`

const StyledLine = styled(YellowLineHorizontal)`
  width: 100px;
  margin-bottom: 36px;
`

const Projects = () => {
  return (
    <Container>
      <StyledLine />
      <CardWrapper>
        <ProjectCardWithImage
          image={SomeOtherPic}
          name="Some project"
          description="Some some text"
          allStackUsed={['html', 'css']}
        />
        <ProjectCardWithImage
          image={SomeOtherPic}
          name="Some project"
          description="Some some text"
          allStackUsed={['html', 'css']}
        />
        <ProjectCardWithImage
          image={SomeOtherPic}
          name="Some project"
          description="Some some text"
          allStackUsed={['html', 'css']}
        />
        <ProjectCardWithImage
          image={SomeOtherPic}
          name="Some project"
          description="Some some text"
          allStackUsed={['html', 'css']}
        />
        <ProjectCardWithImage
          image={SomeOtherPic}
          name="Some project"
          description="Some some text"
          allStackUsed={['html', 'css']}
        />
        <ProjectCardWithImage
          image={SomeOtherPic}
          name="Some project"
          description="Some some text"
          allStackUsed={['html', 'css']}
        />
      </CardWrapper>
    </Container>
  )
}

export default Projects
