import React from "react";
import styled from "styled-components";

const Image = (props:any) => {
  const { src, width, height, margin, _onClick } = props;

  const styles = {
    src: src,
    width: width,
    height: height,
    margin: margin,
  };

  return (
    <React.Fragment>
      <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  src: "",
  width: "250px",
  height: "300px",
  margin: false,
  _onclick: () => {},
};

const ImageDefault = styled.div<{ margin: string, width: string, height: string, src: string }>`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;
