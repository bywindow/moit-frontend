import React, {useEffect, useRef, useState} from "react";
import * as s from "./PosterStyled";

const Poster = ({
  orderData,
  waits,
  waitset,
}) => {

  const [state, setState] = useState(orderData);
  
  const handleChange = (e) => {
    // console.log(e);
    let cur = state.step === 'ready' ? 0 : state.step === 'cook' ? 1 : 2;
    if (cur > e) {
      alert("이전 단계로 돌아갈 수 없습니다.");
    } else {
      setState({
        ...state,
        step: e === 1 ? 'cook' : 'delivery',
      })
    }
  }
  
  return (
    <s.ListContainer isFinish={state.step === 2}>
      <s.Container>
        
        <s.StatusContainer>
          <s.StatusProcess
            onClick={() => handleChange(0)}
            isDoing={state.step === 'ready'}
          >
            <s.StatusText>주문대기</s.StatusText>
          </s.StatusProcess>
          <s.StatusProcess 
            onClick={() => handleChange(1)}
            isDoing={state.step === 'cook'}
          >
            <s.StatusText>조  리  중</s.StatusText>
          </s.StatusProcess>
          <s.StatusProcess 
            onClick={() => handleChange(2)}
            isDoing={state.step === 'delivery'}
          >
            <s.StatusText>배달출발</s.StatusText>
          </s.StatusProcess>
        </s.StatusContainer>
        
        <s.ContentBox>
            {state.step === 'ready' && 
              <s.newOrder>🚨 주문을 확인해주세요!</s.newOrder>
            }
          <s.SubContainer>
            <s.InfoItem>{"메뉴 : " + orderData.menus.map((item) => {return " " + item.name})}</s.InfoItem>
            <s.InfoItem>{"배달 받을 지역 : " + orderData.deliveryLocation}</s.InfoItem>
            <s.InfoItem>{"주문자 (" + orderData.participantsName.length + "명) :" + orderData.participantsName.map((item) => {return " " + item})}</s.InfoItem>
            <s.InfoItem>{"대표번호 : " + orderData.creatorPhoneNumber}</s.InfoItem>
            {/* <s.InfoItem>{orderData.requireDish ? "소분용 그릇 필요 여부 : 필요함" : "소분용 그릇 필요 여부 : 필요 없음"}</s.InfoItem> */}
            <s.InfoItem>{"요청사항 : " + orderData.message}</s.InfoItem>
          </s.SubContainer>
        </s.ContentBox>
      </s.Container>
    </s.ListContainer>
  );
};

export default Poster;