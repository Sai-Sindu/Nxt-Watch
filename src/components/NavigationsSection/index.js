import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {
  NavigationSectionContainer,
  NavigationRoutesList,
  LinkCard,
  RouteTabCard,
  RouteCardText,
  NavigationContactInfoCard,
  ContactTitle,
  SocialMediaIconsCard,
  ImageCard,
  Description,
} from './styledComponents'

class NavigationsSection extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const RoutIconsColor = isDarkTheme ? '#909090' : '#000000'

          return (
            <NavigationSectionContainer>
              <NavigationRoutesList>
                <LinkCard to="/">
                  <RouteTabCard>
                    <AiFillHome size="30px" fill={RoutIconsColor} />
                    <RouteCardText isDarkTheme={isDarkTheme}>
                      Home
                    </RouteCardText>
                  </RouteTabCard>
                </LinkCard>
                <LinkCard to="/trending">
                  <RouteTabCard>
                    <HiFire size="30px" fill={RoutIconsColor} />
                    <RouteCardText isDarkTheme={isDarkTheme}>
                      Trending
                    </RouteCardText>
                  </RouteTabCard>
                </LinkCard>
                <LinkCard to="/gaming">
                  <RouteTabCard>
                    <SiYoutubegaming size="30px" fill={RoutIconsColor} />
                    <RouteCardText isDarkTheme={isDarkTheme}>
                      Gaming
                    </RouteCardText>
                  </RouteTabCard>
                </LinkCard>
                <LinkCard to="/saved-videos">
                  <RouteTabCard>
                    <MdPlaylistAdd size="30px" fill={RoutIconsColor} />
                    <RouteCardText isDarkTheme={isDarkTheme}>
                      Saved videos
                    </RouteCardText>
                  </RouteTabCard>
                </LinkCard>
              </NavigationRoutesList>
              <NavigationContactInfoCard>
                <ContactTitle isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactTitle>
                <SocialMediaIconsCard>
                  <ImageCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ImageCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ImageCard
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconsCard>
                <Description isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </NavigationContactInfoCard>
            </NavigationSectionContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavigationsSection
