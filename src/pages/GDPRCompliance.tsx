import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

import { SEO } from '@/components/SEO';

const GDPRCompliance = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="GDPR / UK GDPR Privacy Policy"
                description="Read GrowCheq's GDPR and UK GDPR Privacy Policy to understand how we collect, use, and protect your personal information."
                canonical="https://growcheq.com/gdpr-compliance"
            />
            <Navigation />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">GrowCheq GDPR / UK GDPR Privacy Policy</h1>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">Last updated: 12/12/2025</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Who we are</h2>
                    <p className="mb-4">GrowCheq Ltd ("GrowCheq", "we", "us", "our") provides a cloud‑based customer engagement platform to business customers via www.growcheq.com. We act as:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>a controller in respect of personal data relating to our own customers, prospects, suppliers, website visitors and Platform users; and</li>
                        <li>a processor when processing personal data on behalf of our business customers through the Platform.</li>
                    </ul>
                    <p className="mb-4">This Privacy Policy explains how we handle personal data as controller. For processing carried out as processor, please see the Data Processing Addendum in our Terms and Conditions.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Contact details</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy or about how we use personal data, you can contact us at:</p>
                    <p className="mb-4">Email: <a href="mailto:privacy@growcheq.com" className="text-blue-600 hover:text-blue-800">privacy@growcheq.com</a></p>
                    <p className="mb-4">Postal address: [insert address]</p>
                    <p className="mb-4">You have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) or with your local supervisory authority in the EEA, if applicable.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Personal data we collect</h2>
                    <p className="mb-4">We collect and process the following categories of personal data when acting as controller:</p>
                    <p className="mb-4"><strong>Account and contact data:</strong> name, job title, business contact details, login credentials and related information.</p>
                    <p className="mb-4"><strong>Commercial data:</strong> information about your subscriptions, orders, billing details and communications with us.</p>
                    <p className="mb-4"><strong>Usage and technical data:</strong> IP address, browser type, device identifiers, pages viewed, time spent on the Website or Platform, and similar analytics data, collected via cookies and similar technologies.</p>
                    <p className="mb-4"><strong>Marketing preferences:</strong> records of your consent and preferences for receiving marketing communications.</p>
                    <p className="mb-4">We may also receive personal data indirectly from our business customers where they invite you to use the Platform; in those cases, our customer is usually the controller and this Policy applies only to our own use of that data as controller.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. How we collect personal data</h2>
                    <p className="mb-4">We collect personal data:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>directly from you, when you complete forms on the Website, sign up for a trial, subscribe to the Platform, contact us, or interact with us by email or phone;</li>
                        <li>from your employer or organisation, where they set you up as a user of the Platform; and</li>
                        <li>automatically through cookies and similar technologies when you browse the Website or use the Platform.</li>
                    </ul>
                    <p className="mb-4">Details of our use of cookies are set out in section 11 below.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Purposes and lawful bases for processing</h2>
                    <p className="mb-4">We process personal data for the following purposes and under the following lawful bases under the UK GDPR/EU GDPR:</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">To provide and administer the Platform and our services</h3>
                    <p className="mb-4"><strong>Data:</strong> account and contact data, commercial data, usage and technical data.</p>
                    <p className="mb-4"><strong>Legal basis:</strong> performance of a contract with you (or taking steps at your request before entering into a contract) and our legitimate interests in operating our business and providing services to your organisation.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">To manage our relationship with you</h3>
                    <p className="mb-4">(including responding to enquiries, providing support and handling complaints)</p>
                    <p className="mb-4"><strong>Legal basis:</strong> performance of a contract and our legitimate interests in maintaining customer relationships.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">To send service and operational communications</h3>
                    <p className="mb-4">(for example, security alerts, changes to terms, system notifications)</p>
                    <p className="mb-4"><strong>Legal basis:</strong> performance of a contract and compliance with legal obligations.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">To send marketing communications</h3>
                    <p className="mb-4">about GrowCheq products and services to business contacts</p>
                    <p className="mb-4"><strong>Legal basis:</strong> our legitimate interests in promoting our services, or consent where required under local e‑privacy laws (for example, where sending direct electronic marketing to certain individuals). You can opt out at any time using the unsubscribe link in emails or by contacting us.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">To improve and develop our Website and Platform</h3>
                    <p className="mb-4">(including analytics, troubleshooting and testing)</p>
                    <p className="mb-4"><strong>Legal basis:</strong> our legitimate interests in improving our services, provided that such interests are not overridden by your rights and freedoms.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">To comply with legal and regulatory obligations</h3>
                    <p className="mb-4">(including record keeping, tax, anti‑fraud and responding to lawful requests from authorities)</p>
                    <p className="mb-4"><strong>Legal basis:</strong> compliance with legal obligations and our legitimate interests in protecting our business.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Sharing personal data</h2>
                    <p className="mb-4">We share personal data with:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Service providers and Underlying Platform Provider(s) who supply hosting, core platform functionality, customer support tools, analytics, email delivery and other IT services;</li>
                        <li>Professional advisers such as lawyers, accountants and insurers;</li>
                        <li>Payment providers and banks, where necessary for processing payments and refunds;</li>
                        <li>Authorities, regulators or law enforcement, where we are legally obliged to do so; and</li>
                        <li>Actual or potential buyers or investors and their advisers, in connection with a corporate transaction.</li>
                    </ul>
                    <p className="mb-4">Where we rely on Underlying Platform Provider(s) and other IT suppliers to host or process personal data for us, they act as our processors and are only permitted to process personal data in line with our documented instructions and this Privacy Policy.</p>
                    <p className="mb-4">Where service providers process personal data on our behalf, they do so under written contracts that require them to protect personal data in line with Data Protection Law.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. International transfers</h2>
                    <p className="mb-4">Some of our service providers and Underlying Platform Provider(s) are located outside the UK and EEA or store data in other jurisdictions. Where this involves transferring personal data to a country that is not subject to an adequacy regulation, we implement appropriate safeguards, such as the UK Addendum to the EU Standard Contractual Clauses or other approved transfer mechanisms, together with additional technical and organisational measures where appropriate.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data retention</h2>
                    <p className="mb-4">We keep personal data only for as long as necessary for the purposes described in this Policy or as required by law. In general:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>account and contact data are kept for the duration of your relationship with us and for a reasonable period afterwards (usually up to six years) to manage queries and legal claims;</li>
                        <li>usage data and analytics are kept for shorter periods, typically up to two years, unless needed longer in an aggregated or anonymised form; and</li>
                        <li>marketing data is kept until you opt out or until we consider it no longer accurate, after which it may be suppressed rather than deleted to respect your preference not to be contacted.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Your data protection rights</h2>
                    <p className="mb-4">Subject to certain conditions and exceptions under Data Protection Law, you have the following rights in relation to personal data we hold as controller:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>right of access to your personal data;</li>
                        <li>right to rectification of inaccurate or incomplete data;</li>
                        <li>right to erasure in certain circumstances;</li>
                        <li>right to restriction of processing;</li>
                        <li>right to object to processing based on our legitimate interests or for direct marketing;</li>
                        <li>right to data portability, where processing is based on consent or contract and carried out by automated means; and</li>
                        <li>right to withdraw consent at any time, where processing is based on consent.</li>
                    </ul>
                    <p className="mb-4">To exercise any of these rights, please contact us using the details in section 2. We may need to verify your identity before acting on your request.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Security</h2>
                    <p className="mb-4">We implement appropriate technical and organisational measures to protect personal data against unauthorised access, accidental loss, destruction or damage, taking into account the nature of the data and the risks involved. These measures include access controls, encryption in transit where appropriate, user authentication and internal policies and training. However, no system can be completely secure and you are responsible for maintaining the confidentiality of your login credentials.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Cookies and similar technologies</h2>
                    <p className="mb-4">11.1 The Website and Platform use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>enable core functionality (for example, login and session management);</li>
                        <li>improve performance and user experience; and</li>
                        <li>provide analytics on how the Website and Platform are used.</li>
                    </ul>
                    <p className="mb-4">11.2 Where required by law, we will seek your consent for non‑essential cookies via a cookie banner or preference tool. You can withdraw consent or change your preferences at any time.</p>
                    <p className="mb-4">11.3 You can also disable cookies through your browser settings, although this may affect the functionality of the Website or Platform. Further details about the cookies used and retention periods are provided in our <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800">Cookie Policy</a>.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Processing as processor on behalf of customers</h2>
                    <p className="mb-4">When we process personal data strictly on behalf of a business customer via the Platform, that customer is the controller and is responsible for providing appropriate privacy information to data subjects and for determining the lawful basis for processing. Our role as processor is governed by the Data Processing Addendum in our Terms and Conditions and by the customer's configuration and instructions.</p>
                    <p className="mb-4">If you believe your personal data is being processed through the Platform by one of our customers, you should in the first instance contact that organisation. We will assist our customer as necessary in responding to any rights requests, in accordance with our contractual obligations.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Children</h2>
                    <p className="mb-4">The Website and Platform are not intended for use by children and we do not knowingly collect personal data relating to children as controller. If you believe we have collected such data, please contact us so that it can be deleted where appropriate.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Changes to this Privacy Policy</h2>
                    <p className="mb-4">We may update this Privacy Policy from time to time, for example to reflect changes in law, guidance or our services. The latest version will always be available on our Website and will state the date on which it was last updated. Where changes are material, we will take reasonable steps to inform you.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GDPRCompliance;
