import ThemeContext from '../../context/ThemeContext'

import {
  LinkContainer,
  GamingThumbnailCard,
  GamingThumbnailImg,
  GamingThumbnailTitle,
  GamingThumbnailViewCount,
} from './styledComponents'

const GamingThumbnail = props => {
  const {gamingVideoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingVideoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LinkContainer to={`/videos/${id}`}>
            <GamingThumbnailCard>
              <GamingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingThumbnailTitle isDarkTheme={isDarkTheme}>
                {title}
              </GamingThumbnailTitle>
              <GamingThumbnailViewCount isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </GamingThumbnailViewCount>
            </GamingThumbnailCard>
          </LinkContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingThumbnail
