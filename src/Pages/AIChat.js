import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiSearch, FiUser, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AIChat = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Frequently asked questions
  const frequentlyAskedQuestions = [
    "What are the requirements for student visa in Australia?",
    "How much does it cost to study in Australia?",
    "What is the IELTS score required for Australian universities?",
    "How long does it take to process a student visa?",
    "What are the best universities in Australia for international students?",
    "Can I work while studying in Australia?",
    "What is the difference between PR and citizenship in Australia?",
    "How do I apply for permanent residency in Australia?",
    "What courses are available for international students?",
    "What documents do I need for visa application?",
  ];

  useEffect(() => {
    document.title = "AI Chat - Kothar Education";

    // Load messages from localStorage if coming from floating button
    const savedMessages = localStorage.getItem("aiChatMessages");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.map((msg) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(messagesWithDates);
        // Clear localStorage after loading
        localStorage.removeItem("aiChatMessages");
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuestionClick = (question) => {
    setSearchQuery(question);
    // Auto-submit the question
    handleSearchSubmit(question);
  };

  const handleSearchSubmit = async (queryText = null) => {
    const query = queryText || searchQuery.trim();
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
    console.log(process.env.REACT_APP_AI_BACKEND_URL);
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

  const handleSearch = async (e) => {
    e.preventDefault();
    handleSearchSubmit();
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-2 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-3">
            <div className="bg-gradient-to-r from-primary to-second text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FiMessageCircle className="text-3xl" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-1">Ask Our AI</h1>
                  <p className="text-white/80">
                    Get instant answers about study abroad, visas, and more
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ height: "calc(100vh - 280px)", minHeight: "600px" }}
          >
            {/* Messages Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-6 overflow-y-auto bg-gray-50"
            >
              <div className="space-y-4 mx-auto">
                {/* Welcome Message - Only show when no messages */}
                {messages.length === 0 && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-second rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMessageCircle className="text-white text-lg" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <p className="text-base text-gray-700 mb-3">
                        👋 Hi! I'm your Kothar AI. Ask me anything about:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Study abroad programs and destinations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>
                            Visa requirements and application processes
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>University and college information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Services, courses, and programs we offer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Application procedures and deadlines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Frequently Asked Questions - Only show when no messages */}
                {messages.length === 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3 px-2">
                      💡 Frequently Asked Questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {frequentlyAskedQuestions.map((question, index) => (
                        <button
                          key={question}
                          onClick={() => handleQuestionClick(question)}
                          disabled={isLoading}
                          className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-left"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conversation History */}
                {messages.map((message) => (
                  <div
                    key={message?.timestamp}
                    className={`flex items-start gap-4 ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "user"
                          ? "bg-primary"
                          : "bg-gradient-to-r from-primary to-second"
                      }`}
                    >
                      {message.type === "user" ? (
                        <FiUser className="text-white text-lg" />
                      ) : (
                        <FiMessageCircle className="text-white text-lg" />
                      )}
                    </div>

                    {/* Message Content */}
                    <div
                      className={`rounded-lg p-4 shadow-sm max-w-[75%] ${
                        message.type === "user"
                          ? "bg-primary text-white"
                          : message.isError
                          ? "bg-red-50 border border-red-200"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      {message.type === "user" ? (
                        <p className="text-base text-white whitespace-pre-wrap">
                          {message.content}
                        </p>
                      ) : (
                        <div
                          className={`text-base prose prose-base max-w-none ${
                            message.isError ? "prose-red" : "prose-gray"
                          } ${
                            message.isError ? "text-red-700" : "text-gray-700"
                          }`}
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              // Customize markdown elements
                              p: ({ children }) => (
                                <p className="mb-3 last:mb-0">{children}</p>
                              ),
                              strong: ({ children }) => (
                                <strong className="font-bold">
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em className="italic">{children}</em>
                              ),
                              ul: ({ children }) => (
                                <ul className="list-disc list-inside mb-3 space-y-2">
                                  {children}
                                </ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="list-decimal list-inside mb-3 space-y-2">
                                  {children}
                                </ol>
                              ),
                              li: ({ children }) => (
                                <li className="ml-2">{children}</li>
                              ),
                              code: ({ children }) => (
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                  {children}
                                </code>
                              ),
                              blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-primary pl-4 italic my-3">
                                  {children}
                                </blockquote>
                              ),
                              h1: ({ children }) => (
                                <h1 className="text-2xl font-bold mb-3">
                                  {children}
                                </h1>
                              ),
                              h2: ({ children }) => (
                                <h2 className="text-xl font-bold mb-2">
                                  {children}
                                </h2>
                              ),
                              h3: ({ children }) => (
                                <h3 className="text-lg font-bold mb-2">
                                  {children}
                                </h3>
                              ),
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      )}
                      <p
                        className={`text-xs mt-3 ${
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
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-second rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMessageCircle className="text-white text-lg" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center gap-3">
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
                        <span className="text-sm text-gray-500">
                          AI is thinking...
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Search Input */}
            <div className="p-6 bg-white border-t border-gray-200">
              {/* Quick Questions - Show when there are messages */}
              {messages.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">
                    Quick Questions:
                  </p>
                  <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                    {frequentlyAskedQuestions
                      .slice(0, 5)
                      .map((question, index) => (
                        <button
                          key={question}
                          onClick={() => handleQuestionClick(question)}
                          disabled={isLoading}
                          className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {question.length > 40
                            ? `${question.substring(0, 40)}...`
                            : question}
                        </button>
                      ))}
                  </div>
                </div>
              )}
              <form onSubmit={handleSearch} className="flex gap-3 mx-auto">
                <div className="flex-1 relative">
                  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    id="ai-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ask me anything about study abroad, visas, universities..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  disabled={!searchQuery.trim() || isLoading}
                  className="bg-gradient-to-r from-primary to-second text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  Ask
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3 text-center max-w-3xl mx-auto">
                Powered by AI • Search across all our content • Your
                conversation is private
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIChat;

