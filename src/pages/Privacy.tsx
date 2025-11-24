import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        GrowCheq ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website growcheq.com and use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Company information</li>
                        <li>Payment information (processed securely by our payment providers)</li>
                        <li>Communications you send to us</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send you technical notices, updates, security alerts, and support messages</li>
                        <li>Respond to your comments, questions, and requests</li>
                        <li>Communicate with you about products, services, offers, and events</li>
                    </ul>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        Email: <a href="mailto:hello@growcheq.com" className="text-blue-600 hover:text-blue-800">hello@growcheq.com</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Privacy;
