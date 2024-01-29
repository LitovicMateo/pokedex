import React, { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

type PokemonAvatarProps = {
  front: string;
  back: string;
};

const PokemonAvatar: React.FC<PokemonAvatarProps> = ({ back, front }) => {
  const [flipImage, setFlipImage] = useState<boolean>(true);

  return (
    <div className="relative bg-blue-100 rounded-full">
      <img src={flipImage ? front : back} />
      <button
        className="absolute left-[70%] top-[70%]"
        onClick={() => setFlipImage((prev) => !prev)}
      >
        <AutorenewIcon className="text-gray-800" fontSize="medium" />
      </button>
    </div>
  );
};

export default PokemonAvatar;
