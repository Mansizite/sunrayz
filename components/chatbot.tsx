"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Phone, User, Bot } from "lucide-react"

const chatResponses = {
  greeting: "Hello! I'm here to help you with any questions about SunRayz Technology. How can I assist you today?",
  services:
    "We offer comprehensive educational technology solutions including School ERP Systems, Mobile Applications, Web Development, RFID Solutions, Cloud Services, and AI Integration. Which service interests you most?",
  pricing:
    "Our pricing varies based on your specific needs. For detailed pricing information, please call us at +1 (555) 123-4567 or fill out our contact form for a customized quote.",
  support:
    "We provide 24/7 technical support for all our clients. You can reach our support team at +1 (555) 987-6543 or email support@sunrayztech.com",
  demo: "We'd be happy to show you a demo of our solutions! Please call +1 (555) 123-4567 to schedule a personalized demonstration.",
  contact: "You can reach us at:\n📞 Sales: +1 (555) 123-4567\n📞 Support: +1 (555) 987-6543\n📧 info@sunrayztech.com",
  default:
    "I'd be happy to help you with that! For detailed information and personalized assistance, please call our team at +1 (555) 123-4567. Our experts are available to answer all your questions.",
}

const quickQuestions = [
  { id: "services", text: "What services do you offer?", response: "services" },
  { id: "pricing", text: "What are your pricing plans?", response: "pricing" },
  { id: "demo", text: "Can I see a demo?", response: "demo" },
  { id: "support", text: "How can I get support?", response: "support" },
  { id: "contact", text: "Contact information", response: "contact" },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: chatResponses.greeting, sender: "bot", timestamp: new Date() },
  ])
  const [inputText, setInputText] = useState("")
  const [showQuickQuestions, setShowQuickQuestions] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateTyping = (callback: () => void) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, 1500)
  }

  const handleQuickQuestion = (responseKey: string) => {
    const question = quickQuestions.find((q) => q.response === responseKey)
    if (question) {
      setShowQuickQuestions(false)

      const userMessage = {
        id: messages.length + 1,
        text: question.text,
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])

      simulateTyping(() => {
        const botMessage = {
          id: messages.length + 2,
          text: chatResponses[responseKey as keyof typeof chatResponses],
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      })
    }
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    setShowQuickQuestions(false)

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")

    simulateTyping(() => {
      const botMessage = {
        id: messages.length + 2,
        text: chatResponses.default,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gray-900 hover:bg-gray-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-96">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Simple Header with BRIGHT Visible Text */}
            <div className="bg-gray-900 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-bold text-green-400 text-xl">🤖 I am here to help You</h3>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="flex items-start space-x-2 max-w-xs">
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-sm ${
                        message.sender === "user"
                          ? "bg-gray-900 text-white rounded-br-md"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-xs">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-md p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {showQuickQuestions && (
              <div className="p-4 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-3">Quick questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.slice(0, 3).map((question) => (
                    <Button
                      key={question.id}
                      onClick={() => handleQuickQuestion(question.response)}
                      variant="outline"
                      size="sm"
                      className="text-xs justify-start bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                    >
                      {question.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-xs text-gray-700">
                  <Phone className="h-3 w-3" />
                  <span>Need immediate help? Call +1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
