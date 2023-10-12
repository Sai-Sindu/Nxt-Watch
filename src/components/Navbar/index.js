import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {IoMdMoon} from 'react-icons/io'
import {BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarCard,
  NavbarLogo,
  NavbarIconsCardLg,
  NavbarIconsCardSm,
  ThemeButton,
  ProfileImg,
  LogoutButtonSm,
  LogoutButtonLg,
  PopupContainer,
  ButtonsCard,
  ConfirmationText,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Navbar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value

      const onChangeTheme = () => {
        changeTheme(isDarkTheme)
      }

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeImg = isDarkTheme ? (
        <BsBrightnessHigh fill="#ffffff" size="30px" />
      ) : (
        <IoMdMoon size="30px" />
      )

      const color = isDarkTheme ? '#f9f9f9' : '#181818'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarCard isDarkTheme={isDarkTheme} data-testid="banner">
          <Link to="/">
            <NavbarLogo src={logoImg} alt="website logo" />
          </Link>
          <NavbarIconsCardLg>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              {themeImg}
            </ThemeButton>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              fill="#000000"
              modal
              trigger={
                <LogoutButtonLg isDarkTheme={isDarkTheme} type="button">
                  Logout
                </LogoutButtonLg>
              }
            >
              {close => (
                <PopupContainer isDarkTheme={isDarkTheme}>
                  <ConfirmationText isDarkTheme={isDarkTheme}>
                    Are you sure, you want to logout
                  </ConfirmationText>
                  <ButtonsCard>
                    <CancelButton
                      type="button"
                      onClick={() => close()}
                      isDarkTheme={isDarkTheme}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsCard>
                </PopupContainer>
              )}
            </Popup>
          </NavbarIconsCardLg>
          <NavbarIconsCardSm>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              {themeImg}
            </ThemeButton>
            <GiHamburgerMenu size="20px" color={color} />
            <Popup
              fill="#000000"
              modal
              trigger={
                <LogoutButtonSm isDarkTheme={isDarkTheme} type="button">
                  <FiLogOut color={color} />
                </LogoutButtonSm>
              }
            >
              {close => (
                <PopupContainer isDarkTheme={isDarkTheme}>
                  <ConfirmationText isDarkTheme={isDarkTheme}>
                    Are you sure, you want to logout
                  </ConfirmationText>
                  <ButtonsCard>
                    <CancelButton
                      type="button"
                      onClick={() => close()}
                      isDarkTheme={isDarkTheme}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsCard>
                </PopupContainer>
              )}
            </Popup>
          </NavbarIconsCardSm>
        </NavbarCard>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
