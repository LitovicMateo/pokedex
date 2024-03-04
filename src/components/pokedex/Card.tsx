import React, { useState } from "react";
import PokemonAvatar from "./Avatar";
import PokemonInfo from "./PokemonInfo";
import PokemonCardTabs from "./Tabs";
import { capitalizeString } from "../../lib/util/capitalizeString";
import PokemonCardStats from "./PokemonStats";
import { useFetchPokemon } from "../../lib/hooks/usePokemonDetails";
import Wrapper from "../ui/wrapper";

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
    <Wrapper>
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

          {activeTab === "Info" && pokemon && <PokemonInfo pokemon={pokemon} />}
          {activeTab === "Stats" && <PokemonCardStats stats={pokemon.stats} />}
        </>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
};

export default PokemonCard;
