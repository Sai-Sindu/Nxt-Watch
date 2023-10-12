import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'

import Navbar from '../Navbar'
import NavigationsSection from '../NavigationsSection'
import ThemeContext from '../../context/ThemeContext'
import LoaderView from '../LoaderView'
import BannerSection from '../BannerSection'
import VideosThumbnail from '../VideosThumbnail'

import {
  MainPageContainer,
  NavigationSectionContainer,
  HomeContainer,
  FailureViewContainer,
  FailureViewImg,
  FailureViewTitle,
  FailureViewDescription,
  RetryButton,
  SearchContainer,
  SearchCard,
  SearchButton,
  VideosDataSuccessViewContainer,
} from './styledComponents'

const videosApiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    videosApiStatus: videosApiStatusConst.initial,
    searchVideo: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchVideo} = this.state

    this.setState({videosApiStatus: videosApiStatusConst.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const videosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchVideo}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(videosApiUrl, options)
    if (response.ok) {
      const videosData = await response.json()

      const updatedVideosData = videosData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        videosList: updatedVideosData,
        videosApiStatus: videosApiStatusConst.success,
      })
    } else {
      this.setState({videosApiStatus: videosApiStatusConst.failure})
    }
  }

  onChangeSearchVideo = event => {
    this.setState({searchVideo: event.target.value})
  }

  onClickSearch = () => {
    this.getVideosList()
  }

  renderSearchBar = () => {
    const {searchVideo} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SearchContainer>
              <SearchCard
                type="search"
                placeholder="Search"
                value={searchVideo}
                onChange={this.onChangeSearchVideo}
                isDarkTheme={isDarkTheme}
              />
              <SearchButton
                onClick={this.onClickSearch}
                isDarkTheme={isDarkTheme}
                data-testid="searchButton"
              >
                <AiOutlineSearch size="30px" color="#475569" />
              </SearchButton>
            </SearchContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideosDataInProgressView = () => <LoaderView />

  renderNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          this.getVideosList()
        }

        return (
          <FailureViewContainer isDarkTheme={isDarkTheme}>
            <FailureViewImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureViewTitle isDarkTheme={isDarkTheme}>
              No Search results found
            </FailureViewTitle>
            <FailureViewDescription isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </FailureViewDescription>
            <RetryButton onClick={onClickRetry}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosDataSuccessView = () => {
    const {videosList} = this.state
    const videosListLength = videosList.length >= 1

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {videosListLength ? (
                <VideosDataSuccessViewContainer isDarkTheme={isDarkTheme}>
                  {videosList.map(eachVideo => (
                    <VideosThumbnail
                      videoDetails={eachVideo}
                      key={eachVideo.id}
                    />
                  ))}
                </VideosDataSuccessViewContainer>
              ) : (
                this.renderNoVideosView()
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideosDataFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          this.getVideosList()
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

  renderVideosDataViews = () => {
    const {videosApiStatus} = this.state

    switch (videosApiStatus) {
      case videosApiStatusConst.inProgress:
        return this.renderVideosDataInProgressView()
      case videosApiStatusConst.success:
        return this.renderVideosDataSuccessView()
      case videosApiStatusConst.failure:
        return this.renderVideosDataFailureView()
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
                <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                  <BannerSection />
                  {this.renderSearchBar()}
                  {this.renderVideosDataViews()}
                </HomeContainer>
              </MainPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
