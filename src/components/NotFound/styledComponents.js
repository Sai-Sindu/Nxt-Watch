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

export const NotFoundContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  background-color: '#f9f9f9';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: 'Roboto';
  height: 120vh;
`

export const NotFoundImg = styled.img`
  height: 350px;
`
export const NotFoundTitle = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`
export const NotFoundDescription = styled.p`
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#606060')};
`
