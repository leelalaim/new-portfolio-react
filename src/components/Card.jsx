import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const TechStack = styled.div`
  background-color: #e7c039;
  width: fit-content;
  color: #1f1f1f;
  padding: 4px 6px;
`

const Image = styled.img`
  width: 400px;
  // height: 300px;
  object-fit: fill;
`

const Card = () => {
  return (
    <div style={{ width: '100px', border: '1px solid red' }}>
      <Image
        src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
        alt="card"
      />
      <h3>project name</h3>
      <TechStack>JavaScript</TechStack>
      <p>some project description</p>
      <a target="_blank" rel="noreferrer" href="https://github.com/leelalaim">
        <FontAwesomeIcon icon={faGithub} color="#ffffff" size="2x" />
      </a>
    </div>
  )
}

export default Card
