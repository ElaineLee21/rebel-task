import React, {useEffect} from 'react'
import styled from 'styled-components'
import theme from '../theme';

import ContentsItem from '../components/ContentsItem';
import Header from '../components/Header'
import Button from '../elements/Button';

const List = (props:any) => {
  
  return (
    <>
      <Header />
  
      <ContentsWrapper>
        <BtnWrapper>
        <Button width={theme.bigBtnWidth} height={theme.bigBtnHeight} bg="white" border="1px solid black" color={theme.typoBlack}>released</Button>
        <Button width={theme.bigBtnWidth} height={theme.bigBtnHeight} bg="white" border="1px solid black" color={theme.typoBlack}>completed</Button>
        <Button width={theme.bigBtnWidth} height={theme.bigBtnHeight} bg="white" border="1px solid black" color={theme.typoBlack}>unreleased</Button>
        </BtnWrapper>

        <ContentsItem />
        <ContentsItem />

        <BtnWrapper>
          <Button width={theme.bigBtnWidth} height={theme.bigBtnHeight} bg="white" border="1px solid black" color={theme.typoBlack}>more</Button>
        </BtnWrapper>
        
      </ContentsWrapper>
      
    </>
  )
}

const BtnWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const ContentsWrapper = styled.div`
  width: 60%;
  padding: 2rem 20%;
`

export default List
