import React, { useState } from "react";
import { history } from "../index";

import styled from "styled-components";
import theme from "../theme";

import Button from "../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { Episode } from "../contents";
import {
  selectCurrentContent,
  selectCurrentEpisode,
  updateCurrentEpisode,
  updateEpisodeIsBuy,
} from "../redux/modules/content";
import { selectModal } from "../redux/modules/modal";
import Modal from "./Modal";

const EpisodeItem = ({ episode }: { episode: Episode }) => {
  const dispatch = useDispatch();
  const currentContentId = useSelector(selectCurrentContent);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(episode.title, "isBuy?", episode.isBuy);
  const onClickEpisodeItem = () => {
    console.log(currentContentId);
    if (!currentContentId) return;
    dispatch(updateCurrentEpisode(episode.id));
    dispatch(
      updateEpisodeIsBuy({
        contentId: currentContentId,
        episodeId: episode.id,
      })
    );
    history.push(`/episodes/${episode.id}`);
  };
  return (
    <>
      <EpisodesWrapper>
        <EpisodeTitle>{episode.title}</EpisodeTitle>
        {episode.isFree && (
          <Button bg="white" color="red">
            Free!
          </Button>
        )}
      </EpisodesWrapper>
      <EpisodesWrapper>
        <EpisodeTitle>{episode.price} coins</EpisodeTitle>
        {episode.isBuy ? (
          <Button
            bg="white"
            color={theme.typoBlack}
            border="1px solid black"
            _onClick={() => {
              dispatch(updateCurrentEpisode(episode.id));
              history.push(`/episodes/${episode.id}`);
            }}
          >
            Read
          </Button>
        ) : (
          <Button
            _onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Buy
          </Button>
        )}
      </EpisodesWrapper>
      <Line />
      {isModalOpen && (
        <Modal
          closeModal={() => {
            setIsModalOpen(false);
          }}
          onClickEpisodeItem={onClickEpisodeItem}
          episode={episode}
        />
      )}
    </>
  );
};

const EpisodesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto 100px;
  column-gap: 2rem;
  margin-bottom: 5px;
`;

const EpisodeTitle = styled.div`
  max-width: 100%;
  height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid ${theme.grey};
  margin: 2rem 0;
`;

export default EpisodeItem;
