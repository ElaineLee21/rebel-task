import { NONAME } from "dns";
import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Button = (props:any) => {
  const { _onClick, children, ...rest } = props;

  return (
    <ButtonEle {...rest} onClick={_onClick}>
      {children}
    </ButtonEle>
  );
}

Button.defaultProps = {
  border: "none",
  margin: "auto",
  bg: theme.btnBlue,
  width: `${theme.btnWidth}`,
  height: `${theme.btnHeight}`,
  fontSize: `${theme.mediumFont}`,
  color: "white",
  type: "button",
  children: null,
  _onClick: () => {},
};

const ButtonEle = styled.button<{ border: string, margin: string, bg: string, width: string, height: string, fontSize: string, }>`
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  :hover {
    cursor: pointer;
  }
`;

export default Button;