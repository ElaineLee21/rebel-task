import React from 'react'
import styled from 'styled-components'
import theme from '../theme';

import ContentsItem from '../components/ContentsItem';
import EpisodeItem from '../components/EpisodeItem';
import Header from '../components/Header'

const Detail = () => {
  return (
    <>
    <Wrapper>
      <Header />

      <ContentsWrapper>
        <ContentsItem />
        <SummaryWrapper>요약</SummaryWrapper>

        <BoldLine />

        <EpisodeItem />

      </ContentsWrapper>
      
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

const ContentsWrapper = styled.div`
  width: 60%;
  padding: 2rem 20%;
`

const SummaryWrapper = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
`

const BoldLine = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 2px solid ${theme.grey};
  margin: 2rem 0;
`

export default Detail
