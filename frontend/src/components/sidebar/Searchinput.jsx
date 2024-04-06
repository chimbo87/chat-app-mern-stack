import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
function Searchinput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Please term must be at least 3 characters long");
    }
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");

    }else toast.error("No such user found !");
  };
  return (
    <form onSubmit={handleSubmit} className="flex item-center gap-2">
      <input
        type="text"
        placeholder="search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchOutline />
      </button>
    </form>
  );
}

export default Searchinput;
