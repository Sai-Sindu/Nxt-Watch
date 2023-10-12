import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Navbar from '../Navbar'
import NavigationsSection from '../NavigationsSection'
import ThemeContext from '../../context/ThemeContext'
import LoaderView from '../LoaderView'

import {
  MainPageContainer,
  NavigationSectionContainer,
  VideoItemDetailsContainer,
  FailureViewContainer,
  FailureViewImg,
  FailureViewTitle,
  FailureViewDescription,
  RetryButton,
  VideoItemDetailsCard,
  TitleText,
  VideoItemsCard,
  ViewCountPublishedAtCard,
  Text,
  Separator,
  FunctionalIcons,
  LikeButton,
  DisLikeButton,
  SaveButton,
  HorizontalSeparator,
  ChannelProfileCard,
  ProfileImg,
  ChannelDescriptionCard,
  DescriptionText,
} from './styledComponents'

const videoDetailsApiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    videoDetailsApiStatus: videoDetailsApiStatusConst.initial,
    like: false,
    disLike: false,
    save: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({
      videoDetailsApiStatus: videoDetailsApiStatusConst.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const VideoDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(VideoDetailsApiUrl, options)
    if (response.ok) {
      const videoDetailsData = await response.json()
      const updatedVideoDetailsData = {
        id: videoDetailsData.video_details.id,
        description: videoDetailsData.video_details.description,
        title: videoDetailsData.video_details.title,
        publishedAt: videoDetailsData.video_details.published_at,
        thumbnailUrl: videoDetailsData.video_details.thumbnail_url,
        videoUrl: videoDetailsData.video_details.video_url,
        viewCount: videoDetailsData.video_details.view_count,
        name: videoDetailsData.video_details.channel.name,
        profileImageUrl:
          videoDetailsData.video_details.channel.profile_image_url,
        subscriberCount:
          videoDetailsData.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedVideoDetailsData,
        videoDetailsApiStatus: videoDetailsApiStatusConst.success,
      })
    } else {
      this.setState({videoDetailsApiStatus: videoDetailsApiStatusConst.failure})
    }
  }

  renderVideoDetailsInprogressView = () => <LoaderView />

  renderVideoDetailsSuccessView = () => {
    const {videoDetails, like, disLike, save} = this.state
    const {
      description,
      title,
      publishedAt,
      videoUrl,
      viewCount,
      name,
      profileImageUrl,
      subscriberCount,
    } = videoDetails

    const d = new Date(publishedAt)
    const day = d.getDate()
    const month = d.getMonth()
    const year = d.getFullYear()
    const time = formatDistanceToNow(new Date(year, month, day))

    const onClickLike = () => {
      this.setState({like: true, disLike: false})
    }

    const onClickDisLike = () => {
      this.setState({like: false, disLike: true})
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, saveVideo} = value

          const onClickSave = () => {
            this.setState(prevState => ({save: !prevState.save}))
            saveVideo({...videoDetails})
          }

          const saveText = save ? 'Saved' : 'Save'

          return (
            <VideoItemDetailsCard>
              <ReactPlayer url={videoUrl} width="100%" />
              <TitleText isDarkTheme={isDarkTheme}>{title}</TitleText>
              <VideoItemsCard>
                <ViewCountPublishedAtCard>
                  <Text>{viewCount} views</Text>
                  <Separator />
                  <Text>{time} ago</Text>
                </ViewCountPublishedAtCard>
                <FunctionalIcons>
                  <LikeButton onClick={onClickLike} like={like}>
                    <BiLike size="25px" /> Like
                  </LikeButton>
                  <DisLikeButton onClick={onClickDisLike} disLike={disLike}>
                    <BiDislike size="25px" /> Dislike
                  </DisLikeButton>
                  <SaveButton onClick={onClickSave} save={save}>
                    <MdPlaylistAdd size="25px" /> {saveText}
                  </SaveButton>
                </FunctionalIcons>
              </VideoItemsCard>
              <HorizontalSeparator />
              <ChannelProfileCard>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <ChannelDescriptionCard>
                  <TitleText isDarkTheme={isDarkTheme}>{name}</TitleText>
                  <Text>{subscriberCount} subscribers</Text>
                  <DescriptionText isDarkTheme={isDarkTheme}>
                    {description}
                  </DescriptionText>
                </ChannelDescriptionCard>
              </ChannelProfileCard>
            </VideoItemDetailsCard>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoDetailsFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickRetry = () => {
          this.getVideoItemDetails()
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

  renderVideoDetailsView = () => {
    const {videoDetailsApiStatus} = this.state
    switch (videoDetailsApiStatus) {
      case videoDetailsApiStatusConst.inProgress:
        return this.renderVideoDetailsInprogressView()
      case videoDetailsApiStatusConst.success:
        return this.renderVideoDetailsSuccessView()
      case videoDetailsApiStatusConst.failure:
        return this.renderVideoDetailsFailureView()
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
                <VideoItemDetailsContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoDetailsView()}
                </VideoItemDetailsContainer>
              </MainPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
