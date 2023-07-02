import { Component } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import Loader from "react-loader-spinner";
import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import { BsDot } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdPlaylistAdd } from "react-icons/md";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  SidebarVideoCont,
  ProductsFailureCont,
  ProductsFailureImg,
  ProductsFailureHeading,
  ProductsFailureDesc,
  ProductsFailureBtn,
  LoaderContainer,
  VideoCont,
  VideoTitle,
  ViewsCont,
  TrendText,
  IconCont,
  Text,
  ViewsContLg,
  ViewsContOne,
  LogoCont,
  Logo,
  ViewsDescCont,
  ViewsTextHead,
  ViewsSubs,
  ViewsDesc,
  ViewsDescSm,
} from "./styledComponents";

import NxtWatchContext from "../../context/NxtWatchContext";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  };

  componentDidMount() {
    this.videoItemDetailsApiUrl();
  }

  videoItemDetailsApiUrl = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      const updateData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      };
      this.setState({
        videoDetails: updateData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {(value) => {
        const { savedVideos, addToSavedVideos, removeSavedVideos } = value;
        const { videoDetails, isLiked, isDisliked, isSaved } = this.state;
        const {
          id,
          title,
          videoUrl,
          viewCount,
          publishedAt,
          profileImageUrl,
          name,
          subscriberCount,
          description,
        } = videoDetails;

        const addOrRemoveVideos = () => {
          if (!isSaved) {
            addToSavedVideos(videoDetails);
          } else {
            removeSavedVideos(id);
          }
        };

        const onClickSaveVideoBtn = () => {
          this.setState(
            (prevState) => ({
              isSaved: !prevState.isSaved,
            }),
            addOrRemoveVideos
          );
        };

        const onClickLikeBtn = () => {
          this.setState((prevState) => ({
            isLiked: !prevState.isLiked,
            isDisliked: false,
          }));
        };

        const onClickDislikeBtn = () => {
          this.setState((prevState) => ({
            isDisliked: !prevState.isDisliked,
            isLiked: false,
          }));
        };
        const published = formatDistanceToNowStrict(new Date(publishedAt));
        const liked = isLiked ? "#2563eb" : "#64748b";
        const disliked = isDisliked ? "#2563eb" : "#64748b";
        const saved = isSaved ? "#2563eb" : "#64748b";
        const savedText = isSaved ? "Saved" : "Save";
        return (
          <VideoCont>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoTitle>{title}</VideoTitle>
            <ViewsCont>
              <TrendText>{viewCount} views</TrendText>
              <BsDot size={30} />
              <TrendText>{published} ago</TrendText>
            </ViewsCont>
            <ViewsCont>
              <IconCont onClick={onClickLikeBtn} liked={liked}>
                <BiLike size={22} />
                <Text>Like</Text>
              </IconCont>
              <IconCont onClick={onClickDislikeBtn} liked={disliked}>
                <BiDislike size={22} />
                <Text>Dislike</Text>
              </IconCont>
              <IconCont onClick={onClickSaveVideoBtn} liked={saved}>
                <MdPlaylistAdd size={22} />
                <Text>{savedText}</Text>
              </IconCont>
            </ViewsCont>
            <ViewsContLg>
              <ViewsContOne>
                <TrendText>{viewCount} views</TrendText>
                <BsDot size={30} />
                <TrendText>{published} ago</TrendText>
              </ViewsContOne>
              <ViewsContOne>
                <IconCont onClick={onClickLikeBtn} liked={liked}>
                  <BiLike size={22} />
                  <Text>Like</Text>
                </IconCont>
                <IconCont onClick={onClickDislikeBtn} liked={disliked}>
                  <BiDislike size={22} />
                  <Text>Dislike</Text>
                </IconCont>
                <IconCont onClick={onClickSaveVideoBtn} liked={saved}>
                  <MdPlaylistAdd size={22} />
                  <Text>{savedText}</Text>
                </IconCont>
              </ViewsContOne>
            </ViewsContLg>
            <hr width="96%" />
            <LogoCont>
              <Logo src={profileImageUrl} alit={title} />
              <ViewsDescCont>
                <ViewsTextHead>{name}</ViewsTextHead>
                <ViewsSubs>{subscriberCount} subscribers</ViewsSubs>
                <ViewsDesc>{description}</ViewsDesc>
              </ViewsDescCont>
            </LogoCont>
            <ViewsDescSm>{description}</ViewsDescSm>
          </VideoCont>
        );
      }}
    </NxtWatchContext.Consumer>
  );

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
        onClick={this.videoItemDetailsApiUrl}
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

  renderVideoDetails = () => {
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
        <SidebarVideoCont>
          <Sidebar />
          {this.renderVideoDetails()}
        </SidebarVideoCont>
      </>
    );
  }
}
export default VideoItemDetailsRoute;
