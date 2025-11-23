import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    // Initial welcome message
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    id: "welcome",
                    role: "assistant",
                    content: "👋 Hi! Welcome to GrowCheq. I'm here to answer your questions about our all-in-one platform. How can I help you today?",
                    timestamp: new Date(),
                },
            ]);
        }
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }
        }
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();

        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue.trim(),
            timestamp: new Date(),
        };
        id: Date.now().toString(),
            role: "assistant",
                content: "I'm having trouble connecting right now. Please try again or email us at hello@growcheq.com",
                    timestamp: new Date(),
            }]);
} finally {
    setIsTyping(false);
}
    };

return (
    <>
        {/* Chat Bubble (Closed State) */}
        {!isOpen && (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-gradient-to-r from-[#2f196d] to-[#4865b7] hover:scale-105 transition-transform duration-300 z-50 p-0"
            >
                <MessageCircle className="h-7 w-7 text-white" />
            </Button>
        )}

        {/* Chat Window (Open State) */}
        {isOpen && (
            <Card className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] shadow-2xl flex flex-col overflow-hidden z-50 border-0 animate-scale-in">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#2f196d] to-[#4865b7] p-4 flex items-center justify-between text-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-full">
                            <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm md:text-base">GrowCheq Assistant</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-xs text-white/80">Online</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:bg-white/20 rounded-full h-8 w-8"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Messages Area */}
                <ScrollArea ref={scrollAreaRef} className="flex-1 bg-gray-50 p-4">
                    <div className="space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${msg.role === "user"
                                        ? "bg-gradient-to-r from-[#2f196d] to-[#4865b7] text-white rounded-br-none"
                                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                                        }`}
                                >
                                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                                    <span className={`text-[10px] mt-1 block ${msg.role === "user" ? "text-white/70" : "text-gray-400"}`}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 bg-gray-50 border-gray-200 focus-visible:ring-[#2f196d]"
                            disabled={isTyping}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            disabled={!inputValue.trim() || isTyping}
                            className="bg-gradient-to-r from-[#2f196d] to-[#4865b7] hover:opacity-90 transition-opacity"
                        >
                            {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        </Button>
                    </form>
                </div>
            </Card>
        )}
    </>
);
};
