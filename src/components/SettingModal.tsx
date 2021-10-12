import React from "react";
import theme from "../theme";
import styled from "styled-components";
import Button from "../elements/Button";
import { Episode } from "../contents";

interface SettingModal {
  closeModal: () => void;
  setBgColor: Function;
  setColor: Function;
  setFontSize: Function;
}

const SettingModal = ({
  closeModal,
  setBgColor,
  setColor,
  setFontSize,
}: SettingModal) => {
  return (
    <>
      <Wrapper>
        <ModalEl>
          <Xbutton
            onClick={() => {
              closeModal();
            }}
          >
            X
          </Xbutton>
          <Option>
            <OptionItem style={{ fontWeight: "bold" }}>Background</OptionItem>
            <OptionItem
              onClick={() => {
                setBgColor("white");
                setColor("black");
              }}
            >
              White
            </OptionItem>
            <OptionItem
              onClick={() => {
                setBgColor("beige");
                setColor("black");
              }}
            >
              Beige
            </OptionItem>
            <OptionItem
              onClick={() => {
                setBgColor("black");
                setColor("white");
              }}
            >
              Black
            </OptionItem>
          </Option>
          <Option>
            <OptionItem style={{ fontWeight: "bold" }}>Font</OptionItem>
            <OptionItem>Roboto</OptionItem>
            <OptionItem>Open Sans</OptionItem>
            <OptionItem>Montserrat</OptionItem>
          </Option>
          <Option>
            <OptionItem style={{ fontWeight: "bold" }}>Font Size</OptionItem>
            <OptionItem
              onClick={() => {
                setFontSize("13px");
              }}
            >
              Small
            </OptionItem>
            <OptionItem
              onClick={() => {
                setFontSize("18px");
              }}
            >
              Medium
            </OptionItem>
            <OptionItem
              onClick={() => {
                setFontSize("24px");
              }}
            >
              Large
            </OptionItem>
          </Option>
        </ModalEl>
      </Wrapper>
    </>
  );
};

// 모달 떴을 때 배경에 깔리는 반투명한 까망이
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
`;

// (하얀 배경의) 모달
const ModalEl = styled.div`
  width: max-content;
  height: max-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 40px;
`;

const Xbutton = styled.div`
  margin: 0 0 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionItem = styled.div`
  width: 7rem;
  height: 3rem;
`;

export default SettingModal;
