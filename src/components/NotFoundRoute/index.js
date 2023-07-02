import {
  SidebarNotFoundCont,
  NotFoundContainer,
  Heading,
  Desc,
  Image,
} from "./styledComponents";
import Header from "../Header";
import Sidebar from "../Sidebar";

import NxtWatchContext from "../../context/NxtWatchContext";

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {(value) => {
      const { activeTabItem } = value;
      return (
        <>
          <Header />
          <SidebarNotFoundCont>
            <Sidebar />
            <NotFoundContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <Heading>Page Not Found</Heading>
              <Desc>
                we are sorry, the page you requested could not be found.
              </Desc>
            </NotFoundContainer>
          </SidebarNotFoundCont>
        </>
      );
    }}
  </NxtWatchContext.Consumer>
);

export default NotFound;
