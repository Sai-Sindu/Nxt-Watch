import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkContainer = styled(Link)`
  text-decoration: none;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
`

export const VideosThumbnailCard = styled.li`
  width: 100%;
`

export const ThumbnailImg = styled.img`
  height: 150px;
  width: 100%;
`
export const ThumbnailDescriptionCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 5px;
`
export const ProfileImg = styled.img`
  height: 30px;
`
export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-left: 5px;
  margin-top: 0;
`
export const TitleText = styled.p`
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#1e293b')};
  font-size: 17px;
  margin-top: 0;
  margin-bottom: 5px;
`
export const Text = styled.p`
  color: #475569;
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 5px;
`
export const ViewCountPublishedAtCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Separator = styled.hr`
  border: 3px solid #475569;
  margin: 8px;
  margin-bottom: 15px;
  border-radius: 2px;
`
