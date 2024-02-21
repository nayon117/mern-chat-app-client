import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
    const {loading, messages} = useGetMessages();
    console.log("messagesss", messages);
    return(
        <div className="overflow-auto px-4 flex-1">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        </div>
    )}
export default Messages;