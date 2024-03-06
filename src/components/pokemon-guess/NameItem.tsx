import React from "react";

type NameItemProps = {
    correctArr: string[];
    letter: string;
    index: number;
    gameStatus: boolean
};

const NameItem: React.FC<NameItemProps> = ({ correctArr, letter, index, gameStatus }) => {
    const isCorrect = correctArr.includes(letter);

    return (
        <>
            {isCorrect ? (
                <div className="text-xl font-bold h-[20px] aspect-square flex justify-center items-center " key={index}>
                    <p>{letter.toUpperCase()}</p>
                </div>
            ) : (
                <div className={`${gameStatus && "text-red-500 text-xl border-none font-bold"} h-[20px] flex justify-center items-center  aspect-square border-b-2 border-solid border-black `} key={index}>
                    <p>{gameStatus ? letter.toUpperCase() : ""}</p>
                </div>
            )}
        </>
    );
};

export default NameItem;
