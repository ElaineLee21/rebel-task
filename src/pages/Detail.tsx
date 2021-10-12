import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";

import ContentsItem from "../components/ContentsItem";
import EpisodeItem from "../components/EpisodeItem";

import contents, { Content } from "../contents";
import { useDispatch, useSelector } from "react-redux";
import { selectContents, selectCurrentContent } from "../redux/modules/content";

const Detail = (props: any) => {
  // url에서 id값을 따온다
  const contentsId = props.location.pathname.split("/contents/")[1];

  const dispatch = useDispatch();
  const currentContentId = useSelector(selectCurrentContent);
  const contents = useSelector(selectContents);
  console.log("currentContent", currentContentId);

  const [contentsItem, setContentsItem] = useState<Content | undefined>(
    undefined
  );

  useEffect(() => {
    const el = contents.find((el) => el.id === contentsId);
    if (!el) return;
    setContentsItem(el);
  }, [contents]);
  //[contents]가 있어야 isBuy의 상태가 바뀌었을 때 버튼스타일이 반영됨! 바뀌는 상태는 [ ]안에 넣자~

  return (
    <>
      <Wrapper>
        <ContentsWrapper>
          {contentsItem && <ContentsItem content={contentsItem} />}
          <SummaryWrapper>{contentsItem?.summary}</SummaryWrapper>
          <BoldLine />
          {/* {contentsItem && <EpisodeItem {...contentsItem} />} */}
          {contentsItem &&
            contentsItem.episodes?.map((episode, index) => {
              return (
                <div key={episode.id}>
                  <EpisodeItem episode={episode} />
                </div>
              );
            })}
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
