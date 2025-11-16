import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AUTOMATED_RESPONSES: Record<string, string> = {
  hello: "Hi there! 👋 I'm the GrowCheq assistant. How can I help you today?",
  pricing: "Our pricing starts at £79/month for the Essential plan. Would you like to schedule a demo to see which plan is right for you?",
  demo: "I'd love to schedule a demo for you! Please scroll down to our demo booking section, or click here to get started.",
  features: "GrowCheq offers WhatsApp automation, lead management, workflow automation, and much more. What specific feature are you interested in?",
  help: "I'm here to help! You can ask me about pricing, features, scheduling a demo, or anything else about GrowCheq.",
  default: "That's a great question! Our team can provide detailed information. Would you like to schedule a quick call or should I connect you with our sales team?",
};

const QUICK_QUESTIONS = [
  "What are your pricing plans?",
  "How does it work?",
  "Schedule a demo",
  "What features do you offer?",
];

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 Welcome to GrowCheq. I'm here to answer your questions and help you get started. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize conversation in database when chat is opened
  useEffect(() => {
    const initConversation = async () => {
      if (isOpen && !conversationId) {
        try {
          const { data, error } = await supabase
            .from('chat_conversations')
            .insert({
              session_id: sessionId,
              status: 'active'
            })
            .select()
            .single();

          if (error) {
            console.error('Error creating conversation:', error);
            return;
          }

          setConversationId(data.id);

          // Save initial bot message
          await supabase.from('chat_messages').insert({
            conversation_id: data.id,
            sender: 'bot',
            message: messages[0].text
          });
        } catch (error) {
          console.error('Error initializing conversation:', error);
        }
      }
    };

    initConversation();
  }, [isOpen, conversationId, sessionId, messages]);

  const getAutomatedResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return AUTOMATED_RESPONSES.hello;
    }
    if (lowerMessage.includes("pricing") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return AUTOMATED_RESPONSES.pricing;
    }
    if (lowerMessage.includes("demo") || lowerMessage.includes("schedule") || lowerMessage.includes("book")) {
      return AUTOMATED_RESPONSES.demo;
    }
    if (lowerMessage.includes("feature") || lowerMessage.includes("what") || lowerMessage.includes("how")) {
      return AUTOMATED_RESPONSES.features;
    }
    if (lowerMessage.includes("help")) {
      return AUTOMATED_RESPONSES.help;
    }
    
    return AUTOMATED_RESPONSES.default;
  };

  const assessLeadQuality = (messageText: string): string | null => {
    const lowerMessage = messageText.toLowerCase();
    
    // Hot leads - ready to buy/demo
    if (lowerMessage.includes("demo") || lowerMessage.includes("schedule") || 
        lowerMessage.includes("buy") || lowerMessage.includes("purchase") ||
        lowerMessage.includes("pricing") || lowerMessage.includes("price")) {
      return "hot";
    }
    
    // Warm leads - interested and asking questions
    if (lowerMessage.includes("how") || lowerMessage.includes("feature") || 
        lowerMessage.includes("integration") || lowerMessage.includes("work")) {
      return "warm";
    }
    
    // Cold leads - just browsing
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "cold";
    }
    
    return null;
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText || !conversationId) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Save user message to database
    try {
      await supabase.from('chat_messages').insert({
        conversation_id: conversationId,
        sender: 'user',
        message: messageText
      });

      // Assess and update lead quality
      const leadQuality = assessLeadQuality(messageText);
      if (leadQuality) {
        await supabase
          .from('chat_conversations')
          .update({ lead_quality: leadQuality })
          .eq('id', conversationId);

        // Send email notification for hot and warm leads
        if (leadQuality === 'hot' || leadQuality === 'warm') {
          try {
            await supabase.functions.invoke('send-chat-notification', {
              body: {
                session_id: sessionId,
                message: messageText,
                lead_quality: leadQuality,
              }
            });
          } catch (emailError) {
            console.error('Error sending chat notification:', emailError);
          }
        }
      }
    } catch (error) {
      console.error('Error saving user message:', error);
    }

    // Show typing indicator
    setIsTyping(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Add bot response
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getAutomatedResponse(messageText),
      sender: "bot",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, botResponse]);

    // Save bot response to database
    try {
      await supabase.from('chat_messages').insert({
        conversation_id: conversationId,
        sender: 'bot',
        message: botResponse.text
      });
    } catch (error) {
      console.error('Error saving bot message:', error);
    }

    setIsTyping(false);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50 gradient-primary hover:scale-110 transition-all duration-300",
          isOpen && "scale-95"
        )}
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[380px] h-[600px] shadow-2xl z-50 flex flex-col animate-scale-in border-2 border-primary/20">
          <CardHeader className="gradient-primary text-primary-foreground rounded-t-lg pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">GrowCheq Assistant</CardTitle>
                  <div className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2 animate-fade-in",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.sender === "bot" && (
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2.5 max-w-[75%]",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    {message.sender === "user" && (
                      <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-2 animate-fade-in">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-2.5">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 space-y-2">
                <p className="text-xs text-muted-foreground font-medium">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_QUESTIONS.map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs h-auto py-2"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="gradient-primary flex-shrink-0"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Powered by GrowCheq AI
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
