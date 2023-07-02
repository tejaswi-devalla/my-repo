import styled from "styled-components";

export const SidebarCont = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
export const SidebarTopCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const SidebarItemsCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  padding-left: 14px;
  color: ${(props) => props.color};
  cursor: pointer;
`;
export const ItemsName = styled.h1`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  margin-left: 20px;
`;
export const SidebarBottomCont = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-left: 14px;
  width: 100%;
`;
export const ContactUs = styled.h1`
  color: #313131;
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 27px;
`;
export const ContactIconsCont = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
export const ContactIcons = styled.img`
  height: 7vh;
  cursor: pointer;
`;
export const HelpDesc = styled.p`
  color: #424242;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
`;
