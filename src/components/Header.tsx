import React from 'react';
import styled from "styled-components";
import theme from '../theme';

import Image from '../elements/Image';
import rebelcorplogo from '../assets/rebelcorplogo.png';
import whitesearch from '../assets/whitesearch.png';

const Header = () => {
  return (
    <>
     <Wrapper>
       <Image src={rebelcorplogo} width="100px" height="100px"/>
       <SearchWrapper>
         <Search placeholder="search by title"></Search>
         <SearchIconWrapper>
           <SearchIcon src={whitesearch} />
          </SearchIconWrapper>
       </SearchWrapper>
     </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: black;
  width: 60%;
  height: 100px;
  padding: 0 20%;
  display: flex;
  justify-content: space-between;
`

const SearchWrapper = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  box-sizing: border-box;
`

const Search = styled.input`
  width: 250px;
  height: 30px;
  margin: auto 0;
  border: none;
  border-bottom: 2px solid ${theme.grey};
  background-color: transparent;
  color: white;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`

const SearchIconWrapper = styled.div`
  
  box-sizing: border-box;
`

const SearchIcon = styled.img`
  max-width: 30px;
  max-height: 30px;
`

export default Header
