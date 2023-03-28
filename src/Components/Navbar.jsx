import React from "react";
import { Link } from "react-router-dom";
import {CgProfile} from "react-icons/cg"
const Navbar = () => {
  return (
    <nav className="bg-primary_black fixed font-monte justify-center text-[18px] flex w-full py-4 px-2">
      <div className="font-serif font-bold w-[20%]">
        <p className="text-primary_green font-inter font-bold">Code Loot</p>
      </div>
      <div className="w-full flex">
        <div  className="w-full gap-[3.5rem] text-[16px] flex justify-center">
          <Link to='/' className="font-inter font-bold">Explore</Link>
          <Link to='/wallet' className="font-inter font-bold">Wallet</Link>
          <Link to='/history' className="font-inter font-bold">History</Link>
          <Link to='/friends' className="font-inter font-bold">Friends</Link>
           
        </div>
      </div>
      <div className="flex text-[14px] items-center gap-4 w-[20%]">
        <CgProfile className="text_primary_green text-[20px]"/>
        <div>Rick Sanchez</div>
      </div>
    </nav>
  );
};

export default Navbar;
