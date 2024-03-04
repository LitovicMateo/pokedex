import React from "react";
import { motion } from "framer-motion";

type PokemonAvatarHiddenProps = {
    front: string
}

const PokemonAvatarHidden: React.FC<PokemonAvatarHiddenProps> = ({ front }) => {
  return (
    <div className="relative h-[160px] aspect-square bg-green-50 rounded-full flex justify-center items-center">
      <div className="h-full w-full" style={{
        background: `url(${front})`,
        maskImage: `url(${front})`,
        maskRepeat: "no-repeat",
        maskPosition: "center"
      }}>
        <motion.div 
          initial={{background: "black", opacity: 1}}
          transition={{delay: 2, duration: 2}}
          className=" h-full w-full"></motion.div>
      </div>
    </div>
  );
};

export default PokemonAvatarHidden;
