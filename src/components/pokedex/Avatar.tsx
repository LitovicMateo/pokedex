import React, { ReactElement, useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SpaIcon from '@mui/icons-material/Spa';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';

type PokemonAvatarProps = {
  type: string;
  front: string;
  back: string;
};

const PokemonAvatar: React.FC<PokemonAvatarProps> = ({ back, front, type }) => {
  const [flipImage, setFlipImage] = useState<boolean>(true);

  const typeImages: {
    [key: string]: ReactElement
  } = {
    fire: <WhatshotIcon className="text-[#ff0000]" fontSize="medium" />,
    grass: <SpaIcon className="text-[#3f6636]" fontSize="medium" />,
    water: <WaterDropIcon  className="text-[#4791b3]" fontSize="medium" />,
    electric: <FlashOnIcon className="text-[#f1ef63]" fontSize="medium" />,
    flying: <AirIcon className="text-[#f1ef63]" fontSize="medium" /> ,
    ice: <AcUnitIcon className="text-[#c2fffa]" fontSize="medium" /> ,
  }

  return (
    <div className="relative h-[160px] aspect-square bg-green-50 rounded-full flex justify-center items-center">
      <img className=" w-[70%] aspect-square" src={flipImage ? front : back} />
      <button
        className="absolute bg-[#A5CD9E] rounded-full left-[75%] top-[75%]"
        onClick={() => setFlipImage((prev) => !prev)}
      >
        <AutorenewIcon className="text-[#3f6636]" fontSize="large" />
      </button>
      <button
        className="absolute bg-[#A5CD9E] h-[35px] aspect-square rounded-full left-[5%] top-[75%]"
        onClick={() => setFlipImage((prev) => !prev)}
      >
        {typeImages[type]}
      </button>

    </div>
  );
};

export default PokemonAvatar;
