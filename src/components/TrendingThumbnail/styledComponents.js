import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkContainer = styled(Link)`
  text-decoration: none;
`

export const TrendingThumbnailCard = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`
export const TrendingThumbnailImg = styled.img`
  height: 200px;
  width: 350px;
  margin-right: 10px;
`
export const TrendingThumbnailDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`
export const TrendingThumbnailTitle = styled.p`
  color: ${props => (props.isDarkTheme ? ' #ebebeb' : '#0f0f0f')};
  font-size: 22px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
`
export const TrendingThumbnailName = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#424242')};
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 600;
`
export const ViewCountPublishedAtCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const Text = styled.p`
  color: ${props => (props.isDarkTheme ? '#909090' : '#424242')};
  font-size: 15px;
`
export const Separator = styled.hr`
  border: ${props =>
    props.isDarkTheme ? '2px solid #909090' : '2px solid #424242'};
  border-radius: 2px;
  margin-right: 8px;
  margin-left: 8px;
`
