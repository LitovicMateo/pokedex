import React from "react";
import { motion } from "framer-motion";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  menuHandler: (e: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ menuHandler }) => {

  const links = [
    {
      link: "/pokedex",
      label: "Pokedex"
    },
    {
      link: "/whosthatpokemon",
      label: "Who's that Pokemon?"
    },
    {
      link: "/quiz",
      label: "Pokemon Quiz"
    },
  ]

  const clickHandler = () => {
    menuHandler(false);
  };
  return (
    <motion.div className="fixed pl-[35px] bg-gradient-to-br from-[#A5CD9E] to-[#9EC598] z-50 top-0 left-0 w-full h-screen">
      <button
        className="h-[60px] flex justify-center items-center"
        onClick={clickHandler}
      >
        <RadioButtonCheckedIcon className="text-[#3f6636]" fontSize="large" />
      </button>

      <ul className="flex h-full w-full flex-col gap-8 justify-center items-center">
        {links.map(link => {
          return <Link key={link.label} to={link.link} onClick={clickHandler}>{link.label}</Link>
        })}
        
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
