import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

import { SEO } from '@/components/SEO';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Terms of Service"
                description="Read GrowCheq's Terms of Service to understand the rules and regulations for using our website and services."
                canonical="https://growcheq.com/terms"
            />
            <Navigation />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">GrowCheq Website and Platform Terms and Conditions</h1>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">Last updated: 12/12/2025</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. About us</h2>
                    <p className="mb-4">1.1 GrowCheq.com is operated by GrowCheq Ltd (“GrowCheq”, “we”, “us”, “our”), a company incorporated in [England and Wales] with company number [●] and registered office at [●].</p>
                    <p className="mb-4">1.2 These Terms and Conditions (“Terms”) govern:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>your use of the GrowCheq website at www.growcheq.com and any sub domains (the “Website”); and</li>
                        <li>your access to and use of the GrowCheq software as a service platform and related features, integrations and tools (the “Platform”).</li>
                    </ul>
                    <p className="mb-4">1.3 By using the Website, creating an account or accessing the Platform, you agree to be bound by these Terms. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you are authorised to bind that entity.</p>
                    <p className="mb-4">1.4 If you do not agree to these Terms, you must not use the Website or the Platform.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. The Platform and third party hosting</h2>
                    <p className="mb-4">2.1 GrowCheq provides a cloud based, white label customer engagement and business growth platform which enables businesses to capture and manage leads, automate communications, manage customer relationships and related workflows.</p>
                    <p className="mb-4">2.2 The Platform is delivered using underlying infrastructure and software provided by carefully selected third party service providers (the “Underlying Platform Provider(s)”). These third party providers supply hosting, core functionality and connectivity which we configure and brand as GrowCheq for your use.</p>
                    <p className="mb-4">2.3 You acknowledge and agree that:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>certain technical features, service levels and limitations are determined at the level of the Underlying Platform Provider(s);</li>
                        <li>we may change Underlying Platform Provider(s) or the configuration of such services from time to time, provided that this does not materially reduce the overall functionality of the Platform for you; and</li>
                        <li>interruptions, delays or defects that are attributable to the Underlying Platform Provider(s) or the wider internet are outside our direct control, and our obligations under these Terms are subject to that limitation.</li>
                    </ul>
                    <p className="mb-4">2.4 We use reasonable skill and care to select and supervise the Underlying Platform Provider(s) and to configure the Platform, but you accept that the Platform is dependent on such third party infrastructure and standard cloud computing risks apply.</p>
                    <p className="mb-4">2.5 To the extent permitted by law, we are not responsible for any unavailability or performance issues to the extent caused by the Underlying Platform Provider(s), the public internet, or your own systems; however, we will use reasonable efforts to liaise with the relevant providers and to minimise disruption where issues arise.</p>
                    <p className="mb-4">2.6 The underlying platform and certain third‑party tools may use cookies and similar technologies to provide their services to us and to you; these are covered in our <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800">Cookie Policy</a> and, where applicable, in the relevant third‑party terms and privacy notices.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Account registration and eligibility</h2>
                    <p className="mb-4">3.1 To use the Platform you must create an account and provide accurate, current and complete information. You must keep your login credentials confidential and not share them with any third party.</p>
                    <p className="mb-4">3.2 You are responsible for all activities carried out under your account and must notify us immediately if you suspect any unauthorised access or misuse.</p>
                    <p className="mb-4">3.3 You must be at least 18 years old and have the legal capacity to enter into a binding contract, or be properly authorised on behalf of a corporate customer.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Customer subscriptions, authorised users, term and renewal</h2>
                    <p className="mb-4">4.1 Access to the Platform is provided on a subscription basis, as set out in the order form, online checkout or separate subscription agreement entered into between you and us (the “Order”).</p>
                    <p className="mb-4">4.2 Only the number of users permitted in your Order may access the Platform. You must ensure that your authorised users comply with these Terms and you remain responsible for their use.</p>
                    <p className="mb-4">4.3 You must not resell, re license, frame or mirror the Platform except as expressly permitted in a separate written reseller or partner agreement with us.</p>
                    <p className="mb-4">4.4 Term and renewal: Your subscription starts on the start date set out in the Order and will continue for the initial subscription term specified in the Order, renewing automatically for successive periods equal to the initial term (or one year if not specified), unless either party gives the other written notice of non renewal at least 30 days before the end of the then current term.</p>
                    <p className="mb-4">4.5 Unless otherwise stated in the Order, you may cancel at the end of the then current term only. Any fees already paid are non refundable, except where required by law.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Acceptable use</h2>
                    <p className="mb-4">5.1 You must not, and must not allow any third party to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>use the Platform in any way that is unlawful, fraudulent, defamatory, misleading, discriminatory or otherwise harmful;</li>
                        <li>upload or transmit any material which is infringing, obscene, offensive, malicious or which contains viruses, malware or other harmful code;</li>
                        <li>attempt to gain unauthorised access to the Platform or any related systems or networks;</li>
                        <li>reverse engineer, decompile, disassemble or attempt to derive the source code of any part of the Platform, except to the limited extent permitted by applicable law;</li>
                        <li>interfere with or disrupt the integrity or performance of the Platform or the data contained in it; or</li>
                        <li>use the Platform for sending unsolicited or unauthorised electronic communications in breach of applicable laws (including PECR, UK GDPR and EU GDPR where relevant).</li>
                    </ul>
                    <p className="mb-4">5.2 We may suspend or restrict access to the Platform, without liability, if we reasonably believe that you or your users are in breach of this clause or otherwise pose a security or legal risk.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Compliance with laws and export controls</h2>
                    <p className="mb-4">6.1 Each party shall comply with all laws and regulations applicable to it in connection with these Terms and with its use or provision of the Platform.</p>
                    <p className="mb-4">6.2 You must not use the Platform in violation of any applicable trade, economic or financial sanctions laws and regulations, or in any country or with any person or entity that is the subject of such sanctions.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Customer data</h2>
                    <p className="mb-4">7.1 “Customer Data” means any data, content or information (including personal data) that you or your users upload to or generate within the Platform in the course of using the services.</p>
                    <p className="mb-4">7.2 You retain ownership of all rights in the Customer Data. You grant GrowCheq a non exclusive, worldwide, royalty free licence to host, store, transmit, display and otherwise process the Customer Data solely as necessary to provide the Platform and related support and to comply with our legal obligations.</p>
                    <p className="mb-4">7.3 You are solely responsible for the accuracy, quality, legality and appropriateness of Customer Data and for ensuring that you have all necessary rights, consents and notices in place to allow lawful transfer to and processing by GrowCheq and its Underlying Platform Provider(s).</p>
                    <p className="mb-4">7.4 We may generate aggregated and anonymised statistical data about use of the Platform and its performance. We may use such data for analytics, service improvement and business purposes, provided that it does not identify you or any data subject.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data protection, data processing and security</h2>
                    <p className="mb-4">8.1 For the purposes of applicable data protection laws, including the UK General Data Protection Regulation (“UK GDPR”), the EU General Data Protection Regulation (“EU GDPR”) where applicable, and the Data Protection Act 2018 (together, “Data Protection Law”), you will generally act as controller of any personal data contained in Customer Data, and GrowCheq will act as your processor when processing such data on your behalf.</p>
                    <p className="mb-4">8.2 The data processing terms set out in Schedule 1 (Data Processing Addendum) to these Terms form part of and are incorporated into these Terms whenever GrowCheq processes personal data on your behalf.</p>
                    <p className="mb-4">8.3 We implement appropriate technical and organisational measures to protect personal data against unauthorised or unlawful processing and against accidental loss, destruction or damage, taking into account the nature of the processing and the risks involved.</p>
                    <p className="mb-4">8.4 Details of how we process personal data as controller (for example, for our own account management, billing and marketing) are set out in our Privacy Policy, which you should read carefully alongside these Terms.</p>
                    <p className="mb-4">8.5 You acknowledge that we use cookies and similar technologies in connection with the Website and Platform. The types of cookies we use and how you can manage your preferences are described in our <a href="/cookie-policy" className="text-blue-600 hover:text-blue-800">Cookie Policy</a>, which forms part of these Terms by reference.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Service levels, availability and support</h2>
                    <p className="mb-4">9.1 We aim to provide a high level of availability for the Platform, but we do not guarantee that the Platform or any particular feature will be available at all times or error free.</p>
                    <p className="mb-4">9.2 From time to time, we may carry out scheduled or emergency maintenance, updates or improvements, which may temporarily affect availability. Where reasonably possible, we will schedule maintenance outside of peak business hours and provide prior notice.</p>
                    <p className="mb-4">9.3 You acknowledge that the Platform’s performance and availability may also be affected by the Underlying Platform Provider(s), internet connectivity, and your own systems and equipment, which are outside our direct control.</p>
                    <p className="mb-4">9.4 Support: We will provide remote support during normal UK business hours via email or in app messaging. Response times and any enhanced support options (if purchased) are described on our Website or in your Order from time to time.</p>
                    <p className="mb-4">9.5 You remain responsible for your own devices, networks, internet connection and any third party services that you choose to integrate with the Platform.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Trials and beta features</h2>
                    <p className="mb-4">10.1 We may offer free trials or beta features at our discretion. Such access is provided “as is” without any warranties or service levels and may be withdrawn at any time.</p>
                    <p className="mb-4">10.2 Trials and beta features should not be relied upon for production critical activities.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10A. AI and experimental features</h2>
                    <p className="mb-4">Certain features of the Platform may use artificial intelligence or machine‑learning models to provide recommendations, scoring or automation. These features are designed to assist you but do not replace your own judgement or obligations. You remain responsible for reviewing and verifying outputs before relying on them. To the extent permitted by law, we do not guarantee the accuracy, completeness or suitability of any AI‑generated content or recommendations.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Fees, payment, taxes and price changes</h2>
                    <p className="mb-4">11.1 You agree to pay the subscription fees and any other charges set out in your Order. Unless agreed otherwise, fees are payable in advance for each subscription period.</p>
                    <p className="mb-4">11.2 All fees are exclusive of VAT and other applicable taxes, which will be added at the prevailing rate.</p>
                    <p className="mb-4">11.3 If you fail to pay any amount due under these Terms by the due date, we may (without limiting our other rights) suspend or restrict access to the Platform until all overdue amounts are paid.</p>
                    <p className="mb-4">11.4 We may change subscription fees at renewal by giving you at least 30 days’ prior notice. If you do not agree to the revised fees, you may choose not to renew your subscription in accordance with the “Term and renewal” clause.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Intellectual property</h2>
                    <p className="mb-4">12.1 All intellectual property rights in and to the Platform, the Website, the GrowCheq brand, trade marks, logos, software, documentation and related materials are and shall remain the exclusive property of GrowCheq or its licensors.</p>
                    <p className="mb-4">12.2 You are granted a limited, non exclusive, non transferable, non sublicensable right to use the Platform for your internal business purposes during your subscription, subject to these Terms.</p>
                    <p className="mb-4">12.3 You must not remove or obscure any proprietary notices or trade marks on the Platform or the Website.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Third party services and integrations</h2>
                    <p className="mb-4">13.1 The Platform may enable you to connect with or use third party services (for example, email gateways, payment processors, messaging services, telephony services or CRM tools). These are provided by independent third parties under their own terms and privacy policies.</p>
                    <p className="mb-4">13.2 We are not responsible for, and do not endorse, any third party services or the way they handle your data. Your use of such services is at your own risk and you are responsible for ensuring that your use complies with applicable laws.</p>
                    <p className="mb-4">13.3 Any issues, disputes or losses arising from third party services are solely between you and the relevant third party provider.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Warranties and disclaimers</h2>
                    <p className="mb-4">14.1 We warrant that we shall provide the Platform with reasonable skill and care and substantially in accordance with these Terms and your Order.</p>
                    <p className="mb-4">14.2 Except as expressly set out in these Terms, the Platform and Website are provided on an “as is” and “as available” basis. All implied warranties, terms and conditions (including any implied terms relating to satisfactory quality, fitness for purpose and non infringement) are excluded to the fullest extent permitted by law.</p>
                    <p className="mb-4">14.3 We do not warrant that the Platform will be uninterrupted, secure or free from errors or defects, or that it will meet your specific requirements or achieve any particular results.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Limitation of liability</h2>
                    <p className="mb-4">15.1 Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or excluded by law.</p>
                    <p className="mb-4">15.2 Subject to clause 15.1, we shall not be liable for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>loss of profits, revenue or anticipated savings;</li>
                        <li>loss of data (except to the extent that we fail to implement reasonable technical and organisational measures);</li>
                        <li>loss of goodwill or reputation; or</li>
                        <li>any indirect, consequential or special loss or damage, in each case whether arising in contract, tort (including negligence) or otherwise, even if foreseeable.</li>
                    </ul>
                    <p className="mb-4">15.3 Subject to clause 15.1, our total aggregate liability to you arising out of or in connection with these Terms (whether in contract, tort (including negligence), breach of statutory duty or otherwise) shall not exceed the total fees paid by you to us in the twelve (12) months immediately preceding the event giving rise to the claim.</p>
                    <p className="mb-4">15.4 You acknowledge that the fees charged by GrowCheq reflect the allocation of risk under these Terms, including the limitation of liability and the reliance on Underlying Platform Provider(s).</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">16. Indemnity</h2>
                    <p className="mb-4">16.1 You shall indemnify and keep indemnified GrowCheq against all claims, losses, damages, costs and expenses arising out of or in connection with:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>your breach of these Terms;</li>
                        <li>your misuse of the Platform; or</li>
                        <li>any claim by a third party that the Customer Data infringes their rights or is otherwise unlawful.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">17. Suspension and termination</h2>
                    <p className="mb-4">17.1 We may suspend or terminate your access to the Platform immediately if:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>you materially breach these Terms and (where capable of remedy) fail to remedy the breach within 14 days of notice;</li>
                        <li>you fail to pay fees when due;</li>
                        <li>we reasonably believe that your use of the Platform poses a security, legal or reputational risk; or</li>
                        <li>we are required to do so by law or by an Underlying Platform Provider.</li>
                    </ul>
                    <p className="mb-4">17.2 You may terminate your subscription at the end of the current subscription period by giving us written notice in accordance with your Order.</p>
                    <p className="mb-4">17.3 On termination for any reason:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>your right to access the Platform will cease;</li>
                        <li>we will retain and/or delete Customer Data in accordance with clause 7 and the Data Processing Addendum; and</li>
                        <li>any accrued rights and obligations will not be affected.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">18. Force majeure</h2>
                    <p className="mb-4">18.1 Neither party shall be in breach of these Terms or liable for delay in performing, or failure to perform, any of its obligations (other than payment obligations) if such delay or failure results from events, circumstances or causes beyond its reasonable control, including failure of the internet or any telecommunications network, failure of the Underlying Platform Provider(s), power outages, acts of God, war, terrorism, riot, civil commotion, industrial disputes, natural disasters or pandemics.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">19. Changes to these Terms</h2>
                    <p className="mb-4">19.1 We may update these Terms from time to time, for example to reflect changes in law, regulation, best practice or our services.</p>
                    <p className="mb-4">19.2 Where changes are material, we will provide notice via the Platform, by email or on the Website. If you continue to use the Platform after the effective date of the updated Terms, you will be deemed to have accepted them.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">20. General</h2>
                    <p className="mb-4">20.1 These Terms, together with any Order and the Data Processing Addendum, constitute the entire agreement between you and GrowCheq in relation to the Platform and supersede all prior agreements or understandings.</p>
                    <p className="mb-4">20.2 You may not assign, transfer or sub contract any of your rights or obligations under these Terms without our prior written consent. We may assign or transfer our rights and obligations to a third party in connection with a business reorganisation or sale.</p>
                    <p className="mb-4">20.3 If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
                    <p className="mb-4">20.4 No failure or delay by either party to exercise any right or remedy under these Terms shall constitute a waiver of that or any other right or remedy.</p>
                    <p className="mb-4">20.5 These Terms are governed by and shall be construed in accordance with the laws of England and Wales, and the courts of England and Wales shall have exclusive jurisdiction, subject to any mandatory consumer rights you may have in your country of residence.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Schedule 1 – Data Processing Addendum (Controller–Processor)</h2>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Subject matter and duration</h3>
                    <p className="mb-4">GrowCheq processes personal data on your behalf for the purpose of providing the Platform and related support, for the duration of your subscription and any post termination data retention period described in these Terms.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Nature and purpose of processing</h3>
                    <p className="mb-4">Hosting, storage, transmission, display, duplication for backup, analysis, and other processing necessary to provide, secure, troubleshoot, support and improve the Platform, including using event data and interaction logs to support AI‑driven and machine‑learning features (such as recommendations, routing and scoring), where configured by you within the Platform.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Types of personal data and categories of data subjects</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Contact details (for example, name, email address, telephone number) of your customers, prospects and users.</li>
                        <li>Business relationship and communication data.</li>
                        <li>Usage and interaction data relating to your end users and customers.</li>
                    </ul>
                    <p className="mb-4">Data subjects may include your employees, contractors, customers, prospective customers and other individuals whose personal data you choose to process through the Platform.</p>
                    <p className="mb-4">Where the Platform uses cookies or similar technologies in connection with personal data (for example, to authenticate users or to provide analytics within your account), such use forms part of the processing we carry out on your behalf or on our own behalf as described in the main agreement and our Cookie Policy.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Processor obligations</h3>
                    <p className="mb-4">GrowCheq shall:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>process personal data only on your documented instructions, as set out in these Terms and your configurations within the Platform;</li>
                        <li>ensure that authorised personnel are subject to confidentiality obligations;</li>
                        <li>implement appropriate technical and organisational measures to protect personal data;</li>
                        <li>notify you without undue delay upon becoming aware of a personal data breach affecting personal data we process on your behalf;</li>
                        <li>assist you, where reasonably possible, with fulfilling your obligations to respond to data subject requests and to carry out data protection impact assessments; and</li>
                        <li>where your use of the Platform involves high‑risk processing (for example, certain AI‑enabled workflows), provide reasonable information about our processing and technical measures to assist you with conducting any necessary data protection impact assessments; and</li>
                        <li>make available information reasonably necessary to demonstrate compliance and allow for audits no more than once per year, subject to appropriate confidentiality and notice.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5. Sub processors</h3>
                    <p className="mb-4">You authorise GrowCheq to engage sub processors, including Underlying Platform Provider(s) and other third party service providers (for example, hosting, email delivery and support tools), to process personal data on your behalf. GrowCheq will ensure that such sub processors are bound by written terms which provide at least the same level of protection for personal data as this Addendum. A list of key sub processors (which may be updated from time to time) will be made available on request or via the Website.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6. International transfers</h3>
                    <p className="mb-4">Where personal data is transferred outside the UK or EEA, GrowCheq will ensure that such transfers are made in compliance with Data Protection Law, including through the use of adequacy regulations, the UK Addendum to the Standard Contractual Clauses or other appropriate safeguards.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7. Return and deletion</h3>
                    <p className="mb-4">Following termination of the services, and subject to any legal obligations to retain data, GrowCheq will delete or anonymise personal data processed on your behalf within a reasonable period, or return such data to you on request, in accordance with our standard procedures.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8. Controller obligations</h3>
                    <p className="mb-4">You are responsible for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>determining the lawful basis for processing personal data;</li>
                        <li>providing all necessary privacy information to data subjects;</li>
                        <li>configuring the Platform in a way that complies with Data Protection Law; and</li>
                        <li>ensuring that your instructions are lawful and compatible with the Platform’s technical capabilities.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
