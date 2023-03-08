import ProjectCard from './ProjectCard'
import ProfilePic from '../assets/images/prof-pic.jpg'

const Projects = () => {
  return <ProjectCard image={ProfilePic} />
import styled from 'styled-components'
import Card from './Card'
import { ReactComponent as YellowLineHorizontal } from '../assets/images/YellowLineHorizontal.svg'
import ImageAndText from '../components/ImageAndText'

const StyledLine = styled(YellowLineHorizontal)`
  width: 100px;
`

// const Projects = () => {
//   return <ImageAndText name="Arturito" surename="Dauginas" />
// }

export default Projects
