import React, {useEffect, useState} from "react";
import Header from './components/Header';
import * as s from "./HomeStyle";
import TabBarPresenter from './TabBarPresenter';
import Poster from './Poster';
import Section from './Section';

const HomeIndex = ({
    props,
    result,
    totalOrder,
    waitingOrder,
    makingOrder,
    deliveryOrder,
    status,
}) => {
    const [wstate, wsetState] = useState(waitingOrder);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <s.container windowHeight={height}>
            <Header></Header>
            <s.homeContainer>
                <s.banner>
                    <s.bannerText>실시간 주문 현황</s.bannerText>
                </s.banner>
                {/* 상단 탭 바 */}
                <TabBarPresenter
                    totalOrder={totalOrder} 
                    waitingOrder={waitingOrder} 
                    makingOrder={makingOrder} 
                    deliveryOrder={deliveryOrder}
                />
                <s.PosterScrollView>
                    <Section>
                        {result.map((item, index) => (
                            <Poster
                                key={index}
                                orderData={item}
                            />
                        ))}
                    </Section>
                </s.PosterScrollView>
            </s.homeContainer>
        </s.container>
    );
};

export default HomeIndex;