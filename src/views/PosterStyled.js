import styled from "styled-components";
import { Gray, MoitColor, GrayBorder, LightGray } from "./components/Styles";

export const ListContainer = styled.div`
  width: 100%;
  positon: relative;
  float: left;
  background-color: ${(props) => props.isFinish ? '#FAFAFA' : '#fff'};
`;

export const Container = styled.div`
  width: calc(100%-32px);
  height: 183px;
  border-bottom: 3px solid ${LightGray};
  margin: 0 10px;
  padding: 8px;
  overflow: hidden;
  positon: relative;
  &:hover {
    border-bottom: 3px solid ${MoitColor};
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  width: 180px;
  height: 164px;
  overflow: hidden;
  align-content: space-between;
  border-right: 1px solid ${LightGray};
  padding: 5px 20px 10px 10px;
`;

export const StatusProcess = styled.div`
  background-color: ${(props) => props.isDoing ? MoitColor : GrayBorder};
  width: 158px;
  height: 35px;
  margin: 0 0 10px 0;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

export const StatusText = styled.span`
  display: inline-block;
  color: white;
  font-size: 24px;
  padding: 3px 0;
  text-align: center;
`;

export const ContentBox = styled.div`
  position: relative;
  width: 820px;
  height: 100%;
  float: left;
  box-sizing: border-box;
  padding: 10px 5px 10px 30px;
`;

export const SubContainer = styled.ul`
  font-size: 18px;
  font-weight: 500;
  &:hover {
    color: #01848a;
  }
`;

export const InfoItem = styled.li`
  font-size: 20px;
  font-weight: 600;
  line-height: 2.0rem;
  width: 100%;
  color: ${Gray};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const newOrder = styled.span`
  position: absolute;
  top: 10px;
  right: 5px;
  color: red;
  font-weight: 600;
  font-size: 20px;
`;