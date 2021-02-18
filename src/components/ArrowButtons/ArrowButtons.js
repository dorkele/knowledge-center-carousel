import React from "react";
import "./arrow-buttons.css";

export default function ArrowButtons({ prev, next }) {
    return (
        <div className="arrows">
            <button onClick={prev} className="left-arrow" />
            <button onClick={next} className="right-arrow" />
        </div>
    );
}
