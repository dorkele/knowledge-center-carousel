import React from "react";
import Card from "./Card";
import { carouselContent } from "../carouselContent";
import styles from "./Slider.module.css";

export default function Slider() {
    return (
        <div className={styles.slider}>
            {carouselContent.map((content) => {
                return <Card content={content} />;
            })}
        </div>
    );
}
