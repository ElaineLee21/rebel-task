import React from 'react'
import styled from 'styled-components'
import theme from '../theme';

const Episode = () => {
  return (
    <>
    <ViewerWrapper>
      <ViewerHeader>
        <HeaderBtn>← title</HeaderBtn>
        <HeaderBtn>setting</HeaderBtn>
      </ViewerHeader>

      <EpisodeTitle>제목</EpisodeTitle>
      <EpisodeNovel>내용내용</EpisodeNovel>
    </ViewerWrapper>
    
    </>
  )
}

const ViewerWrapper = styled.div`
  width: 60%;
  padding: 2rem 20%;
`

const ViewerHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`

const HeaderBtn = styled.div`
  margin: 1rem 0;
  font-size: 24px;
  color: ${theme.grey};
  :hover {
    cursor: pointer;
    color: ${theme.grey2};
  }
`

const EpisodeTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 24px;
  margin-bottom: 2rem;
`

const EpisodeNovel = styled.div`
  width: 100%;
  height: auto;
  font-size: 18px;
`

export default Episode
