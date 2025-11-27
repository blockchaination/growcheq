import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

import { SEO } from '@/components/SEO';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Privacy Policy"
                description="Read GrowCheq's Privacy Policy to understand how we collect, use, and protect your personal information."
                canonical="https://growcheq.com/privacy"
            />
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

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Storage and Security</h2>
                    <p className="mb-4">
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. Your data is stored securely on servers located in the UK and EU.
                    </p>

                    <h2 id="gdpr" className="text-2xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-32">5. Your Rights (GDPR)</h2>
                    <p className="mb-4">
                        Under the UK General Data Protection Regulation (UK GDPR), you have the right to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Access your personal data</li>
                        <li>Correct errors in your personal data</li>
                        <li>Erase your personal data (right to be forgotten)</li>
                        <li>Object to processing of your personal data</li>
                        <li>Export your personal data</li>
                    </ul>

                    <h2 id="cookies" className="text-2xl font-semibold text-gray-900 mt-8 mb-4 scroll-mt-32">6. Cookies</h2>
                    <p className="mb-4">
                        We use cookies to improve your experience on our website. You can control cookies through your browser settings or our cookie consent banner.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        Email: <a href="mailto:hello@growcheq.com" className="text-blue-600 hover:text-blue-800">hello@growcheq.com</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
