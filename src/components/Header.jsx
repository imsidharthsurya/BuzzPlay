import React from "react";
import logo from "../assets/logo.png"
import {menuData,userProfilePicUrl} from "../utils/constants"
import HeaderItem from "./HeaderItem";


const Header = () => {
  return <div className="bg-yellow-400 flex items-center p-5 justify-between">
    <div className="flex gap-8 items-center">
    <img src={logo} className="w-[80px] md:w-[115px] object-cover"/>
    {menuData.map((data)=>{
      return <HeaderItem key={data?.id} Icon={data?.icon} name={data?.name}/>
    })}
    </div>
    <img src={userProfilePicUrl} className="w-[40px] rounded-full"/>
  </div>;
};

export default Header;
