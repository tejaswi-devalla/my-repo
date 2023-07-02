import styled from "styled-components";

export const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const SidebarHomeCont = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const HomeFieldCont = styled.div`
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;
export const BottomSearchVideosCont = styled.div`
  background-color: #f1f5f9;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15px;
`;
