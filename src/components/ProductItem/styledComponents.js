import styled from "styled-components";

export const ProductItems = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;
export const ThumbnailImg = styled.img`
  height: 30vh;
  width: 100%;
`;
export const LogoTitleCont = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-top: 10px;
`;
export const ProfileImg = styled.img`
  height: 7vh;
  align-self: flex-start;
  margin-top: 13px;
`;
export const TitleViewsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: #212121;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin-left: 13px;
  margin-bottom: 0;
`;
export const ViewsTimeCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 90%;
  margin-left: 15px;
  color: #616e7c;
  margin-bottom: 10px;
`;
export const TitleViewsTimeText = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 12px;
`;
