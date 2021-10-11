import React, { useState } from "react";
import { history } from "../index";

import styled from "styled-components";
import theme from "../theme";

import Button from "../elements/Button";
import Image from "../elements/Image";
import rebelcorplogo from "../assets/rebelcorplogo.png";

import contents from "../contents";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchTitle(search);
    setSearch("");
  };

  //일단 해당 제목의 인덱스 번호를 console에 찍히게 했음!
  const searchTitle = (search: string) => {
    let result = -1;
    for (let i = 0; i < contents.length; i++) {
      if (search === contents[i].title) {
        result = i;
      }
    }
    history.push(`/contents/${contents[result].id}`);
  };

  return (
    <>
      <Wrapper>
        <Image
          src={rebelcorplogo}
          width="100px"
          height="100px"
          _onClick={() => {
            history.push("/");
          }}
        />
        <SearchWrapper onSubmit={handleSubmit}>
          <Search
            type="text"
            placeholder="search by title"
            id="search"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit" bg="white" color={theme.typoBlack} width="65px">
            search
          </Button>
        </SearchWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: 60%;
  height: 100px;
  padding: 0 20%;
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.form`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  box-sizing: border-box;
`;

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
`;

export default Header;
