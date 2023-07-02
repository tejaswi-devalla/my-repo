import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import {
  LoginCont,
  LoginForm,
  NxtWatchLogo,
  InputContainer,
  InputTitle,
  InputFieldContainer,
  ShowPassCont,
  ShowPassCheckBox,
  ShowPassText,
  LoginBtn,
  ErrorMsg,
} from "./styledComponents";

class LoginRoute extends Component {
  state = {
    username: "",
    password: "",
    showPass: false,
    showSubmitError: false,
    error: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onChangeShowPassword = () => {
    this.setState((prevState) => ({ showPass: !prevState.showPass }));
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <InputTitle htmlFor="username">USERNAME</InputTitle>
        <InputFieldContainer
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password, showPass } = this.state;
    const isShowPass = showPass ? "text" : "password";
    return (
      <>
        <InputTitle htmlFor="password">PASSWORD</InputTitle>
        <InputFieldContainer
          type={isShowPass}
          id="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props;
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };

  onSubmitFailure = () => {
    this.setState({
      showSubmitError: true,
      error: "Username and Password didn't match",
    });
  };

  onSubmitLoginForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure();
    }
  };

  render() {
    const { showSubmitError, error } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <LoginCont>
        <LoginForm onSubmit={this.onSubmitLoginForm}>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <ShowPassCont className="show-pass-cont">
            <ShowPassCheckBox
              type="checkbox"
              id="showPassword"
              onChange={this.onChangeShowPassword}
            />
            <ShowPassText htmlFor="showPassword">Show Password</ShowPassText>
          </ShowPassCont>
          <LoginBtn type="submit">Login</LoginBtn>
          {showSubmitError && (
            <ErrorMsg className="error-msg">*{error}</ErrorMsg>
          )}
        </LoginForm>
      </LoginCont>
    );
  }
}
export default LoginRoute;
