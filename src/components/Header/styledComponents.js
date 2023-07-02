import styled from "styled-components";

export const MainHeaderCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  height: 12vh;
`;
export const HeaderCont = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
`;
export const HomeImg = styled.img`
  height: 5vh;
  @media screen and (min-width: 768px) {
    height: 7vh;
  }
`;
export const HeaderIconsCont = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
`;
export const HeaderIcons = styled.li`
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const HeaderIconsLg = styled.li`
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const ProfileImage = styled.img`
  height: 4vh;
`;
export const LogoutBtn = styled.button`
  background-color: transparent;
  border: solid 1px #3b82f6;
  border-radius: 3px;
  color: #3b82f6;
  padding: 5px 12px 5px 12px;
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    background-color: transparent;
    border-width: 0;
    padding: 0;
    color: #000000;
  }
`;
export const ModalCont = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const ModalHead = styled.p`
  color: #00306e;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;
`;
export const ModalButtons = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CancelButton = styled.button`
  background-color: transparent;
  color: #909090;
  border: solid 1px #909090;
  border-radius: 3px;
  padding: 10px 20px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
`;
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-radius: 3px;
  color: #ffffff;
  border-width: 0;
  padding: 10px 20px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
`;
export const BarButton = styled.button`
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
`;
