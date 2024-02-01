import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

type PokemonAvatarProps = {
  front: string;
  back: string;
};

const PokemonAvatar: React.FC<PokemonAvatarProps> = ({ back, front }) => {
  const [flipImage, setFlipImage] = useState<boolean>(true);

  return (
    <div className="relative h-[160px] aspect-square bg-green-50 rounded-full flex justify-center items-center">
      <img className="w-[70%] aspect-square" src={flipImage ? front : back} />
      <button
        className="absolute bg-[#A5CD9E] rounded-full left-[75%] top-[75%]"
        onClick={() => setFlipImage((prev) => !prev)}
      >
        <AutorenewIcon className="text-[#3f6636]" fontSize="large" />
      </button>
    </div>
  );
};

export default PokemonAvatar;
