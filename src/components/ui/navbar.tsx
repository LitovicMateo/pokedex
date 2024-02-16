import React, { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const menuHandler = (e: boolean) => {
        setMenuIsOpen(e)
    }
  return (
    <nav className="w-full flex px-[5%] justify-start items-center shadow-md bg-[#A1C79A] font-semibold shadow-[#759171] h-[60px] ">
      <button onClick={() => setMenuIsOpen(prev => !prev)}>
        <RadioButtonCheckedIcon className="text-[#3f6636]" fontSize="large" />
      </button>
      {menuIsOpen && <MobileMenu menuHandler={menuHandler} />}
    </nav>
  );
};

export default Navbar;
