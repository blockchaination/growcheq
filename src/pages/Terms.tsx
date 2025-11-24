import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing and using GrowCheq ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
                    <p className="mb-4">
                        GrowCheq provides a customer engagement platform for businesses, including CRM, email marketing, SMS, and related tools. We reserve the right to modify or discontinue the Service at any time.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Account Terms</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You must be 18 years or older to use this Service.</li>
                        <li>You must provide accurate and complete information during registration.</li>
                        <li>You are responsible for maintaining the security of your account and password.</li>
                        <li>You are responsible for all content posted and activity that occurs under your account.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment and Subscription</h2>
                    <p className="mb-4">
                        The Service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (monthly or annually). All payments are non-refundable unless otherwise required by law.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cancellation and Termination</h2>
                    <p className="mb-4">
                        You are solely responsible for properly canceling your account. You can cancel your account at any time through your account settings. All of your content will be immediately inaccessible from the Service upon cancellation.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="mb-4">
                        In no event shall GrowCheq, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
                    <p className="mb-4">
                        These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us at:
                        <br />
                        Email: <a href="mailto:hello@growcheq.com" className="text-blue-600 hover:text-blue-800">hello@growcheq.com</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
