import React, { useState, useEffect } from "react";

import Headline from "./components/Headline/Headline";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import BlurOverlay from "./components/BlurOverlay/BlurOverlay";

import { carouselContent } from "./assets/carouselContent";
import "./app.css";

function App() {
    const [cardsShown, setCardsShown] = useState(3);

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
