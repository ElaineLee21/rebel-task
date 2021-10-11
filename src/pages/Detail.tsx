import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";

import ContentsItem from "../components/ContentsItem";
import EpisodeItem from "../components/EpisodeItem";
import Header from "../components/Header";

import contents, { Content } from "../contents";

const Detail = (props: any) => {
  // url에서 id값을 따온다
  const contentsId = props.location.pathname.split("/contents/")[1];

  useEffect(() => {
    const el = contents.find((el) => el.id === contentsId);
    if (!el) return;
    setContentsItem(el);
  }, []);

  const [contentsItem, setContentsItem] = useState<Content | undefined>(
    undefined
  );

  return (
    <>
      <Wrapper>
        <Header />
        <ContentsWrapper>
          {contentsItem && <ContentsItem {...contentsItem} />}
          <SummaryWrapper>{contentsItem?.summary}</SummaryWrapper>
          <BoldLine />
          <EpisodeItem />
        </ContentsWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const ContentsWrapper = styled.div`
  width: 60%;
  padding: 2rem 20%;
`;

const SummaryWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const BoldLine = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid ${theme.grey};
  margin: 2rem 0;
`;

export default Detail;
