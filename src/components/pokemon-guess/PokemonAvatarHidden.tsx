import React from "react";
import { Variants, motion } from "framer-motion";

type PokemonAvatarHiddenProps = {
    front: string;
    gameStatus: "Running" | "Finished";
    id: number
};

const PokemonAvatarHidden: React.FC<PokemonAvatarHiddenProps> = ({ front, gameStatus, id }) => {
    const variants: Variants = {
        running: { background: "rgba(0, 0, 0, 1)",  transition: {delay: 0}},
        finished: { background: "rgba(0, 0, 0, 0)", transition:{delay: 0.5, duration: 1.2}},
    };
    return (
        <div className="relative h-[160px] aspect-square bg-green-50 rounded-full flex justify-center items-center">
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    maskImage: `url(${front})`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskOrigin: "content-box"
                }}
            >
                <motion.div
                    variants={variants}
                    initial="running"
                    animate={gameStatus === "Finished" ? "finished" : "running"}
                    className=" h-full w-full"
                ></motion.div>
            </div>
        </div>
    );
};

export default PokemonAvatarHidden;
