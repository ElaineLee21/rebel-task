import React, { useEffect } from "react";
import { history } from "../index";

import styled from "styled-components";
import theme from "../theme";
import { Content } from "../contents";

import Image from "../elements/Image";
import { useDispatch } from "react-redux";
import { updateCurrentContent } from "../redux/modules/content";

const ContentsItem = ({ content }: { content: Content }) => {
  useEffect(() => {}, []);

  const dispatch = useDispatch();
  const onClickContent = () => {
    dispatch(updateCurrentContent(content.id));
    history.push(`/contents/${content.id}`);
  };
  return (
    <>
      <Wrapper>
        <Image src={content.image} _onClick={onClickContent} />
        <RightWrapper>
          <Title onClick={onClickContent}>{content.title}</Title>
          <InfoWrapper>
            <Info>{content.status}</Info>
            <Info>♥ {content.like}</Info>
          </InfoWrapper>
        </RightWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 250px minmax(60%, auto);
  column-gap: 2rem;
  margin-bottom: 2rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  max-width: 100%;
  height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${theme.mediumFont};
  :hover {
    cursor: pointer;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 7rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ContentsItem;
