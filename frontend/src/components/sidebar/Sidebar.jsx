import React from "react";
import Searchinput from "./Searchinput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  return (
   <>
    <div className="border-r border-slate-500 p-4 mt-6 flex flex-col md:block hidden md:flex">
      <Searchinput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
   </>
  );
}

export default Sidebar;
