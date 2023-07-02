import { Component } from "react";
import { Link } from "react-router-dom";
import { HiFire } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";
import NxtWatchContext from "../../context/NxtWatchContext";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  SidebarTrendingCont,
  ProductsFailureCont,
  ProductsFailureImg,
  ProductsFailureHeading,
  ProductsFailureDesc,
  TrendingCont,
  LogoTrendCont,
  FireCont,
  ActiveHeading,
  TrendingVideosCont,
  VideoCard,
  TrendingThumbnailImg,
  TrendingProViewsCont,
  TrendProfileImg,
  TrendTitleCont,
  TrendTitleHead,
  TrendViews,
  TrendText,
  TrendViewsLg,
  ViewsLg,
} from "./styledComponents";

class SavedVideosRoute extends Component {
  renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { savedVideos } = value;
        const savedLen = savedVideos.length === 0;

        return (
          <>
            {savedLen ? (
              <ProductsFailureCont>
                <ProductsFailureImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <ProductsFailureHeading>
                  No saved videos found
                </ProductsFailureHeading>
                <ProductsFailureDesc>
                  You can save your videos while watching them.
                </ProductsFailureDesc>
              </ProductsFailureCont>
            ) : (
              <TrendingCont>
                <LogoTrendCont>
                  <FireCont>
                    <HiFire size={50} color="#ff0000" />
                  </FireCont>
                  <ActiveHeading>Trending</ActiveHeading>
                </LogoTrendCont>
                <TrendingVideosCont>
                  {savedVideos.map((eachItem) => {
                    const {
                      id,
                      profileImageUrl,
                      name,
                      thumbnailUrl,
                      title,
                      publishedAt,
                      viewCount,
                    } = eachItem;
                    const published = formatDistanceToNow(
                      new Date(publishedAt)
                    );
                    return (
                      <Link
                        to={`/videos/${id}`}
                        className="link-items"
                        key={eachItem.id}
                      >
                        <VideoCard>
                          <TrendingThumbnailImg
                            src={thumbnailUrl}
                            alt={title}
                          />
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
            )}
          </>
        );
      }}
    </NxtWatchContext.Consumer>
  );

  render() {
    return (
      <div data-testid="savedVideos">
        <Header />
        <SidebarTrendingCont>
          <Sidebar />
          {this.renderSavedVideos()}
        </SidebarTrendingCont>
      </div>
    );
  }
}

export default SavedVideosRoute;
