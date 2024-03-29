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
  border: 1px solid #e7c039;
  width: 100%;
  padding: 14px;
  margin-bottom: 36px;
  @media (min-width: 768px) {
    margin-bottom: 64px;
    padding: 24px 96px;
    width: fit-content;
  }
`

const StyledListItem = styled(ListItem)``

const ExperienceTimeline = () => {
  return (
    <StyledList>
      {history.map((el) => (
        <StyledListItem mb={4} justify="center" width="fit-content">
          <div>
            <TriangleUpIcon color="#E7C039" mr={2} />
            <span style={{ color: '#E7C039', marginRight: '6px' }}>
              {el.year}
            </span>
            {el.position}
          </div>
        </StyledListItem>
      ))}
    </StyledList>
  )
}
export default ExperienceTimeline
