import React, { useEffect } from "react";
import styled from "styled-components";
import theme from "../theme";
import { Content } from "../contents";

import Image from "../elements/Image";

const ContentsItem: React.FunctionComponent<Content> = ({
  id,
  title,
  image,
  like,
  status,
  summary,
}) => {
  useEffect(() => {}, []);

  return (
    <>
      <Wrapper>
        <Image src={image} />

        <RightWrapper>
          <Title>{title}</Title>
          <InfoWrapper>
            <Info>{status}</Info>
            <Info>♥ {like}</Info>
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
