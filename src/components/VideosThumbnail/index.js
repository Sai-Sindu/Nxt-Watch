import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  LinkContainer,
  VideosThumbnailCard,
  ThumbnailImg,
  ThumbnailDescriptionCard,
  ProfileImg,
  DetailsCard,
  TitleText,
  Text,
  ViewCountPublishedAtCard,
  Separator,
} from './styledComponents'

const VideosThumbnail = props => {
  const {videoDetails} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

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
            <VideosThumbnailCard>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailDescriptionCard>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <DetailsCard>
                  <TitleText isDarkTheme={isDarkTheme}>{title}</TitleText>
                  <Text>{name}</Text>
                  <ViewCountPublishedAtCard>
                    <Text>{viewCount}</Text>
                    <Separator />
                    <Text>{time} ago</Text>
                  </ViewCountPublishedAtCard>
                </DetailsCard>
              </ThumbnailDescriptionCard>
            </VideosThumbnailCard>
          </LinkContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideosThumbnail
