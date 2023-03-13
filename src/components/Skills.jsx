import { TriangleUpIcon } from '@chakra-ui/icons'
import styled from 'styled-components'
import { List, ListItem } from '@chakra-ui/react'

const history = [
  { year: '2023/01', position: 'Frontend Developer (HiQ)' },
  { year: '2021/11 - 2022/12', position: 'Frontend Developer (Werlabs)' },
  {
    year: '2021/01 - 2021/06',
    position: 'Frontend Web Development bootcamp (Technigo)',
  },
  { year: '2018/05 - 2019/09', position: 'Marketing Manager (Medexy)' },
  { year: '2018/02 - 2019/05', position: 'Marketing Assistant (Medexy)' },
  {
    year: '2014/09 - 2017/08',
    position: 'BSc Renewable Energy Systems (University of South Wales)',
  },
]

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
