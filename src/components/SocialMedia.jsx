import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const SocialMediaWrapper = styled.ul`
  list-style: none;
  display: flex;
`

const SocialMedia = () => {
  return (
    <SocialMediaWrapper style={{ width: 'fit-content', padding: 0 }}>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href=""
          style={{ marginRight: '16px' }}
        >
          <FontAwesomeIcon icon={faLinkedin} color="#ffffff" size="2x" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="">
          <FontAwesomeIcon icon={faGithub} color="#ffffff" size="2x" />
        </a>
      </li>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
