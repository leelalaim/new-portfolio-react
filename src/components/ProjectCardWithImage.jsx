import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { TechCard } from './TechCard'

const ProjectCard = ({ image, name, allStackUsed, description, link }) => {
  return (
    <Card maxW="300px" bg="#1f1f1f" mb={5}>
      {image && (
        <Image objectFit="cover" src={image} alt="Chakra UI" height="300px" />
      )}
      <CardHeader p={0} mb={2}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box>
            <Heading size="sm" py={3} color="#ffffff">
              {name}
            </Heading>
            {allStackUsed.map((stack) => (
              <TechCard stack={stack} />
            ))}
          </Box>
        </Flex>
      </CardHeader>
      <CardBody p={0}>
        <Text pb={4} color="#ffffff">
          {description}
        </Text>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon as={FaGithub} color="#ffffff" boxSize={6} />
        </a>
      </CardBody>
    </Card>
  )
}

export default ProjectCard
