import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";
import episodes, { Episode } from "../contents";
import { history } from "../index";
import {
  selectContents,
  selectCurrentContent,
  selectCurrentEpisode,
} from "../redux/modules/content";
import { useSelector } from "react-redux";
import SettingModal from "../components/SettingModal";

const Viewer = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState<string>("black");
  const [font, setFont] = useState("roboto");
  const [fontSize, setFontSize] = useState("18px");

  // url에서 id값을 따온다
  const episodesId = props.location.pathname.split("/episodes/")[1];

  const contents = useSelector(selectContents);
  const currentContentId = useSelector(selectCurrentContent);
  const currentEpisodeId = useSelector(selectCurrentEpisode);
  const episode = contents
    .filter((content) => content.id === currentContentId)[0]
    .episodes.filter((episode) => episode.id === currentEpisodeId)[0];
  console.log("currentEpisode", episode.title, episode.isBuy);

  if (!episode) return <></>;
  return (
    <>
      <ViewerWrapper
        bgColor={bgColor}
        textColor={textColor}
        fontSize={fontSize}
      >
        <ViewerHeader>
          <HeaderBtn
            onClick={() => {
              history.goBack();
            }}
          >
            ← title
          </HeaderBtn>
          <HeaderBtn
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            setting
          </HeaderBtn>
        </ViewerHeader>

        <EpisodeTitle>{episode.title}</EpisodeTitle>
        <EpisodeNovel>{episode.novel}</EpisodeNovel>
      </ViewerWrapper>
      {isModalOpen && (
        <SettingModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
          setBgColor={setBgColor}
          setColor={setTextColor}
          setFontSize={setFontSize}
        />
      )}
    </>
  );
};

const ViewerWrapper = styled.div<{
  bgColor: string;
  textColor: string;
  fontSize: string;
}>`
  width: 60%;
  height: 100vh;
  padding: 2rem 20%;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
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
