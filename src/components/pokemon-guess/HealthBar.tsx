import React from "react";
import Wrapper from "../ui/wrapper";

type HealthBarProps = {
    misses: number;
};

const HealthBar: React.FC<HealthBarProps> = ({ misses }) => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <Wrapper>
            <div className="grid grid-cols-6 gap-2 p-1 rounded-lg bg-gray-800 h-[45px] w-full" dir="rtl">
                {arr.map((e) => {
                    if (e > misses) {
                        return <div className="bg-[#A5CD9E] w-full h-full z-10 rounded-md"></div>;
                    } else {
                        return <div className="bg-red-400 w-full h-full z-10 rounded-md -order-1"></div>;
                    }
                })}
            </div>
        </Wrapper>
    );
};

export default HealthBar;
