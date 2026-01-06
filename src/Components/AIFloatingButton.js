import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX, FiSearch, FiUser, FiMaximize2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AIFloatingButton = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus on search input when opening
      setTimeout(() => {
        const input = document.getElementById("ai-search-input");
        if (input) input.focus();
      }, 100);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // Add user message to history
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: query,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setSearchQuery("");
    setIsLoading(true);

    // Get AI backend URL from environment variable with fallback
    const aiBackendUrl =
      process.env.REACT_APP_AI_BACKEND_URL || "http://localhost:8000";

    try {
      // Call AI API
      const response = await axios.post(`${aiBackendUrl}/ai/generate-insight`, {
        query: query,
      });

      // Add AI response to history
      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content:
          response?.data?.insight ||
          "I'm sorry, I couldn't generate a response.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      // Add error message to history
      const errorMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 ease-out"
          style={{
            animation: "fadeInUp 0.3s ease-out",
          }}
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-second text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FiMessageCircle className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ask Our AI</h3>
                  <p className="text-xs text-white/80">Get instant answers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    // Save messages to localStorage before navigating
                    localStorage.setItem("aiChatMessages", JSON.stringify(messages));
                    navigate("/ai");
                  }}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                  aria-label="Open full page AI chat"
                  title="Open full page"
                >
                  <FiMaximize2 className="text-lg" />
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
                  aria-label="Close AI chat"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="h-96 flex flex-col">
              {/* Messages Area */}
              <div
                ref={chatContainerRef}
                className="flex-1 p-4 overflow-y-auto bg-gray-50"
              >
                <div className="space-y-4">
                  {/* Welcome Message - Only show when no messages */}
                  {messages.length === 0 && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-second rounded-full flex items-center justify-center flex-shrink-0">
                        <FiMessageCircle className="text-white text-sm" />
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                        <p className="text-sm text-gray-700 mb-2">
                          👋 Hi! I'm your AI assistant. Ask me anything about:
                        </p>
                        <ul className="mt-2 space-y-1 text-xs text-gray-600">
                          <li>• Study abroad programs</li>
                          <li>• Visa requirements</li>
                          <li>• University information</li>
                          <li>• Services and courses</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Conversation History */}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 ${
                        message.type === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "user"
                            ? "bg-primary"
                            : "bg-gradient-to-r from-primary to-second"
                        }`}
                      >
                        {message.type === "user" ? (
                          <FiUser className="text-white text-sm" />
                        ) : (
                          <FiMessageCircle className="text-white text-sm" />
                        )}
                      </div>

                      {/* Message Content */}
                      <div
                        className={`rounded-lg p-3 shadow-sm max-w-[80%] ${
                          message.type === "user"
                            ? "bg-primary text-white"
                            : message.isError
                            ? "bg-red-50 border border-red-200"
                            : "bg-white border border-gray-200"
                        }`}
                      >
                        {message.type === "user" ? (
                          <p className="text-sm text-white whitespace-pre-wrap">
                            {message.content}
                          </p>
                        ) : (
                          <div
                            className={`text-sm prose prose-sm max-w-none ${
                              message.isError
                                ? "prose-red"
                                : "prose-gray"
                            } ${
                              message.isError
                                ? "text-red-700"
                                : "text-gray-700"
                            }`}
                          >
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                // Customize markdown elements
                                p: ({ children }) => (
                                  <p className="mb-2 last:mb-0">{children}</p>
                                ),
                                strong: ({ children }) => (
                                  <strong className="font-bold">{children}</strong>
                                ),
                                em: ({ children }) => (
                                  <em className="italic">{children}</em>
                                ),
                                ul: ({ children }) => (
                                  <ul className="list-disc list-inside mb-2 space-y-1">
                                    {children}
                                  </ul>
                                ),
                                ol: ({ children }) => (
                                  <ol className="list-decimal list-inside mb-2 space-y-1">
                                    {children}
                                  </ol>
                                ),
                                li: ({ children }) => (
                                  <li className="ml-2">{children}</li>
                                ),
                                code: ({ children }) => (
                                  <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">
                                    {children}
                                  </code>
                                ),
                                blockquote: ({ children }) => (
                                  <blockquote className="border-l-4 border-primary pl-3 italic my-2">
                                    {children}
                                  </blockquote>
                                ),
                                h1: ({ children }) => (
                                  <h1 className="text-lg font-bold mb-2">{children}</h1>
                                ),
                                h2: ({ children }) => (
                                  <h2 className="text-base font-bold mb-2">{children}</h2>
                                ),
                                h3: ({ children }) => (
                                  <h3 className="text-sm font-bold mb-1">{children}</h3>
                                ),
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                        )}
                        <p
                          className={`text-xs mt-2 ${
                            message.type === "user"
                              ? "text-white/70"
                              : "text-gray-500"
                          }`}
                        >
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-second rounded-full flex items-center justify-center flex-shrink-0">
                        <FiMessageCircle className="text-white text-sm" />
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">AI is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Scroll anchor */}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Search Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="flex-1 relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="ai-search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ask me anything..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!searchQuery.trim()}
                    className="bg-gradient-to-r from-primary to-second text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Ask
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by AI • Search across all our content
                </p>
              </div>
            </div>
          </div>
        )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-r from-primary to-second hover:from-second hover:to-primary"
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group relative hover:scale-110 active:scale-95`}
        aria-label="Ask our AI"
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <>
            <FiMessageCircle className="text-2xl" />
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></span>
          </>
        )}
        {!isOpen && (
          <span className="absolute right-0 top-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default AIFloatingButton;

