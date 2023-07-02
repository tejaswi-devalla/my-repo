import styled from "styled-components";

export const BannerCont = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  line-height: 2;
`;
export const CloseIcon = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
`;
export const BannerWatchLogo = styled.img`
  height: 6vh;
  margin-bottom: 17px;
`;
export const BuyPremiumText = styled.p`
  color: #1e293b;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  width: 45%;
  margin-bottom: 17px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const GetItNowBtn = styled.button`
  background-color: transparent;
  border: solid 2px #181818;
  padding: 10px;
  color: #1e293b;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
`;
