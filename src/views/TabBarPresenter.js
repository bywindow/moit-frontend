import React, { useState, useEffect } from "react";
import * as s from "./TabBarStyled";

const TabBarPresenter = ({totalOrder, waitingOrder, makingOrder, deliveryOrder}) => {

  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  /** 스크롤에 따른 visible
   * 초기값 : visible
   * scroll-down : unvisible
   * scroll-up : visible
   * isScrollTop : visible
   */

  //스크롤 액션에 따라 tabBar visible 상태 조정
  function controlTabBar() {
    var st = window.scrollY;
    //no action
    if (Math.abs(lastScrollTop - st) <= 100) {
      return;
    }
    //scroll down
    if (st > lastScrollTop && st > 100) {
      setShow(false);
    } 
    //scroll up
    else {
      if (st < 120 || st < lastScrollTop - 100) {
        setShow(true);
      }
    }
    setLastScrollTop(st);
  }

  function toFit(callBack) {
    if (!callBack) throw Error('Invalid required arguments')
    let tick = false;
    return function() {
      if (tick) return;
      tick = true;
      return requestAnimationFrame(() => {
        tick = false;
        return callBack();
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toFit(controlTabBar))

    return () => {
      window.removeEventListener('scroll', toFit(controlTabBar))
    }
  }, [lastScrollTop], [show])

  return (
    <s.StatusBar isShow={show}>
      <s.StatusBarContainer>
        <s.StatusBarItem>
        <s.StatusBarTitle>금일 총 주문건수</s.StatusBarTitle>
        <s.StatusBarValue>{totalOrder}</s.StatusBarValue>
      </s.StatusBarItem>
      <s.StatusBarDivider></s.StatusBarDivider>
      <s.StatusBarItem>
        <s.StatusBarTitle>주문 대기중</s.StatusBarTitle>
        <s.StatusBarValue>{waitingOrder}</s.StatusBarValue>
      </s.StatusBarItem>
      <s.StatusBarDivider></s.StatusBarDivider>
      <s.StatusBarItem>
        <s.StatusBarTitle>조리중</s.StatusBarTitle>
        <s.StatusBarValue>{makingOrder}</s.StatusBarValue>
      </s.StatusBarItem>
      <s.StatusBarDivider></s.StatusBarDivider>
      <s.StatusBarItem>
        <s.StatusBarTitle>배달완료</s.StatusBarTitle>
        {/* 전체 평점은 소수점 두자리까지만 표현 */}
        <s.StatusBarValue>{deliveryOrder}</s.StatusBarValue>
      </s.StatusBarItem>
      </s.StatusBarContainer>
      
    </s.StatusBar>
    
  )
};

export default TabBarPresenter;