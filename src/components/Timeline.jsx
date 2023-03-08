import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

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
const ExperienceTimeline = () => {
  return (
    <div
      style={{
        border: '1px solid #E7C039',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Timeline
      </h1>
      <Timeline>
        {history.map((item) => (
          <TimelineItem key={`item-${item.position}`}>
            <TimelineOppositeContent fontSize="12px" fontFamily="Inter Regular">
              {item.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent fontSize="14px" fontFamily="Inter Regular">
              {item.position}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
export default ExperienceTimeline
