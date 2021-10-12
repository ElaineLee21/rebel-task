import React from "react";
import theme from "../theme";
import styled from "styled-components";
import Button from "../elements/Button";
import { Episode } from "../contents";

interface Modal {
  closeModal: () => void;
  onClickEpisodeItem: () => void;
  episode: Episode;
}

const Modal = ({ closeModal, onClickEpisodeItem, episode }: Modal) => {
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
          {episode.title}
          <Button margin="20px 0" height="50px" _onClick={onClickEpisodeItem}>
            <div>Buy</div>
            <div>{episode.price} coins</div>
          </Button>
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

// 얘는 (자식인)로그인, 설문조사, 회원가입에 다 들어가는 버튼이라서, 부모인 이곳에 넣어놨습니다!
const Xbutton = styled.div`
  margin: 0 0 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export default Modal;
