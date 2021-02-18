import React, { useEffect, useState } from "react";

import ArrowButtons from "../ArrowButtons/ArrowButtons";

import "./carousel.css";

const Carousel = ({ children, cardsShown }) => {
    const length = children.length;

    const [currentIndex, setCurrentIndex] = useState(cardsShown);
    const [transition, setTransition] = useState(true);
    const [ignoreClick, setIgnoreClick] = useState(false);

    useEffect(() => {
        if (currentIndex === cardsShown || currentIndex === length) {
            setTransition(true);
        }
    }, [currentIndex, cardsShown, length]);

    //if the user is clicking really fast - don't add to currentIndex state
    useEffect(() => {
        if (currentIndex >= length + cardsShown) {
            setIgnoreClick(true);
        } else {
            setIgnoreClick(false);
        }
    }, [currentIndex, cardsShown, length]);

    const next = () => {
        if (ignoreClick) {
            return;
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    //on transition end checks if we reached the last of cards and if so, resets
    const handleTransitionEnd = () => {
        if (currentIndex <= 0) {
            setTransition(false);
            setCurrentIndex(length);
        } else if (currentIndex >= length + cardsShown) {
            setTransition(false);
            setCurrentIndex(cardsShown);
        }
    };

    //clones cards to show so the user doesn't notice resetting
    const extraPrev = () => {
        let extra = [];
        for (let index = 0; index < cardsShown; index++) {
            extra.push(children[length - 1 - index]);
        }
        extra.reverse();
        return extra;
    };

    const extraNext = () => {
        let extra = [];
        for (let index = 0; index < cardsShown; index++) {
            extra.push(children[index]);
        }
        return extra;
    };

    return (
        <div className="carousel">
            <div className="container">
                <div className="content-wrapper">
                    <div
                        className={`content show-${cardsShown}`}
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / cardsShown)
                            }%)`,
                            transition: !transition ? "none" : null,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {extraPrev()}
                        {children}
                        {extraNext()}
                    </div>
                </div>
            </div>
            <ArrowButtons prev={prev} next={next} />
        </div>
    );
};

export default Carousel;
