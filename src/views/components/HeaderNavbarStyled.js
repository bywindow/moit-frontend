import styled from 'styled-components';
import { MoitColor } from './Styles';
import { BsFillPersonFill } from "react-icons/bs";


//헤더 밖 컨테이너
export const outsideStyle = styled.div`
    width: 100%;
    height: 83px;
    margin-top: -10px;
    padding-bottom: -10px;
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

//헤더
export const header = styled.header`
    width: 1080px;
    height: 83px;
    position: relative;
    margin: 0 auto;
    .dropdown-toggle::after {
        color: #1bc1bb;
        vertical-align: none;
    }

    .dropdown-item.active,
    .dropdown-item {
        &:active {
            background-color: #1bc1bb;
        }
    }

    @media screen and (max-width: 991px) {
        width: 90%;
        margin: 0 auto;
    }
`;

export const logoContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10%;
    height: 54px;
    backgound-color: black;
`;

export const logoStyle = styled.span`
    font-weight: 300;
    font-size: 36px;
    margin: 12px;
    color : ${MoitColor};
    font-family: Do Hyeon, sans-serif;
`;

export const personIcon = styled(BsFillPersonFill)`
    position: absolute;
    right: 5px;
    bottom: 12px;
    font-size: 36px;
    color: ${MoitColor};
`;