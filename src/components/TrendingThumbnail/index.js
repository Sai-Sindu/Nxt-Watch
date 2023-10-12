import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  LinkContainer,
  TrendingThumbnailCard,
  TrendingThumbnailImg,
  TrendingThumbnailDetailsCard,
  TrendingThumbnailTitle,
  TrendingThumbnailName,
  Text,
  ViewCountPublishedAtCard,
  Separator,
} from './styledComponents'

const TrendingThumbnail = props => {
  const {trendingVideoDetails} = props
  const {
    id,
    name,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = trendingVideoDetails

  const d = new Date(publishedAt)
  const day = d.getDate()
  const month = d.getMonth()
  const year = d.getFullYear()
  const time = formatDistanceToNow(new Date(year, month, day))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LinkContainer to={`/videos/${id}`}>
            <TrendingThumbnailCard>
              <TrendingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingThumbnailDetailsCard>
                <TrendingThumbnailTitle isDarkTheme={isDarkTheme}>
                  {title}
                </TrendingThumbnailTitle>
                <TrendingThumbnailName isDarkTheme={isDarkTheme}>
                  {name}
                </TrendingThumbnailName>
                <ViewCountPublishedAtCard>
                  <Text isDarkTheme={isDarkTheme}>{viewCount} views</Text>
                  <Separator isDarkTheme={isDarkTheme} />
                  <Text isDarkTheme={isDarkTheme}>{time} ago</Text>
                </ViewCountPublishedAtCard>
              </TrendingThumbnailDetailsCard>
            </TrendingThumbnailCard>
          </LinkContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingThumbnail
