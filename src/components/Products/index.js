import { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import ProductItem from "../ProductItem";
import {
  ProductsContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  ProductsInsideCont,
  LoaderContainer,
  ProductsFailureCont,
  ProductsFailureImg,
  ProductsFailureHeading,
  ProductsFailureDesc,
  ProductsFailureBtn,
  NoVideosCont,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Products extends Component {
  state = {
    searchInput: "",
    newData: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.homeVideosApiUrl();
  }

  homeVideosApiUrl = async () => {
    const { searchInput } = this.state;
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const jwtToken = Cookies.get("jwt_token");
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`;
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
        newData: updateData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onClickSearchBtn = () => {
    this.setState({ searchInput: "" });
    this.homeVideosApiUrl();
  };

  renderSuccessView = () => {
    const { newData } = this.state;
    const dataLength = newData.length;
    return (
      <>
        <ProductsContainer>
          <ProductsInsideCont>
            {dataLength === 0 ? (
              <NoVideosCont>
                <ProductsFailureImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <ProductsFailureHeading>
                  No Search results found
                </ProductsFailureHeading>
                <ProductsFailureDesc>
                  Try different key words or remove search filter
                </ProductsFailureDesc>
                <ProductsFailureBtn
                  type="button"
                  id="button"
                  onClick={this.homeVideosApiUrl}
                >
                  Retry
                </ProductsFailureBtn>
              </NoVideosCont>
            ) : (
              <>
                {newData.map((eachItem) => (
                  <ProductItem key={eachItem.id} eachItem={eachItem} />
                ))}
              </>
            )}
          </ProductsInsideCont>
        </ProductsContainer>
      </>
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
        onClick={this.homeVideosApiUrl}
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

  renderProductsView = () => {
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
    const { searchInput } = this.state;
    return (
      <>
        <SearchContainer>
          <SearchInput
            value={searchInput}
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <SearchBtn type="button" onClick={this.onClickSearchBtn}>
            <AiOutlineSearch size={16} />
          </SearchBtn>
        </SearchContainer>
        {this.renderProductsView()}
      </>
    );
  }
}
export default Products;
