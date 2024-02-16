import React, { useState } from "react";
import PokemonAvatar from "./Avatar";
import PokemonInfo from "./PokemonInfo";
import PokemonCardTabs from "./Tabs";
import { capitalizeString } from "../../lib/util/capitalizeString";
import PokemonCardStats from "./PokemonStats";
import { useFetchPokemon } from "../../lib/hooks/usePokemonDetails";

type PokemonCardProps = {
  id: number;
};

export type ActiveTabs = "Info" | "Stats" | "Moves";

const PokemonCard: React.FC<PokemonCardProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState<ActiveTabs>("Info");
  const { pokemon, isLoading } = useFetchPokemon(id);

  const handleTabClick = (e: ActiveTabs) => {
    if (e) setActiveTab(e);
  };

  return (
    <div className=" p-4 mx-auto pb-6 h-[600px] w-full rounded-lg shadow-lg shadow-[#759171] flex-col justify-ce items-center gap-6 inline-flex bg-gradient-to-br from-[#A5CD9E] to-[#9EC598]">
      {isLoading && <p>Loading...</p>}
      {!isLoading && pokemon ? (
        <>
          <PokemonAvatar
            type={pokemon.type}
            front={pokemon!.frontImg}
            back={pokemon!.backImg}
          />
          <h2 className="font-extrabold text-4xl text-gray-800 ">
            {capitalizeString(pokemon ? pokemon.name : "Bulbasaur")}
          </h2>

          <PokemonCardTabs active={activeTab} tabHandler={handleTabClick} />

          {activeTab === "Info" && pokemon && (
            <PokemonInfo pokemon={pokemon} />
          )}
          {activeTab === "Stats" && <PokemonCardStats stats={pokemon.stats} />}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PokemonCard;
