import React from "react";
import Wrapper from "../ui/wrapper";
import NameItem from "./NameItem";

type NameProps = {
    name: string;
    correct: string[];
    gameStatus: boolean
};

const Name: React.FC<NameProps> = ({ name, correct, gameStatus }) => {
    const nameArr = name.split("");

    return (
        <Wrapper>
            <div className="flex gap-2 h-[32px]">
                {nameArr.map((l, i) => <NameItem correctArr={correct} gameStatus={gameStatus} index={i} letter={l} key={i} />)}
            </div>
        </Wrapper>
    );
};

export default Name;
