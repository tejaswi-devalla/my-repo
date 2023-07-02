import styled from "styled-components";

export const TrendingCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const LogoTrendCont = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding: 10px;
  padding-left: 15px;
`;
export const FireCont = styled.div`
  background-color: #cbd5e1;
  padding: 10px;
  border-radius: 40px;
  @media screen and (min-width: 576px) {
    margin-left: 20px;
  }
`;
export const ActiveHeading = styled.h1`
  color: #000000;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 28px;
  margin-left: 20px;
`;
export const TrendingVideosCont = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
`;
export const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    padding-left: 50px;
  }
`;
export const SidebarTrendingCont = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const TrendingThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    height: 30vh;
    width: 40%;
  }
`;
export const TrendingProViewsCont = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 15px;
  margin-left: 15px;
  @media screen and (min-width: 576px) {
    align-items: flex-start;
  }
`;
export const TrendProfileImg = styled.img`
  height: 7vh;
  @media screen and (min-width: 576px) {
    display: none;
  }
`;
export const TrendTitleCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
`;
export const TrendTitleHead = styled.h1`
  color: #000;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0;
`;
export const TrendViews = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #616e7c;
  @media screen and (min-width: 576px) {
    display: none;
  }
`;
export const TrendText = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 12px;
`;
export const TrendViewsLg = styled.div`
  color: #616e7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 575px) {
    display: none;
  }
`;
export const ViewsLg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductsFailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ProductsFailureImg = styled.img`
  height: 50vh;
  margin: 20px;
`;
export const ProductsFailureHeading = styled.h1`
  color: #000000;
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 30px;
`;
export const ProductsFailureDesc = styled.p`
  color: #383838;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
`;
export const ProductsFailureBtn = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border-width: 0;
  border-radius: 5px;
  padding: 10px 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`;
