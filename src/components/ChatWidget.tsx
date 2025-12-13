import { useState } from "react";
import { X, Send, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    // Real "Sarah" placeholder image - professional headshot
    const AVATAR_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop";

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setIsMinimized(false);
    };

    const handleMinimize = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMinimized(true);
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Expanded Chat Window */}
            {isOpen && (
                <div className="w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden mb-4 animate-fade-up">
                    {/* Header */}
                    <div className="p-4 border-b border-border/50 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img src={AVATAR_URL} alt="Sarah" className="w-10 h-10 rounded-full object-cover border border-border" />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-foreground">Sarah</span>
                                <span className="text-xs text-muted-foreground">GrowCheq Support</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={handleMinimize} className="p-1 hover:bg-secondary rounded-full text-muted-foreground">
                                <Minus className="w-4 h-4" />
                            </button>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-secondary rounded-full text-muted-foreground">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 p-4 bg-white overflow-y-auto space-y-4">
                        {/* Support Message */}
                        <div className="flex items-start gap-2">
                            <img src={AVATAR_URL} alt="Sarah" className="w-8 h-8 rounded-full object-cover mt-1" />
                            <div className="flex flex-col gap-1 items-start">
                                <div className="bg-secondary px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-foreground">
                                    👋 Hi there! I'm Sarah from GrowCheq. How can I help you today?
                                </div>
                                <span className="text-[10px] text-muted-foreground pl-1">Just now</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Replies */}
                    <div className="p-4 bg-white border-t border-border/30">
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            <button className="text-xs font-medium px-3 py-2 border border-border rounded-lg bg-white hover:border-primary hover:text-primary transition-colors text-center">
                                View Pricing
                            </button>
                            <button className="text-xs font-medium px-3 py-2 border border-border rounded-lg bg-white hover:border-primary hover:text-primary transition-colors text-center">
                                Book a Demo
                            </button>
                            <button className="text-xs font-medium px-3 py-2 border border-border rounded-lg bg-white hover:border-primary hover:text-primary transition-colors text-center">
                                Ask Question
                            </button>
                            <button className="text-xs font-medium px-3 py-2 border border-border rounded-lg bg-white hover:border-primary hover:text-primary transition-colors text-center">
                                Contact Sales
                            </button>
                        </div>

                        {/* Input Area */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="w-full bg-secondary/50 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/20"
                            />
                            <button className="absolute right-1 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-muted-foreground/60 mt-2">Powered by GrowCheq</p>
                    </div>
                </div>
            )}

            {/* Minimized Trigger */}
            {!isOpen && (
                <button
                    onClick={toggleOpen}
                    className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                    <div className="relative">
                        <img src={AVATAR_URL} alt="Sarah" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-bold text-foreground">Hi there, have a question?</span>
                        <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Text us here.</span>
                    </div>
                </button>
            )}
        </div>
    );
};
