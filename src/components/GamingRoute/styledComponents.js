import styled from "styled-components";

export const SidebarGamingCont = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const GamingCont = styled.div`
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
export const GamingVideosCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
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
export const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  margin-left: 10px;
  margin-top: 40px;
  margin-right: 16px;
  @media screen and (min-width: 576px) {
    width: 28%;
  }
`;
export const GameImg = styled.img`
  width: 100%;
`;
export const GameTitle = styled.h1`
  color: #000;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0;
`;
export const GameWatching = styled.p`
  color: #313131;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  width: 70%;
  line-height: 1.5;
`;
