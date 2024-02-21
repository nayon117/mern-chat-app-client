import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log("messagesss", messages);
  return (
    <div className="overflow-auto px-4 flex-1">


        {!loading && messages.length>0 && messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}


      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message to start the conversation</p>
      )}
    </div>
  );
};
export default Messages;
