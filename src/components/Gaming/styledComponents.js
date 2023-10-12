import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 120vh;
`
export const NavigationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
  width: 25%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
`
export const GamingContainer = styled.div`
  width: 75%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  height: 120vh;
`

export const GamingHeaderCard = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f5f9')};
  padding: 20px 10px 20px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const GamingIconCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 40px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
`
export const GamingTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  margin-left: 10px;
`
export const FailureViewContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  background-color: '#f9f9f9';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
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
export const GamingVideosListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  height: 95vh;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
  list-style-type: none;
  margin-top: 50px;
`
