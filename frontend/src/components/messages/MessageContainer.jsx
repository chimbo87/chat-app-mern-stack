import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { PiChatsLight } from "react-icons/pi";
import useConversation from "../../store/useConversation";
import { useAuthContext } from "../../context/AuthContext";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[800px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-sky-500 px-4 py-2 mb-2 mt-5 flex items-center justify-between">
            <span className="text-white font-bold">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="text-sky-500">Hello, {authUser.fullName}</p>
        <p className="text-sky-500">Select a chat to start messaging</p>
        <PiChatsLight className="text-3xl md:text-6xl-center text-sky-500" />
      </div>
    </div>
  );
};
