import { CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const KeyToEngagementSection = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Text */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4 font-heading">
                            <span className="bg-gradient-to-r from-[#2f196d] to-[#4865b7] bg-clip-text text-transparent">
                                One Platform.
                            </span>{" "}
                            Every Tool You Need.
                        </h2>

                        <p className="text-xl text-gray-600 mb-8">
                            Stop juggling 10+ expensive tools. GrowCheq is the key to unlocking
                            seamless customer engagement.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                                <span className="text-gray-700">Replace £800+/month in separate tools</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                                <span className="text-gray-700">Manage everything from one unified inbox</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                                <span className="text-gray-700">Save 5+ hours per week on admin tasks</span>
                            </div>
                        </div>

                        <Link
                            to="/features"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2f196d] to-[#4865b7] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
                        >
                            See How It Works
                            <ChevronRight size={20} />
                        </Link>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative animate-fade-in-right">
                        <img
                            src="/images/growcheq-key-checkmark.png"
                            alt="GrowCheq - The key to customer engagement"
                            className="w-full max-w-md mx-auto drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
