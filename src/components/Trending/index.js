import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Navbar from '../Navbar'
import NavigationsSection from '../NavigationsSection'
import ThemeContext from '../../context/ThemeContext'
import TrendingThumbnail from '../TrendingThumbnail'

import {
  MainPageContainer,
  NavigationSectionContainer,
  TrendingContainer,
  TrendingHeaderCard,
  TrendingIconCard,
  TrendingTitle,
  FailureViewContainer,
  FailureViewImg,
  FailureViewTitle,
  FailureViewDescription,
  RetryButton,
  TrendingVideosListContainer,
} from './styledComponents'
import LoaderView from '../LoaderView'

const trendingVideosApiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    trendingVideosApiStatus: trendingVideosApiStatusConst.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      trendingVideosApiStatus: trendingVideosApiStatusConst.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(trendingApiUrl, options)
    if (response.ok) {
      const trendingVideosData = await response.json()
      const updatedVideosData = trendingVideosData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedVideosData,
        trendingVideosApiStatus: trendingVideosApiStatusConst.success,
      })
    } else {
      this.setState({
        trendingVideosApiStatus: trendingVideosApiStatusConst.failure,
      })
    }
  }

  renderTrendingVideosLoadingView = () => <LoaderView />

  renderTrendingVideosSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TrendingHeaderCard isDarkTheme={isDarkTheme}>
                <TrendingIconCard isDarkTheme={isDarkTheme}>
                  <HiFire color="#ff0000" size="30px" />
                </TrendingIconCard>
                <TrendingTitle isDarkTheme={isDarkTheme}>
                  Trending
                </TrendingTitle>
              </TrendingHeaderCard>
              <TrendingVideosListContainer>
                {trendingVideosList.map(eachVideo => (
                  <TrendingThumbnail
                    trendingVideoDetails={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </TrendingVideosListContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderTrendingVideosFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          this.getTrendingVideos()
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

  renderTrendingVideos = () => {
    const {trendingVideosApiStatus} = this.state

    switch (trendingVideosApiStatus) {
      case trendingVideosApiStatusConst.inProgress:
        return this.renderTrendingVideosLoadingView()
      case trendingVideosApiStatusConst.success:
        return this.renderTrendingVideosSuccessView()
      case trendingVideosApiStatusConst.failure:
        return this.renderTrendingVideosFailureView()
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
                <TrendingContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {this.renderTrendingVideos()}
                </TrendingContainer>
              </MainPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
