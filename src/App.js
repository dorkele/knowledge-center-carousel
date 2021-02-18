import React, { useState, useEffect } from "react";

import Headline from "./components/Headline/Headline";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import BlurOverlay from "./components/BlurOverlay/BlurOverlay";

import { carouselContent } from "./assets/carouselContent";
import "./app.css";

function App() {
    const [cardsShown, setCardsShown] = useState(3);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //check for the size of the window
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    //number of the cards shown on the screen will depend on the size of the screen
    useEffect(() => {
        if (windowWidth < 768) {
            setCardsShown(1);
        } else if (720 < windowWidth && windowWidth < 1150) {
            setCardsShown(2);
        } else {
            setCardsShown(3);
        }
    }, [windowWidth]);

    return (
        <div className="page">
            <Headline />
            <div className="main">
                <Carousel cardsShown={cardsShown}>
                    {carouselContent.map((content, index) => {
                        return <Card content={content} key={index} />;
                    })}
                </Carousel>
            </div>
            <BlurOverlay />
        </div>
    );
}

export default App;
