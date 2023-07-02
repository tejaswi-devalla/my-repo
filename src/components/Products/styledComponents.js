import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border: solid 1px #94a3b8;
  width: 90%;
  border-radius: 3px;
  margin-left: 15px;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const SearchInput = styled.input`
  width: 82%;
  height: 6vh;
  background-color: #ffffff;
  padding: 10px;
  border-right: solid 2px #94a3b8;
  border-top: 0;
  border-bottom: 0;
  border-left: 0;
  outline: none;
  color: #475569;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
`;
export const SearchBtn = styled.button`
  width: 18%;
  background-color: transparent;
  padding: 10px;
  border-width: 0;
  color: #475569;
  cursor: pointer;
`;
export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  list-style-type: none;
  padding-left: 0;
`;
export const ProductsInsideCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    width: 100vw;
    flex-wrap: wrap;
  }
`;
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
export const ProductsFailureCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const NoVideosCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`;
