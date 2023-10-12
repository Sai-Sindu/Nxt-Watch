import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const LinkContainer = styled(Link)`
  text-decoration: none;
  width: 30%;
`

export const GamingThumbnailCard = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-bottom: 15px;
  font-family: 'Roboto';
`
export const GamingThumbnailImg = styled.img`
  height: 220px;
`
export const GamingThumbnailTitle = styled.p`
  color: ${props => (props.isDarkTheme ? ' #ebebeb' : '#0f0f0f')};
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const GamingThumbnailViewCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#424242')};
  font-size: 15px;
  margin-top: 0;
`
