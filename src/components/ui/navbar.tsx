import React, { useState } from "react";
import MobileMenu from "./mobile-menu";
import Logo from "../../lib/Logo";

const Navbar: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const menuHandler = (e: boolean) => {
        setMenuIsOpen(e)
    }

  return (
    <nav className="w-full flex px-[5%] justify-start items-center shadow-md bg-[#A1C79A] font-semibold shadow-[#759171] h-[60px] ">
      <button onClick={() => setMenuIsOpen(prev => !prev)} className="h-[36px] aspect-square overflow-hidden">
        <Logo />
      </button>
      {menuIsOpen && <MobileMenu menuHandler={menuHandler} />}
    </nav>
  );
};

export default Navbar;
