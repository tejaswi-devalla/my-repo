import Loader from "react-loader-spinner";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { HiFire } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import Cookies from "js-cookie";
import { Component } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  TrendingCont,
  LogoTrendCont,
  FireCont,
  ActiveHeading,
  TrendingVideosCont,
  VideoCard,
  SidebarTrendingCont,
  TrendingThumbnailImg,
  TrendingProViewsCont,
  TrendProfileImg,
  TrendTitleCont,
  TrendTitleHead,
  TrendViews,
  TrendText,
  TrendViewsLg,
  ViewsLg,
  ProductsFailureCont,
  ProductsFailureImg,
  ProductsFailureHeading,
  ProductsFailureDesc,
  ProductsFailureBtn,
  LoaderContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class TrendingRoute extends Component {
  state = {
    newTrendingData: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.trendingVideosApiUrl();
  }

  trendingVideosApiUrl = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/trending";
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
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }));
      this.setState({
        newTrendingData: updateData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderSuccessView = () => {
    const { newTrendingData } = this.state;
    return (
      <TrendingCont>
        <LogoTrendCont>
          <FireCont>
            <HiFire size={50} color="#ff0000" />
          </FireCont>
          <ActiveHeading>Trending</ActiveHeading>
        </LogoTrendCont>
        <TrendingVideosCont>
          {newTrendingData.map((eachItem) => {
            const {
              id,
              profileImageUrl,
              name,
              thumbnailUrl,
              title,
              publishedAt,
              viewCount,
            } = eachItem;
            const published = formatDistanceToNow(new Date(publishedAt));
            return (
              <Link
                to={`/videos/${id}`}
                className="link-items"
                key={eachItem.id}
              >
                <VideoCard>
                  <TrendingThumbnailImg src={thumbnailUrl} alt={title} />
                  <TrendingProViewsCont>
                    <TrendProfileImg src={profileImageUrl} alt={name} />
                    <TrendTitleCont>
                      <TrendTitleHead>{title}</TrendTitleHead>
                      <TrendViews>
                        <TrendText>{name}</TrendText>
                        <BsDot size={30} />
                        <TrendText>{viewCount} views</TrendText>
                        <BsDot size={30} />
                        <TrendText>{published}</TrendText>
                      </TrendViews>
                      <TrendViewsLg>
                        <TrendText>{name}</TrendText>
                        <ViewsLg>
                          <TrendText>{viewCount} views</TrendText>
                          <BsDot size={30} />
                          <TrendText>{published}</TrendText>
                        </ViewsLg>
                      </TrendViewsLg>
                    </TrendTitleCont>
                  </TrendingProViewsCont>
                </VideoCard>
              </Link>
            );
          })}
        </TrendingVideosCont>
      </TrendingCont>
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
        onClick={this.trendingVideosApiUrl}
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

  renderTrendingVideos = () => {
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
        <SidebarTrendingCont>
          <Sidebar />
          {this.renderTrendingVideos()}
        </SidebarTrendingCont>
      </>
    );
  }
}
export default TrendingRoute;
