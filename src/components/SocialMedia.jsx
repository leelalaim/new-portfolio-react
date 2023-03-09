import { Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
          href="https://www.linkedin.com/in/laimaduhovnaja/"
          style={{ marginRight: '16px' }}
        >
          <Icon as={FaGithub} boxSize={6} _hover={{ color: '#E7C039' }} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/leelalaim">
          <Icon as={FaLinkedin} boxSize={6} _hover={{ color: '#E7C039' }} />
        </a>
      </li>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
