import Header from "../Header";
import Sidebar from "../Sidebar";
import Banner from "../Banner";
import Products from "../Products";
import {
  HomeCont,
  SidebarHomeCont,
  HomeFieldCont,
  BottomSearchVideosCont,
} from "./styledComponents";

const HomeRoute = () => (
  <HomeCont data-testid="home">
    <Header />
    <SidebarHomeCont>
      <Sidebar />
      <HomeFieldCont>
        <Banner />
        <BottomSearchVideosCont>
          <Products />
        </BottomSearchVideosCont>
      </HomeFieldCont>
    </SidebarHomeCont>
  </HomeCont>
);
export default HomeRoute;
