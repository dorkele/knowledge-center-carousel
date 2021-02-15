import React from "react";
import Button from "./Button";

export default function Card({ content }) {
    return (
        <div>
            <img src={content.image} alt="add alt!" />
            <h3>{content.headline}</h3>
            {content.questions.map((question) => {
                return <div>{question}</div>;
            })}
            <Button />
        </div>
    );
}
