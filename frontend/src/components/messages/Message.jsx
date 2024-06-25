import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={"https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png"}/>

        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi!what is up?</div>
      <div className="chat-footer opacity-50text-xs gap-1 items-center">12:42</div>
      {/* <div className="chat-bubble text-white bg-blue-500">Hi!what is up?</div> */}
    </div>
  );
};

export default Message;
