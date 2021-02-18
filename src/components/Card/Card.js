import React from "react";
import Button from "../Button/Button";
import "./card.css";

export default function Card({ content }) {
    return (
        <div className="card">
            <img src={content.image} alt="add alt!" />
            <h3>{content.headline}</h3>
            {content.questions.map((question, index) => {
                return <div key={index}>{question}</div>;
            })}
            <Button />
        </div>
    );
}
