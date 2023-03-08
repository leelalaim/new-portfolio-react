import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const UsedTech = styled.span`
  background-color: #e7c039;
  color: black;
  padding: 5px;
  margin: 0px 5px 10px 0px;
  font-size: 11px;
  line-height: 11px;
`

const ProjectCard = ({ image }) => {
  return (
    <Card maxW="sm">
      <Image objectFit="cover" src={image} alt="Chakra UI" height="356px" />
      <CardHeader p={2}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box>
            <Heading size="sm" py={3}>
              FRIENDS MATCH SURVEY
            </Heading>
            <UsedTech class="used-tech">HTML</UsedTech>
            <UsedTech class="used-tech">JavaScript</UsedTech>
            <UsedTech class="used-tech">React</UsedTech>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody p={2}>
        <Text pb={4}>
          Project of a Friend Match Survey (a Typeform like product). Built
          using React.
        </Text>
        <Icon as={FaGithub} />
      </CardBody>
    </Card>
  )
}

export default ProjectCard
