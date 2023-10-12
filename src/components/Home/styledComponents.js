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
export const HomeRouteContainer = styled.div`
  width: 75%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  height: 120vh;
`

export const HomeContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 120vh;
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
export const SearchContainer = styled.div`
  border: 1px solid #475569;
  display: flex;
  flex-direction: row;
  width: 70%;
  margin-left: 50px;
  margin-top: 15px;
  background-color: transparent;
`
export const SearchCard = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 80%;
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  background-color: transparent;
`
export const SearchButton = styled.button`
  border: none;
  border-left: 1px solid #475569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const VideosDataSuccessViewContainer = styled.ul`
  display: flex;
  flex-direction: row;
  height: 65vh;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
  list-style-type: none;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
