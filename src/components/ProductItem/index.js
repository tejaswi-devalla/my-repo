import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { BsDot } from "react-icons/bs";
import {
  ProductItems,
  ThumbnailImg,
  LogoTitleCont,
  ProfileImg,
  TitleViewsCont,
  Title,
  ViewsTimeCont,
  TitleViewsTimeText,
} from "./styledComponents";

const ProductItem = (props) => {
  const { eachItem } = props;
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = eachItem;
  const timeDiff = formatDistanceToNow(new Date(publishedAt));
  return (
    <ProductItems>
      <Link to={`/videos/${id}`} className="link-items">
        <>
          <ThumbnailImg src={thumbnailUrl} alt={name} />
          <LogoTitleCont>
            <ProfileImg src={profileImageUrl} alt={name} />
            <TitleViewsCont>
              <Title>{title}</Title>
              <ViewsTimeCont>
                <TitleViewsTimeText>{name}</TitleViewsTimeText>
                <BsDot size={30} />
                <TitleViewsTimeText>{viewCount} views</TitleViewsTimeText>
                <BsDot size={30} />
                <TitleViewsTimeText>{timeDiff}</TitleViewsTimeText>
              </ViewsTimeCont>
            </TitleViewsCont>
          </LogoTitleCont>
        </>
      </Link>
    </ProductItems>
  );
};
export default ProductItem;
