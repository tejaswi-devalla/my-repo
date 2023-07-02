import styled from "styled-components";

export const SidebarNotFoundCont = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #f9f9f9;
  width: 100%;
`;

export const Image = styled.img`
  width: 250px;
  margin: 10px;
`;

export const Heading = styled.h1`
  color: #000;
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 40px;
  text-align: center;
`;

export const Desc = styled.p`
  color: #313131;
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  font-size: 20px;
`;
