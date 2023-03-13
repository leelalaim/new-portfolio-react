import styled from 'styled-components'
import { List } from '@chakra-ui/react'

const StyledList = styled(List)`
  width: 100%;
  padding: 14px;
  margin-bottom: 24px;
  text-align: center;
  @media (min-width: 768px) {
    margin-bottom: 0px;
    padding: 24px 96px;
    width: fit-content;
  }
`

const Heading = styled.h1`
  color: #e7c039;
  font-weight: 500;
  margin-bottom: 20px;
`

const techSkills = [
  'Typescript',
  'React',
  'Next.js',
  'E2E Testing (Playwright + Cucumber)',
  'Unit Testing (Jest & React Testing Library',
  'Styled Components',
  'JavaScript ES6',
  'HTML5',
  'CSS3',
  'Redux',
  'Node.js',
  'Express',
]

const Skills = () => {
  return (
    <StyledList>
      <Heading>TECH SKILLS</Heading>
      {techSkills.map((skill) => (
        <p>{skill}</p>
      ))}
    </StyledList>
  )
}
export default Skills
