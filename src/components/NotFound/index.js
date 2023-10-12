import Navbar from '../Navbar'
import NavigationsSection from '../NavigationsSection'
import ThemeContext from '../../context/ThemeContext'

import {
  MainPageContainer,
  NavigationSectionContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Navbar />
          <MainPageContainer>
            <NavigationSectionContainer isDarkTheme={isDarkTheme}>
              <NavigationsSection />
            </NavigationSectionContainer>
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundTitle isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundTitle>
              <NotFoundDescription isDarkTheme={isDarkTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </MainPageContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
