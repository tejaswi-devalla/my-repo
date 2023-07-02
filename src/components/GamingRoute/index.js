import { Component } from "react";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { SiYoutubegaming } from "react-icons/si";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  SidebarGamingCont,
  GamingCont,
  LogoTrendCont,
  FireCont,
  ActiveHeading,
  GamingVideosCont,
  ProductsFailureCont,
  ProductsFailureImg,
  ProductsFailureHeading,
  ProductsFailureDesc,
  ProductsFailureBtn,
  LoaderContainer,
  GameCard,
  GameImg,
  GameTitle,
  GameWatching,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class GamingRoute extends Component {
  state = {
    newGamingData: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.gamingVideosApiUrl();
  }

  gamingVideosApiUrl = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/gaming";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      const updateData = data.videos.map((eachItem) => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }));
      this.setState({
        newGamingData: updateData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderSuccessView = () => {
    const { newGamingData } = this.state;
    return (
      <GamingCont>
        <LogoTrendCont>
          <FireCont>
            <SiYoutubegaming size={50} color="#ff0000" />
          </FireCont>
          <ActiveHeading>Gaming</ActiveHeading>
        </LogoTrendCont>
        <GamingVideosCont>
          {newGamingData.map((eachItem) => {
            const { id, thumbnailUrl, title, viewCount } = eachItem;
            return (
              <GameCard key={eachItem.id}>
                <Link to={`/videos/${id}`} className="link-items">
                  <GameImg src={thumbnailUrl} alt={title} />
                  <GameTitle>{title}</GameTitle>
                  <GameWatching>{viewCount} Watching Worldwide</GameWatching>
                </Link>
              </GameCard>
            );
          })}
        </GamingVideosCont>
      </GamingCont>
    );
  };

  renderFailureView = () => (
    <ProductsFailureCont>
      <ProductsFailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <ProductsFailureHeading>
        Oops! Something Went Wrong
      </ProductsFailureHeading>
      <ProductsFailureDesc>
        We are having some trouble to complete your request.
        <br />
        Please try again.
      </ProductsFailureDesc>

      <ProductsFailureBtn
        type="button"
        id="button"
        onClick={this.gamingVideosApiUrl}
      >
        Retry
      </ProductsFailureBtn>
    </ProductsFailureCont>
  );

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  );

  renderGames = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      default:
        return this.renderLoadingView();
    }
  };

  render() {
    return (
      <>
        <Header />
        <SidebarGamingCont>
          <Sidebar />
          {this.renderGames()}
        </SidebarGamingCont>
      </>
    );
  }
}
export default GamingRoute;
