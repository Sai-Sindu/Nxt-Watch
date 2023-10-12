import styled from 'styled-components'

export const BannerSectionContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  display: ${props => (props.close ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

export const BannerTitleCard = styled.div`
  display: ${props => (props.close ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const BannerLogo = styled.img`
  height: 40px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const BannerDescription = styled.p`
  display: ${props => (props.close ? 'none' : 'flex')};
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  width: 400px;
`
export const GetItNowButton = styled.button`
  border: 1px solid #0f0f0f;
  color: #0f0f0f;
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600;
`
