import React from "react";
import useConversation from "../../zustand/useConversation"
import { useAuthContext } from '../../../context/AuthContext'
import { extractTime } from "../../utils/extractTime";
const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const formattedTime = extractTime(message.createdAt);
  const fromme = message.senderid===authUser._id
  const chatClassName = fromme ? "chat-end" : "chat-start";
	const profilePic = fromme ? authUser.profilepic : selectedConversation?.profilepic;
  const bubbleBgColor = fromme ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={profilePic}/>

        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50text-xs gap-1 items-center">{formattedTime}</div>
      {/* <div className="chat-bubble text-white bg-blue-500">Hi!what is up?</div> */}
    </div>
  );
};

export default Message;
