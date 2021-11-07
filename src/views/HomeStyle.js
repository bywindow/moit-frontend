import styled from 'styled-components';
import { MoitColor } from './components/Styles';

export const container = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => props.windowHeight}px;
    overflow: hidden;
    min-height: 100%;
    background-color: #f5f5f5;
`;

export const homeContainer = styled.div`
    position: relative;
    width: 1080px;
    min-height: 100%;
    margin: 0 auto;
    position: relative;
    background-color: #fff;
`;

export const banner = styled.div`
    width: 100%;
    height: 48px;
    background-color: ${MoitColor};
    flex-direction: row;
    align-items: center;
    margin: 0 0 5px 0;
`;

export const bannerText = styled.div`
    font-size: 24px;
    color: white;
    padding: 15px 20px;
`;

export const PosterScrollView = styled.div`
    padding-top: 50px;
    width: 1080px;
    margin: 0 auto;
`;