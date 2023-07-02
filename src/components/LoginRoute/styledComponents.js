import styled from "styled-components";

export const LoginCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;
export const LoginForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 5px 20px #c7c8ca;
  border-radius: 5px;
  padding: 14px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;
export const NxtWatchLogo = styled.img`
  height: 6vh;
  margin-top: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 25px;
`;
export const InputTitle = styled.label`
  color: #909090;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 15px;
`;
export const InputFieldContainer = styled.input`
  border: solid 1px #94a3b8;
  padding: 14px;
  padding-left: 18px;
  border-radius: 3px;
  margin-top: 10px;
  height: 8vh;
  font-family: "Roboto";
  font-size: 16px;
`;
export const ShowPassCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin-top: 14px;
  margin-left: 20px;
`;

export const ShowPassCheckBox = styled.input`
  outline: none;
`;
export const ShowPassText = styled.label`
  color: #0f0f0f;
  font-family: "Roboto";
  font-weight: 500;
  margin-left: 8px;
`;
export const LoginBtn = styled.button`
  width: 90%;
  background-color: #3b82f6;
  border-width: 0;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  height: 8vh;
  color: #f9f9f9;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
export const ErrorMsg = styled.p`
  align-self: start;
  margin-left: 20px;
  margin-bottom: 20px;
  font-family: "Roboto";
  font-size: 17px;
  line-height: 16px;
  color: #ff0000;
`;
