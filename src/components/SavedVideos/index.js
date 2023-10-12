import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Navbar from '../Navbar'
import NavigationsSection from '../NavigationsSection'
import ThemeContext from '../../context/ThemeContext'

import TrendingThumbnail from '../TrendingThumbnail'

import {
  MainPageContainer,
  NavigationSectionContainer,
  SavedVideosContainer,
  SavedVideosHeaderCard,
  SavedVideosIconCard,
  SavedVideosTitle,
  NoSavedVideosViewContainer,
  NoSavedVideosViewImg,
  NoSavedVideosViewTitle,
  NoSavedVideosViewDescription,
  SavedVideosListContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NoSavedVideosViewContainer isDarkTheme={isDarkTheme}>
            <NoSavedVideosViewImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosViewTitle isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoSavedVideosViewTitle>
            <NoSavedVideosViewDescription isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </NoSavedVideosViewDescription>
          </NoSavedVideosViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSavedVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value

        return (
          <>
            <SavedVideosHeaderCard isDarkTheme={isDarkTheme}>
              <SavedVideosIconCard isDarkTheme={isDarkTheme}>
                <HiFire color="#ff0000" size="30px" />
              </SavedVideosIconCard>
              <SavedVideosTitle isDarkTheme={isDarkTheme}>
                Saved Videos
              </SavedVideosTitle>
            </SavedVideosHeaderCard>
            <SavedVideosListContainer>
              {savedVideosList.map(eachVideo => (
                <TrendingThumbnail
                  trendingVideoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </SavedVideosListContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value
          return (
            <>
              <Navbar />
              <MainPageContainer>
                <NavigationSectionContainer isDarkTheme={isDarkTheme}>
                  <NavigationsSection />
                </NavigationSectionContainer>
                <SavedVideosContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="savedVideos"
                >
                  {savedVideosList.length > 0
                    ? this.renderSavedVideosView()
                    : this.renderNoSavedVideosView()}
                </SavedVideosContainer>
              </MainPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
