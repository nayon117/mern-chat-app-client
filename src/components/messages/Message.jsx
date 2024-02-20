const Message = () => {
  return (
    <div className="chat chat-end  ">
      <div className="chat-image avatar ">
        <div className="w-10 h-10 rounded-full">
          <img
            className="w-10"
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500 text-white">
        Hey how are you
      </div>
      <div className={`chat-footer text-xs opacity-50 flex gap-1 items-center`}>
        fine
      </div>
    </div>
  );
};
export default Message;