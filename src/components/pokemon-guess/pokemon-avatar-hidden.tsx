import React from "react";

type PokemonAvatarHiddenProps = {
    front: string
}

const PokemonAvatarHidden: React.FC<PokemonAvatarHiddenProps> = ({ front }) => {
  return (
    <div className="relative h-[160px] aspect-square bg-green-50 rounded-full flex justify-center items-center">
      <img className=" w-[70%] aspect-square" src={front} />
    </div>
  );
};

export default PokemonAvatarHidden;
