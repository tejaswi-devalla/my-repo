import { Component } from "react";
import { GrFormClose } from "react-icons/gr";
import {
  BannerCont,
  CloseIcon,
  BannerWatchLogo,
  BuyPremiumText,
  GetItNowBtn,
} from "./styledComponents";

class Banner extends Component {
  state = {
    isClose: false,
  };

  onClickCloseBtn = () => {
    this.setState((prevState) => ({ isClose: !prevState.isClose }));
  };

  render() {
    const { isClose } = this.state;
    return (
      <>
        {isClose ? null : (
          <BannerCont>
            <CloseIcon
              type="button"
              data-testid="close"
              onClick={this.onClickCloseBtn}
            >
              <GrFormClose size={24} />
            </CloseIcon>
            <BannerWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BuyPremiumText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BuyPremiumText>
            <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
          </BannerCont>
        )}
      </>
    );
  }
}
export default Banner;
