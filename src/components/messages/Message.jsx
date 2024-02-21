import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? "bg-blue-500" : "" 

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar ">
        <div className="w-10 h-10 rounded-full">
          <img
            className="w-10"
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble   ${bubbleBgColor}`}>
       {message.message}
      </div>
      <div className={`chat-footer text-xs opacity-50 text-white flex gap-1 items-center`}>
        {message.createdAt}
      </div>
    </div>
  );
};
export default Message;
