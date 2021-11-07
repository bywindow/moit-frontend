import styled, { keyframes } from "styled-components";
import { MoitColor, LightGray, Gray } from "./components/Styles";

/* 스크롤 상단 탭 바 */
export const StatusBar = styled.div`
  position: fixed;
  display: block;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #9E9E9E;
  width: 1080px;
  height: 60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 990;
  opacity: ${(props) => props.isShow ? 1 : 0};
  transition: opacity 0.3s;
  overflow: hidden;
`;

export const StatusBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const StatusBarItem = styled.button`
  flex: 1;
  height: 100%;
`;

export const StatusBarDivider = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${LightGray};
`;

export const StatusBarTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${Gray};
  float: left;
  padding-left: 10px;4
`;

export const StatusBarValue = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  float: right;
  margin-top: -2px;
  padding-right: 10px;
`;