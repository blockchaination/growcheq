import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProductShowcase = () => {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        The Operating System for <br /> <span className="text-primary">Local Business</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        From getting found online to getting paid, GrowCheq handles the entire customer journey in one place.
                    </p>
                </div>

                {/* Feature Block 1: Unified Inbox */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24 lg:mb-32">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                            Unified Inbox
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                            All your messages. <br /> One single place.
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Stop switching between apps. Determine exactly where your leads are coming from and respond to SMS, WhatsApp, Google Chat, and Facebook Messenger from a single dashboard.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Consolidate all communication channels
                            </li>
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Never miss a lead due to slow response
                            </li>
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Assign conversations to team members
                            </li>
                        </ul>
                        {/* <Button variant="link" className="text-primary font-semibold p-0 h-auto hover:no-underline group">
              Learn more about Inbox <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
                    </div>
                    <div className="flex-1 w-full bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-2xl relative">
                        {/* Mockup Placeholder */}
                        <div className="aspect-[4/3] bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center text-primary text-2xl">💬</div>
                                <p className="font-semibold text-gray-900">Unified Conversation View</p>
                                <p className="text-sm text-gray-500 mt-2">Messages from all channels appear here</p>
                            </div>
                            {/* Floating bubbles */}
                            <div className="absolute top-20 right-10 bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm text-xs shadow-lg max-w-[150px]">
                                Hi! Do you have any appointments available this week?
                            </div>
                            <div className="absolute top-40 left-10 bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-tl-sm text-xs shadow-md max-w-[150px]">
                                Yes, we have an opening at 2pm on Thursday. Would that work?
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Block 2: Reviews (Reversed) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600">
                            Reputation Management
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                            Get more 5-star reviews. <br /> Automatically.
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Send review requests via text automatically after a purchase or service. Make it easy for happy customers to spread the word and boost your local SEO ranking.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Double your monthly review volume
                            </li>
                            <li className="flex items-center gap-3 text-foreground font-medium">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</div>
                                Climb Google rankings automatically
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-2xl relative">
                        {/* Mockup Placeholder */}
                        <div className="aspect-[4/3] bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden">
                            <div className="text-center p-8 w-full max-w-sm">
                                <div className="flex justify-center gap-1 text-yellow-400 text-2xl mb-4">
                                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                </div>
                                <p className="font-bold text-gray-900 text-lg">"Best service in town!"</p>
                                <p className="text-gray-500 text-sm mt-2">- Sarah J., via Google</p>

                                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-4 text-left">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">G</div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">Google Review Request</p>
                                        <p className="text-[10px] text-gray-500">Sent automatically 2m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
