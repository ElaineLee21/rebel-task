import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../theme";

import ContentsItem from "../components/ContentsItem";
import Header from "../components/Header";
import Button from "../elements/Button";

import contents, { Content } from "../contents";
import { useSelector } from "react-redux";
import { selectContents } from "../redux/modules/content";

const List = (props: any) => {
  // like 기준 내림차순으로 정렬한 배열을 contentsList에 할당
  const contents = useSelector(selectContents);
  const descendedContents = contents.slice().sort((a, b) => {
    return b.like - a.like;
  });
  const [contentsList, setContentsList] = useState<Content[]>([]);
  useEffect(() => {
    setContentsList(descendedContents);
  }, []);

  const [page, setPage] = useState(1);
  const size = 5;

  // status에 따라 필터링
  // contentsList에 인자로 넣은 status가 포함된 요소들만 재할당
  const filterByStatus = (status: string) => {
    if (contents) {
      setPage(1); //얘 있어야 All 눌렀을때 10개 다뜨지 않고 5개씩 끊어나올수 있다.. 이런걸 cleanup이라고 한다..
      let res = contents.filter((item) => item.status === status);
      setContentsList(res);
    }
  };

  return (
    <>
      <Header setContentList={setContentsList} />

      <ContentsWrapper>
        <BtnWrapper>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
            _onClick={() => {
              setContentsList(descendedContents);
            }}
          >
            All
          </Button>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
            _onClick={() => {
              filterByStatus("RELEASE");
            }}
          >
            released
          </Button>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
            _onClick={() => {
              filterByStatus("COMPLETED");
            }}
          >
            completed
          </Button>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
            _onClick={() => {
              filterByStatus("UNRELEASED");
            }}
          >
            unreleased
          </Button>
        </BtnWrapper>

        {contentsList &&
          contentsList.slice(0, page * size).map((each, index) => {
            return (
              <div key={each.id}>
                <ContentsItem key={each.id} content={each} />
              </div>
            );
          })}

        <BtnWrapper>
          <Button
            width={theme.bigBtnWidth}
            height={theme.bigBtnHeight}
            bg="white"
            border="1px solid black"
            color={theme.typoBlack}
            _onClick={() => setPage((prev) => prev + 1)}
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
