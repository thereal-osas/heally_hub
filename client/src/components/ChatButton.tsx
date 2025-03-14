import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1C75BD] hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-14 h-14"
      >
        <BsChatLeftText size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Chat with us!</h2>
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Messages Section */}
          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-sm text-gray-500">How can I help you today?</p>
          </div>

          {/* Input Field */}
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
