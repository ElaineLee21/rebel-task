import React from 'react'
import styled from 'styled-components'
import theme from '../theme';

import Button from '../elements/Button';

const EpisodeItem = () => {
  return (
    <>
      <EpisodesWrapper>
          <EpisodeTitle>제목제목</EpisodeTitle>
          <Button bg="white" color={theme.typoBlack} border="1px solid black">Free!</Button>
        </EpisodesWrapper>
        <EpisodesWrapper>
          <EpisodeTitle>제목제목</EpisodeTitle>
          <Button>Buy</Button>
        </EpisodesWrapper>
        <Line />
    </>
  )
}

const EpisodesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto 100px;
  column-gap: 2rem;
  margin-bottom: 5px;
`

const EpisodeTitle = styled.div`
  max-width: 100%;
  height: 2rem;
  border: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid ${theme.grey};
  margin: 2rem 0;
`

export default EpisodeItem
