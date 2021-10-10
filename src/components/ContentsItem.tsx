import React from 'react'
import styled from 'styled-components'

import Image from '../elements/Image';

const ContentsItem = () => {
  return (
    <>
      <Wrapper>
        <Image src="https://elaineimages.s3.ap-northeast-2.amazonaws.com/Alexander_Averin_07.jpg" />

        <RightWrapper>
          <Title>
            Nãy giờ, cuộc gọi của giữa Tư Đồ Không và Lưu Trung Nam không hề ngắt, nên anh ta cũng nghe thấy được nội dung cuộc nói chuyện vừa rồi.
			    	Lưu Trung Nam nghe thấy trợ lý nói rằng, Bùi Dật Duy giết người, sau đó hôm nay đi tự thú.
				  </Title>
          <InfoWrapper>
            <Info>unreleased</Info>
            <Info>like</Info>
          </InfoWrapper>
        </RightWrapper>
      </Wrapper>
      
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 250px minmax(60%, auto);
  column-gap: 2rem;
  margin-bottom: 2rem;
`

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid purple;
`

const Title = styled.div`
  margin-bottom: 2rem;
  max-width: 100%;
  height: 2rem;
  border: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
`

const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  width: 7rem;
  height: 2rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ContentsItem
