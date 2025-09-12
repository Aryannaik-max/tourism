import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [messages, setMessages] = useState([
 { sender: "bot", text: "👋 Welcome to Jharkhand Tourism!\nHow can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    const userQuery = input;
    const botText = `You asked about: ${userQuery}. Here’s some info about Jharkhand tourism 🚀`;
    
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: botText
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-green-100"
    >
      
      <div className="w-full max-w-md h-[80vh] backdrop-blur-lg bg-blue-50 border border-red-100 shadow-2xl rounded-2xl flex flex-col overflow-hidden">   

<div className="p-4 bg-green-700/90 text-white rounded-t-2xl font-bold text-lg shadow flex items-center gap-2">
 🌄 Jharkhand Tourism
</div>

   
 <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-green-600">
{messages.map((msg, idx) => (
<motion.div
 key={idx}
              initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-end ${
               msg.sender === "user" ? "justify-end" : "justify-start"
}`}
>
 {msg.sender === "bot" && <div className="mr-2 text-2xl">🤖</div>} 
 <div
         className={`p-3 rounded-2xl max-w-xs shadow-md ${
 msg.sender === "user"
             ? "bg-blue-600 text-white"
            : "bg-white/70 text-black"
}`}
>
 {msg.text}
         </div>
  {msg.sender === "user" && <div className="ml-2 text-2xl">🧑‍💻</div>}
</motion.div>
))}

     {isTyping && (
           <div className="flex items-center space-x-2 ml-2 text-gray-600">
           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
           <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
           </div>
         )}
          <div ref={messagesEndRef} />
</div>

<div className="flex p-3 border-t border-white/30 bg-white/40 backdrop-blur-md">
          <input
             type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
             className="flex-1 border rounded-xl p-2 focus:outline-none bg-white/70"
             placeholder="Ask about Jharkhand tourism..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isTyping}
        />
        <button
             onClick={handleSend}
             className="ml-2 bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition"
            disabled={isTyping}
   >
     Send
</button>
</div>
</div>
</div>
 );
}
