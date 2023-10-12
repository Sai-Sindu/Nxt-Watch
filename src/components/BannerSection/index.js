import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerSectionContainer,
  BannerTitleCard,
  BannerLogo,
  CloseButton,
  BannerDescription,
  GetItNowButton,
} from './styledComponents'

class BannerSection extends Component {
  state = {close: false}

  onClickClose = () => {
    this.setState({close: true})
  }

  render() {
    const {close} = this.state
    return (
      <BannerSectionContainer close={close} data-testid="banner">
        <BannerTitleCard close={close}>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onClickClose}
          >
            <AiOutlineClose size="30px" />
          </CloseButton>
        </BannerTitleCard>
        <BannerDescription close={close}>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </BannerSectionContainer>
    )
  }
}

export default BannerSection
