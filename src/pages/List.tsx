import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";

import ContentsItem from "../components/ContentsItem";
import Header from "../components/Header";
import Button from "../elements/Button";

import contents, { Content } from "../contents";

const List = (props: any) => {
  let descendedContents = contents.sort((a, b) => {
    return b.like - a.like;
  });

  const [contentsList, setContentsList] = useState<Content[] | undefined>(
    undefined
  );

  useEffect(() => {
    setContentsList(descendedContents);
  }, []);

  return (
    <>
      <Header />

      <ContentsWrapper>
        <BtnWrapper>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
          >
            released
          </Button>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
          >
            completed
          </Button>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
          >
            unreleased
          </Button>
        </BtnWrapper>

        {/* <ContentsItem /> */}

        <BtnWrapper>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
          >
            more
          </Button>
        </BtnWrapper>
      </ContentsWrapper>
    </>
  );
};

const BtnWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ContentsWrapper = styled.div`
  width: 60%;
  padding: 2rem 20%;
`;

export default List;
