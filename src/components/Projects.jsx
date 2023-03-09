import ProjectCardWithImage from './ProjectCardWithImage'
import SurveyImage from '../assets/images/friend_match.jpg'
import jokeio from '../assets/images/jokeio.jpg'
import heart from '../assets/images/heart.jpg'
import movie from '../assets/images/movies.jpg'
import gallery from '../assets/images/dev-gallery.jpg'
import guess from '../assets/images/guess-who.jpg'
import bot from '../assets/images/chat-bot.png'
import momento from '../assets/images/business-site.jpg'
import styled from 'styled-components'
import { ReactComponent as YellowLineHorizontal } from '../assets/images/YellowLineHorizontal.svg'
import Fade from 'react-reveal/Fade'

import { Wrap, WrapItem, Center } from '@chakra-ui/react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 40px;
  justify-content: center;
  @media (min-width: 768px) {
    align-items: center;
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
    justify-content: center;
  }
`

const OtherProjectsCardWrapper = styled(CardWrapper)`
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const StyledLine = styled(YellowLineHorizontal)`
  width: 100px;
  margin-bottom: 36px;
`

const Text = styled.h2`
  color: #e7c039;
  font-size: 24px;
  margin-bottom: 24px;
`

const Projects = () => {
  return (
    <Container>
      <Fade>
        <StyledLine />
        <CardWrapper>
          {MainProjects.map((project) => (
            <ProjectCardWithImage
              key={`${project.name}-main`}
              image={project.image}
              name={project.name}
              description={project.description}
              allStackUsed={project.stack}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </CardWrapper>
        <Text>Other Projects</Text>
        <OtherProjectsCardWrapper>
          {OtherProjects.map((project) => (
            <ProjectCardWithImage
              key={`${project.name}-other`}
              name={project.name}
              description={project.description}
              allStackUsed={project.stack}
              githubLink={project.link}
              deployedLink={project.deployedLink}
            />
          ))}
        </OtherProjectsCardWrapper>
      </Fade>
    </Container>
  )
}

const MainProjects = [
  {
    image: gallery,
    name: 'DEV GALLERY',
    description:
      'A place where bootcamp students share their awesome projects!',
    stack: ['React', 'Redux', 'Node.js'],
    githubLink: 'https://github.com/leelalaim/final-project',
  },
  {
    image: SurveyImage,
    name: 'FRIENDS MATCH SURVEY',
    description:
      'Project of a Friend Match Survey (a Typeform like product). Built using React.',
    stack: ['React'],
    githubLink: 'https://github.com/leelalaim/project-survey',
    deployedLink: 'https://friend-match.netlify.app/',
  },
  {
    image: jokeio,
    name: 'JOKEIO - JOKE APP',
    description:
      'A fullstack project of a joke generator with sign up and sign in forms.',
    stack: ['React', 'Redux', 'API'],
    githubLink: 'https://github.com/leelalaim/project-auth',
    deployedLink: 'https://jokeio.netlify.app/signin',
  },
  {
    image: heart,
    name: 'HAPPY THOUGHTS APP',
    description:
      'A Twitter kind Happy Thoughts app. Fetching and posting data to an API.',
    stack: ['React', 'Redux', 'API'],
    githubLink: 'https://github.com/leelalaim/project-happy-thoughts',
  },
  {
    image: movie,
    name: 'MULTI-PAGE MOVIE APP',
    description:
      'A multi-page application built using React Router, useState and useEffect.',
    stack: ['React'],
    githubLink: 'https://github.com/leelalaim/project-movies',
    deployedLink: 'https://our-movies-project.netlify.app/',
  },
  {
    image: guess,
    name: 'GUESS WHO GAME',
    description:
      'A digital version of the old character guessing board game "Guess Who?"',
    stack: ['JavaScript', 'HTML', 'CSS3'],
    githubLink: 'https://github.com/leelalaim/project-guess-who',
    deployedLink: 'https://my-guess-who-game.netlify.app/',
  },
  {
    image: bot,
    name: 'BEAUTY STUDIO CHAT BOT',
    description: 'Chat bot for beauty studio sign-up.',
    stack: ['JavaScript', 'HTML', 'CSS3'],
    githubLink: 'https://github.com/leelalaim/project-chatbot',
    deployedLink: 'https://beauty-studio-chat-bot.netlify.app/',
  },
  {
    image: momento,
    name: 'MOMENTO PHOTOGRAPHY',
    description: 'A buisiness website.',
    stack: ['JavaScript', 'HTML', 'CSS3'],
    githubLink: 'https://github.com/leelalaim/project-business-site',
    deployedLink: 'https://momento-photography.netlify.app/',
  },
]

const OtherProjects = [
  {
    name: 'JOKE GENERATOR',
    description: 'A mobile joke generator application',
    stack: ['React Native'],
    githubLink: 'https://github.com/leelalaim/project-react-native-app',
  },
  {
    name: 'TRAVEL NEWS SITE',
    description: 'Responsive webpage for mobile, desktop and tablet.',
    stack: ['HTML', 'CSS3'],
    githubLink: 'https://github.com/leelalaim/project-news-site',
  },
  {
    name: 'STOCKHOLM WEATHER APP',
    description:
      'Stockholm weather app that extracts the information from an API.',
    stack: ['JavaScript', 'HTML', 'CSS3'],
    githubLink: 'https://github.com/leelalaim/project-weather-app',
  },
  {
    name: 'MUSIC RELEASES',
    description:
      'Music Releases site that HAS similar design to Spotify. Built using React and API data from Spotify.',
    stack: ['React'],
    githubLink: 'https://github.com/leelalaim/project-music-releases',
    deployedLink: 'https://music-releases-site.netlify.app/',
  },
]

export default Projects
