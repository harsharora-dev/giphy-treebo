import PropTypes from "prop-types";
import { memo } from "react";
import styled from "styled-components";
import Image from "./Image";

const ImageContainer = styled.section`
  margin: 20px 0 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 786px) {
    align-items: center;
    justify-content: center;
  }
`;

const ImageList = ({ imageList }) => {
  const imageItems = imageList.map((image, index) => {
    return <Image key={`${image.id}_${index}`} image={image.images} />
  });
  return <ImageContainer>{imageItems}</ImageContainer>
}

ImageList.propTypes = {
 imageList: PropTypes.array.isRequired
}

ImageList.defaultProps = {
  imageList: []
}

export default memo(ImageList);