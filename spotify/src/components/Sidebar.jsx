import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import spotify from "../assets/spotify.svg";
import { links } from "../assets/constants";

const Sidebar = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={spotify} alt="Logo" className="w-full h-14 object-contain" />
      </div>
    </>
  );
};

export default Sidebar;
