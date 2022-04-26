import PropTypes from "prop-types";
import { memo, useState } from "react";
import styled from "styled-components";
import { randomBg } from "../utils";

const Picture = styled.picture`
  margin: 1%;
`;

const Image = styled.img`
  background: ${props => props.backgroundColor};
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 10px;
`;

const ImageList = ({ image }) => {
const [clicked, setClicked] = useState(false);
const { fixed_height_still, fixed_height, title } = image;
const { mp4, webp, url: gifUrl } = fixed_height;

const backgroundColor = randomBg();

const handleClick = () => setClicked(!clicked);

return (<Picture  width={fixed_height_still.width} height={fixed_height_still.height}  onClick={handleClick}>
  {
    clicked 
    ? <>
      <source type="image/webp" srcSet={webp} />
      <source type="video/mp4" srcSet={mp4} />
      <Image backgroundColor={backgroundColor} width={fixed_height_still.width} height={fixed_height_still.height} loading="lazy" src={gifUrl} />
    </>
    : <Image backgroundColor={backgroundColor} alt={title} width={fixed_height_still.width} height={fixed_height_still.height} src={fixed_height_still.url} loading="lazy" />
  }
  </Picture>)
}

ImageList.propTypes = {
  image: PropTypes.object.isRequired
}

ImageList.defaultProps = {
  image: null
}

export default memo(ImageList);