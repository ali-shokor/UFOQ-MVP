import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import "./ChatbotWidget.css";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hello! Welcome to IMKAN Academy. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickActions = [
    "What courses are available?",
    "How to enroll?",
    "Pricing information",
    "Contact support",
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        role: "bot",
        text: "Thank you for your interest! Our support team will get back to you shortly. In the meantime, feel free to browse our programs.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">U</div>
                <div>
                  <h4>IMKAN Support</h4>
                  <span className="chatbot-status">
                    <span className="chatbot-status-dot" />
                    Online
                  </span>
                </div>
              </div>
              <button
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chatbot-message chatbot-message-${msg.role}`}
                >
                  <div className="chatbot-message-bubble">{msg.text}</div>
                </div>
              ))}
            </div>

            {messages.length <= 2 && (
              <div className="chatbot-quick-actions">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="chatbot-quick-btn"
                    onClick={() => handleSend(action)}
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <div className="chatbot-input-area">
              <input
                type="text"
                className="chatbot-input"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              />
              <button
                className="chatbot-send"
                onClick={() => handleSend(input)}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
}
