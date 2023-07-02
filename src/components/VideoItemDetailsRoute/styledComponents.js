import styled from "styled-components";

export const SidebarVideoCont = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
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
export const VideoCont = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-top: 20px;
`;
export const VideoTitle = styled.h1`
  color: #000;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  margin-left: 10px;
`;
export const ViewsCont = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
  @media screen and (min-width: 576px) {
    display: none;
  }
`;
export const TrendText = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  margin-left: 10px;
`;
export const IconCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  color: ${(props) => props.liked};
  cursor: pointer;
`;
export const Text = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  margin-left: 7px;
`;
export const ViewsContLg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`;
export const ViewsContOne = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
`;
export const LogoCont = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;
export const Logo = styled.img`
  height: 7vh;
  align-self: flex-start;
  margin-top: 20px;
`;
export const ViewsDescCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 14px;
`;
export const ViewsTextHead = styled.p`
  color: #000;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0;
`;
export const ViewsSubs = styled.p`
  color: #313131;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
`;
export const ViewsDesc = styled.p`
  color: #313131;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const ViewsDescSm = styled.p`
  color: #313131;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
