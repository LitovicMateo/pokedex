import React from "react";
import { ActiveTabs } from "./Card";

type PokemonCardTabItemProps = {
  item: string;
  activeTab: string;
  onClick: (e: ActiveTabs) => void;
};

const PokemonCardTabItem: React.FC<PokemonCardTabItemProps> = ({
  item,
  activeTab,
  onClick,
}) => {
  const isActive: boolean =
    item.toLowerCase() === activeTab.toLowerCase() ? true : false;

  const handleClick = () => {
    const e: ActiveTabs =
      (item === "Info" && "Info") || (item === "Moves" && "Moves") || "Stats";
    onClick(e);
  };

  return (
    <div
      className={`${
        isActive && "border-b-2 pb-1 border-solid border-green-950 font-bold"
      } pb-1 w-full text-center`}
      onClick={handleClick}
    >
      {item}
    </div>
  );
};

export default PokemonCardTabItem;
