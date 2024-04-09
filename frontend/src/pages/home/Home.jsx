import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg mt-5 bg-opacity-0">
    <Sidebar />
    <MessageContainer />
  </div>
  
  );
}

export default Home;
