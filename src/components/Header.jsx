import React, { useState } from "react";
import logo from "../assets/logo.png";
import { menuData, userProfilePicUrl, verticalData } from "../utils/constants";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false);
  return (
    <div className="flex items-center p-5 justify-between">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menuData.map((data) => {
            return (
              <HeaderItem key={data?.id} Icon={data?.icon} name={data?.name} />
            );
          })}
        </div>
        <div className="flex md:hidden gap-8">
          {menuData.map((data, index) => {
            return (
              index < 3 && (
                <HeaderItem key={data?.id} Icon={data?.icon} name="" />
              )
            );
          })}
          <div onClick={() => setToggleHeader(!toggleHeader)}>
            <HeaderItem
              key={verticalData?.id}
              Icon={verticalData?.icon}
              name=""
            />
            {toggleHeader && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] pr-10 rounded-sm pl-2 pt-3 border-gray-700">
                {menuData.map((data, index) => {
                  return (
                    index > 2 && (
                      <HeaderItem
                        id={data?.id}
                        Icon={data?.icon}
                        name={data?.name}
                      />
                    )
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={userProfilePicUrl} className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
