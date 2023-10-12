import styled from 'styled-components'

export const NavbarCard = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px 20px 40px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  @media screen and (max-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`
export const NavbarLogo = styled.img`
  height: 40px;
  @media screen and (max-width: 768px) {
    height: 25px;
  }
`
export const NavbarIconsCardLg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavbarIconsCardSm = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const ProfileImg = styled.img`
  height: 30px;
`
export const LogoutButtonLg = styled.button`
  border: ${props =>
    props.isDarkTheme ? '1px solid #f9f9f9' : '1px solid #3b82f6'};
  border-radius: 3px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b80f6')};
  background-color: transparent;
  cursor: pointer;
  outline: none;
  padding: 5px 10px 5px 10px;
`
export const LogoutButtonSm = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  font-family: 'Roboto';
`
export const ConfirmationText = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
`
export const ButtonsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`
export const CancelButton = styled.button`
  border: ${props =>
    props.isDarkTheme ? '1px solid #f9f9f9' : '1px solid   #3b82f6'};
  padding: 10px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  background-color: transparent;
  border-radius: 5px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  padding: 10px;
  cursor: pointer;
  color: #ffffff;
  border-radius: 5px;
`
