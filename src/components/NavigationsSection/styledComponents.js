import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120vh;
`
export const NavigationRoutesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0;
  list-style-type: none;
  padding-left: 0;
  text-decoration: none;
`
export const LinkCard = styled(Link)`
  text-decoration: none;
`

export const RouteTabCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 10px;
  text-decoration: none;
`
export const RouteCardText = styled.p`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  padding-left: 20px;
  font-weight: 500;
`
export const NavigationContactInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-family: 'Roboto';
`
export const ContactTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#0f0f0f')};
  font-size: 17px;
  text-align: left;
`
export const SocialMediaIconsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
`
export const ImageCard = styled.img`
  height: 35px;
  margin-right: 10px;
`

export const Description = styled.p`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#0f0f0f')};
  font-size: 13px;
  text-align: left;
`
