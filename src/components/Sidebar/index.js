import { Link } from "react-router-dom";
import { Component } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { MdPlaylistAdd } from "react-icons/md";
import {
  SidebarCont,
  SidebarTopCont,
  SidebarItemsCont,
  ItemsName,
  SidebarBottomCont,
  ContactUs,
  ContactIconsCont,
  ContactIcons,
  HelpDesc,
} from "./styledComponents";

import NxtWatchContext from "../../context/NxtWatchContext";

import "./index.css";

class Sidebar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {(value) => {
          const { activeTabItem, activeTab } = value;
          const onClickHomeItem = () => {
            activeTabItem("Home");
          };

          const onClickTrendingItem = () => {
            activeTabItem("Trending");
          };

          const onClickGamingItem = () => {
            activeTabItem("Gaming");
          };

          const onClickSavedItem = () => {
            activeTabItem("SavedVideos");
          };

          return (
            <SidebarCont>
              <SidebarTopCont>
                <Link to="/" className="link-items">
                  <SidebarItemsCont
                    key="Home"
                    onClick={onClickHomeItem}
                    bgColor={activeTab === "Home" ? "#f1f5f9" : "transparent"}
                    color={activeTab === "Home" ? "#ff0000" : "#313131"}
                  >
                    <AiFillHome size={22} />
                    <ItemsName style={{ color: "#313131" }}>Home</ItemsName>
                  </SidebarItemsCont>
                </Link>

                <Link to="/trending" className="link-items">
                  <SidebarItemsCont
                    key="Trending"
                    onClick={onClickTrendingItem}
                    bgColor={
                      activeTab === "Trending" ? "#f1f5f9" : "transparent"
                    }
                    color={activeTab === "Trending" ? "#ff0000" : "#313131"}
                  >
                    <HiFire size={22} />
                    <ItemsName style={{ color: "#313131" }}>Trending</ItemsName>
                  </SidebarItemsCont>
                </Link>

                <Link to="/gaming" className="link-items">
                  <SidebarItemsCont
                    key="Gaming"
                    onClick={onClickGamingItem}
                    bgColor={activeTab === "Gaming" ? "#f1f5f9" : "transparent"}
                    color={activeTab === "Gaming" ? "#ff0000" : "#313131"}
                  >
                    <SiYoutubegaming size={22} />
                    <ItemsName style={{ color: "#313131" }}>Gaming</ItemsName>
                  </SidebarItemsCont>
                </Link>

                <Link to="/saved-videos" className="link-items">
                  <SidebarItemsCont
                    key="SavedVideos"
                    onClick={onClickSavedItem}
                    bgColor={
                      activeTab === "SavedVideos" ? "#f1f5f9" : "transparent"
                    }
                    color={activeTab === "SavedVideos" ? "#ff0000" : "#313131"}
                  >
                    <MdPlaylistAdd size={22} />
                    <ItemsName style={{ color: "#313131" }}>
                      Saved videos
                    </ItemsName>
                  </SidebarItemsCont>
                </Link>
              </SidebarTopCont>
              <SidebarBottomCont>
                <ContactUs>CONTACT US</ContactUs>
                <ContactIconsCont>
                  <ContactIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIconsCont>
                <HelpDesc>
                  Enjoy! Now to see your
                  <br />
                  channels and <br />
                  recommendations!
                </HelpDesc>
              </SidebarBottomCont>
            </SidebarCont>
          );
        }}
      </NxtWatchContext.Consumer>
    );
  }
}
export default Sidebar;
