import React from "react";

type QuestionProps = {
    stat: string;
}

const Question: React.FC<QuestionProps> = ({ stat }) => {
    return (
        <div className="text-2xl text-center font-semibold">
            <h3>Which pokemon has the higher <span className="text-yellow-600">{stat}</span>?</h3>
        </div>
    );
};

export default Question;
