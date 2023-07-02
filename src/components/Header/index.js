import { withRouter, Link } from "react-router-dom";
import { FaMoon, FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  MainHeaderCont,
  HeaderCont,
  HomeImg,
  HeaderIconsCont,
  HeaderIcons,
  HeaderIconsLg,
  ProfileImage,
  LogoutBtn,
  ModalCont,
  ModalHead,
  ModalButtons,
  CancelButton,
  ConfirmButton,
  BarButton,
} from "./styledComponents";

import NxtWatchContext from "../../context/NxtWatchContext";

import "./index.css";

const Header = (props) => {
  const onClickConfirmBtn = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { activeTabItem } = value;
        const changeActiveId = () => {
          activeTabItem("Home");
        };
        return (
          <MainHeaderCont>
            <HeaderCont>
              <Link to="/">
                <HomeImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                  onClick={changeActiveId}
                />
              </Link>
              <HeaderIconsCont>
                <HeaderIcons>
                  <FaMoon size={22} />
                </HeaderIcons>
                <HeaderIcons>
                  <Popup
                    modal
                    trigger={
                      <BarButton type="button">
                        <FaBars size={22} />
                      </BarButton>
                    }
                    style={{ height: "100vh", width: "100vw" }}
                  >
                    {(close) => (
                      <button type="button" onClick={() => close()}>
                        <GrFormClose />
                      </button>
                    )}
                  </Popup>
                </HeaderIcons>
                <HeaderIcons>
                  <Popup
                    modal
                    className="popup-content"
                    trigger={
                      <LogoutBtn type="button">
                        <FiLogOut size={22} />
                      </LogoutBtn>
                    }
                  >
                    {(close) => (
                      <ModalCont>
                        <ModalHead>Are you sure, you want to logout?</ModalHead>
                        <ModalButtons>
                          <CancelButton
                            data-testid="closeButton"
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            type="button"
                            onClick={onClickConfirmBtn}
                          >
                            Confirm
                          </ConfirmButton>
                        </ModalButtons>
                      </ModalCont>
                    )}
                  </Popup>
                </HeaderIcons>
                <HeaderIconsLg>
                  <FaMoon size={22} />
                </HeaderIconsLg>
                <HeaderIconsLg>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </HeaderIconsLg>
                <HeaderIconsLg>
                  <Popup
                    modal
                    className="popup-content"
                    trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
                  >
                    {(close) => (
                      <ModalCont>
                        <ModalHead>Are you sure, you want to logout?</ModalHead>
                        <ModalButtons>
                          <CancelButton
                            data-testid="closeButton"
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            type="button"
                            onClick={onClickConfirmBtn}
                          >
                            Confirm
                          </ConfirmButton>
                        </ModalButtons>
                      </ModalCont>
                    )}
                  </Popup>
                </HeaderIconsLg>
              </HeaderIconsCont>
            </HeaderCont>
          </MainHeaderCont>
        );
      }}
    </NxtWatchContext.Consumer>
  );
};
export default withRouter(Header);
