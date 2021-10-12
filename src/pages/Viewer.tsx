import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";
import episodes, { Episode } from "../contents";
import {
  selectContents,
  selectCurrentContent,
  selectCurrentEpisode,
} from "../redux/modules/content";
import { useSelector } from "react-redux";

const Viewer = (props: any) => {
  // url에서 id값을 따온다
  const episodesId = props.location.pathname.split("/episodes/")[1];
  console.log(episodesId);
  const contents = useSelector(selectContents);
  const currentContentId = useSelector(selectCurrentContent);
  const currentEpisodeId = useSelector(selectCurrentEpisode);
  const episode = contents
    .filter((content) => content.id === currentContentId)[0]
    .episodes.filter((episode) => episode.id === currentEpisodeId)[0];
  console.log("currentEpisode", episode.title, episode.isBuy);

  // const [episodeItem, setEpisodeItem] = useState<Episode | undefined>(
  //   undefined
  // );

  if (!episode) return <></>;
  return (
    <>
      <ViewerWrapper>
        <ViewerHeader>
          <HeaderBtn>← title</HeaderBtn>
          <HeaderBtn>setting</HeaderBtn>
        </ViewerHeader>

        <EpisodeTitle>{episode.title}</EpisodeTitle>
        <EpisodeNovel>{episode.novel}</EpisodeNovel>
      </ViewerWrapper>
    </>
  );
};

const ViewerWrapper = styled.div`
  width: 60%;
  padding: 2rem 20%;
`;

const ViewerHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const HeaderBtn = styled.div`
  margin: 1rem 0;
  font-size: 24px;
  color: ${theme.grey};
  :hover {
    cursor: pointer;
    color: ${theme.grey2};
  }
`;

const EpisodeTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 24px;
  margin-bottom: 2rem;
`;

const EpisodeNovel = styled.div`
  width: 100%;
  height: auto;
  font-size: 18px;
`;

export default Viewer;
