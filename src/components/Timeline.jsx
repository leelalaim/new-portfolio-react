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
  width: fit-content;
  padding: 14px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`

const StyledListItem = styled(ListItem)`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const ExperienceTimeline = () => {
  return (
    <StyledList>
      {history.map((el) => (
        <StyledListItem mb={4}>
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
