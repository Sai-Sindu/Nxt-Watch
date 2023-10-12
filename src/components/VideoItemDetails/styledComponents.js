import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 130vh;
`
export const NavigationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 130vh;
  width: 25%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`
export const VideoItemDetailsContainer = styled.div`
  width: 75%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  height: 130vh;
`

export const FailureViewContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  background-color: '#f9f9f9';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
  height: 80vh;
  margin-top: 40px;
`

export const FailureViewImg = styled.img`
  height: 350px;
`
export const FailureViewTitle = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`
export const FailureViewDescription = styled.p`
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#606060')};
`
export const RetryButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#00306e' : '#4f46e5')};
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
`
export const VideoItemDetailsCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  padding: 20px;
`

export const TitleText = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  font-size: 17px;
  margin-bottom: 15px;
  margin-top: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const VideoItemsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-family: 'Roboto';
`

export const Text = styled.p`
  color: #94a3b8;
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 500;
`
export const ViewCountPublishedAtCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Separator = styled.hr`
  border: 3px solid #94a3b8;
  margin: 8px;
  margin-bottom: 15px;
  border-radius: 3px;
`
export const FunctionalIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`
export const LikeButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`

export const DisLikeButton = styled(LikeButton)`
  color: ${props => (props.disLike ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled(LikeButton)`
  color: ${props => (props.save ? '#2563eb' : '#64748b')};
`

export const HorizontalSeparator = styled.hr`
  width: 100%;
  border: 1px solid #94a3b8;
  margin-top: 20px;
`
export const ChannelProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 20px;
`
export const ProfileImg = styled.img`
  height: 60px;
`

export const ChannelDescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 0;
  font-family: 'Roboto';
`
export const DescriptionText = styled.p`
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#475569')};
  font-size: 15px;
  margin-top: 15px;
`
