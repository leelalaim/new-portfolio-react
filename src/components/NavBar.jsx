import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import { Link, NavLink } from 'react-router-dom'

const Nav = styled.nav`
  font-family: 'Inter Regular';
  background-color: #1f1f1f;
  font-size: 16px;
  padding-right: 64px;
`

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
`

const ListItem = styled.li`
  list-style: none;
  margin-left: 32px;
  margin-top: 24px;
  margin-bottom: 24px;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #E7C039;
  }
  }}
`

const Navigation = [
  { link: '/', page: 'HOME' },
  { link: '/about', page: 'ABOUT' },
  { link: '/projects', page: 'PROJECTS' },
]

export const NavBar = () => {
  return (
    <Nav>
      <List>
        {Navigation.map((item) => {
          return (
            <ListItem>
              <StyledLink to={item.link}>{item.page}</StyledLink>
            </ListItem>
          )
        })}
      </List>
    </Nav>
  )
}

export default NavBar
