import React from "react";

const HeaderItem = ({ Icon, name }) => {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <p>{name}</p>
    </div>
  );
};

export default HeaderItem;
