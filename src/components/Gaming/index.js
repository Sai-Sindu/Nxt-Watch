import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Navbar from '../Navbar'
import NavigationsSection from '../NavigationsSection'
import ThemeContext from '../../context/ThemeContext'
import GamingThumbnail from '../GamingThumbnail'

import {
  MainPageContainer,
  NavigationSectionContainer,
  GamingContainer,
  GamingHeaderCard,
  GamingIconCard,
  GamingTitle,
  FailureViewContainer,
  FailureViewImg,
  FailureViewTitle,
  FailureViewDescription,
  RetryButton,
  GamingVideosListContainer,
} from './styledComponents'
import LoaderView from '../LoaderView'

const gamingVideosApiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    gamingVideosApiStatus: gamingVideosApiStatusConst.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      gamingVideosApiStatus: gamingVideosApiStatusConst.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingApiUrl, options)
    if (response.ok) {
      const gamingVideosData = await response.json()
      const updatedGamingVideosData = gamingVideosData.videos.map(
        eachVideo => ({
          id: eachVideo.id,
          thumbnailUrl: eachVideo.thumbnail_url,
          title: eachVideo.title,
          viewCount: eachVideo.view_count,
        }),
      )
      this.setState({
        gamingVideosList: updatedGamingVideosData,
        gamingVideosApiStatus: gamingVideosApiStatusConst.success,
      })
    } else {
      this.setState({gamingVideosApiStatus: gamingVideosApiStatusConst.failure})
    }
  }

  renderGamingVideosLoadingView = () => <LoaderView />

  renderGamingVideosSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <GamingHeaderCard isDarkTheme={isDarkTheme}>
                <GamingIconCard isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming color="#ff0000" size="30px" />
                </GamingIconCard>
                <GamingTitle isDarkTheme={isDarkTheme}>Gaming</GamingTitle>
              </GamingHeaderCard>
              <GamingVideosListContainer>
                {gamingVideosList.map(eachVideo => (
                  <GamingThumbnail
                    gamingVideoDetails={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </GamingVideosListContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderGamingVideosFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          this.getGamingVideos()
        }

        const failureViewImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer isDarkTheme={isDarkTheme}>
            <FailureViewImg src={failureViewImg} alt="failure view" />
            <FailureViewTitle isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureViewTitle>
            <FailureViewDescription isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <RetryButton onClick={onClickRetry}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideos = () => {
    const {gamingVideosApiStatus} = this.state

    switch (gamingVideosApiStatus) {
      case gamingVideosApiStatusConst.inProgress:
        return this.renderGamingVideosLoadingView()
      case gamingVideosApiStatusConst.success:
        return this.renderGamingVideosSuccessView()
      case gamingVideosApiStatusConst.failure:
        return this.renderGamingVideosFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Navbar />
              <MainPageContainer>
                <NavigationSectionContainer isDarkTheme={isDarkTheme}>
                  <NavigationsSection />
                </NavigationSectionContainer>
                <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                  {this.renderGamingVideos()}
                </GamingContainer>
              </MainPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
