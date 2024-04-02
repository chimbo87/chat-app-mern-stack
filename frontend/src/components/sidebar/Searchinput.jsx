import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Searchinput() {
  return (
    <form className="flex item-center gap-2">
      <input
        type="text"
        placeholder="search"
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchOutline />
      </button>
    </form>
  );
}

export default Searchinput;
