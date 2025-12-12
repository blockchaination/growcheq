import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

import { SEO } from '@/components/SEO';

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Cookie Policy"
                description="Read GrowCheq's Cookie Policy to understand how we use cookies and similar technologies on our website and platform."
                canonical="https://growcheq.com/cookie-policy"
            />
            <Navigation />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">GrowCheq Cookie Policy</h1>
                <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">Last updated: 12/12/2025</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. About this Cookie Policy</h2>
                    <p className="mb-4">This Cookie Policy explains how GrowCheq Ltd ("GrowCheq", "we", "us", "our") uses cookies and similar technologies on our website at www.growcheq.com and within the GrowCheq software‑as‑a‑service platform (together, the "Services"). It should be read together with our Privacy Policy, which explains how we use personal data more generally.</p>
                    <p className="mb-4">By continuing to use our Services after seeing our cookie banner and/or by managing your preferences in our cookie‑settings tool, you agree to our use of cookies and similar technologies as described in this Policy, subject to your choices.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. What are cookies and similar technologies?</h2>
                    <p className="mb-4">Cookies are small text files that are stored on your device (for example, a computer, tablet or smartphone) when you visit a website or use an online service. They are widely used to make websites work, to improve their efficiency, and to provide information to site owners.</p>
                    <p className="mb-4">We also use similar technologies, such as:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Pixels and tags (small pieces of code placed on web pages or in emails to track usage and responses)</li>
                        <li>Local storage and session storage (used by your browser or device to store data locally)</li>
                        <li>Software development kits (SDKs) and device identifiers (used particularly in mobile or integrated applications)</li>
                    </ul>
                    <p className="mb-4">For simplicity, we refer to all of these as "cookies" in this Policy.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Our platform and third‑party technologies</h2>
                    <p className="mb-4">GrowCheq operates a white‑label, cloud‑based SaaS platform. The Services are delivered using an underlying third‑party platform and infrastructure provider, as well as other technology vendors that support hosting, analytics, security, artificial‑intelligence features and marketing tools.</p>
                    <p className="mb-4">These third parties may set and read cookies and similar technologies when you use the Services. Depending on the context, they may act on our instructions (as our processors) or as independent controllers under their own privacy and cookie policies. GrowCheq takes reasonable steps to ensure that such providers treat cookie‑related data in accordance with applicable data‑protection and e‑privacy laws.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Types of cookies we use</h2>
                    <p className="mb-4">We group the cookies and similar technologies used on our Services into the following categories.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Strictly necessary cookies</h3>
                    <p className="mb-4">These cookies are essential for the operation of our Services and cannot be switched off in our systems. They are usually only set in response to actions you take which amount to a request for services, such as:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Logging in or accessing secure areas of the platform</li>
                        <li>Setting your privacy or cookie preferences</li>
                        <li>Submitting forms</li>
                        <li>Enabling load balancing and security features</li>
                    </ul>
                    <p className="mb-4">Without these cookies, parts of the Services may not work properly or may not be provided at all.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Performance and analytics cookies</h3>
                    <p className="mb-4">These cookies help us understand how visitors use the Services so we can measure performance and improve user experience. They allow us to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Count visits and traffic sources</li>
                        <li>See which pages, features and campaigns are most and least popular</li>
                        <li>Understand how users navigate around the website and platform</li>
                        <li>Diagnose technical issues and improve speed and usability</li>
                    </ul>
                    <p className="mb-4">Information collected is usually aggregated. Where it can reasonably identify you (for example, by reference to an IP address or user ID), GrowCheq treats it as personal data and handles it in line with the Privacy Policy.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Functionality cookies</h3>
                    <p className="mb-4">These cookies enable the Services to provide enhanced functionality and personalisation. They may be set by us or by third‑party providers whose services we have added to our pages. They help us to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Remember your preferences (for example, language, time zone, dashboard layout)</li>
                        <li>Remember choices you make in forms, wizards or in‑app settings</li>
                        <li>Provide certain in‑app features and integrations</li>
                    </ul>
                    <p className="mb-4">If you disable these cookies, some or all of these features may not function correctly.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4 Targeting, advertising and social‑media cookies</h3>
                    <p className="mb-4">These cookies may be set through our Services by us or by our third‑party advertising and social‑media partners. They may be used to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Build a profile of your interests based on your use of our Services and other sites</li>
                        <li>Show you relevant adverts for GrowCheq on other websites and platforms</li>
                        <li>Measure the effectiveness of our marketing campaigns and content</li>
                        <li>Enable sharing of content via social‑media plugins or widgets</li>
                    </ul>
                    <p className="mb-4">If you disable these cookies, you may still see advertising, but it is likely to be less tailored to you.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.5 Cookies and tools used for AI‑related features</h3>
                    <p className="mb-4">Our Services may include artificial‑intelligence (AI) or machine‑learning‑driven features (for example, to assist with lead scoring, content suggestions, routing or workflow optimisation). These features may use cookies and similar technologies, along with event logs and usage data, in order to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Understand how particular AI‑powered features are used</li>
                        <li>Improve the accuracy, relevance and performance of AI models</li>
                        <li>Provide contextual recommendations, automations or insights within the platform</li>
                    </ul>
                    <p className="mb-4">Where AI‑related tools or cookies track individuals or can reasonably identify you, GrowCheq treats the resulting data as personal data and processes it in line with the Privacy Policy and applicable law.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. First‑party and third‑party cookies</h2>
                    <p className="mb-4">Cookies may be:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>First‑party cookies</strong> – set directly by GrowCheq when you visit our Services</li>
                        <li><strong>Third‑party cookies</strong> – set by another organisation when you use our Services, such as analytics providers, advertising networks, AI tool providers, or the underlying platform and infrastructure provider</li>
                    </ul>
                    <p className="mb-4">Third‑party providers may use cookies for their own purposes (for example, analytics or advertising) and will do so in line with their own privacy and cookie policies. Where appropriate, GrowCheq encourages you to review those policies.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Example cookie table</h2>
                    <p className="mb-4">The exact cookies and technologies used can change over time as we evolve our Services. The table below provides examples of the types of cookies and tools we may use. You should customise the names, providers and retention periods to reflect your actual setup.</p>

                    <div className="overflow-x-auto mb-8">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Example cookie / tool</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Provider (example)</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Typical retention</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Strictly necessary</td>
                                    <td className="border border-gray-300 px-4 py-2">ghq_session</td>
                                    <td className="border border-gray-300 px-4 py-2">GrowCheq / underlying platform</td>
                                    <td className="border border-gray-300 px-4 py-2">Maintains secure login session and keeps you logged in as you navigate the platform.</td>
                                    <td className="border border-gray-300 px-4 py-2">Session (until logout or browser close)</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">Strictly necessary</td>
                                    <td className="border border-gray-300 px-4 py-2">ghq_cookie_consent</td>
                                    <td className="border border-gray-300 px-4 py-2">GrowCheq</td>
                                    <td className="border border-gray-300 px-4 py-2">Stores your cookie‑consent choices so they can be honoured on future visits.</td>
                                    <td className="border border-gray-300 px-4 py-2">6–12 months</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Performance / analytics</td>
                                    <td className="border border-gray-300 px-4 py-2">analytics_id</td>
                                    <td className="border border-gray-300 px-4 py-2">Analytics provider</td>
                                    <td className="border border-gray-300 px-4 py-2">Collects aggregated statistics about website and platform usage (page views, feature usage, navigation paths).</td>
                                    <td className="border border-gray-300 px-4 py-2">12–24 months</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">Functionality</td>
                                    <td className="border border-gray-300 px-4 py-2">ghq_user_prefs</td>
                                    <td className="border border-gray-300 px-4 py-2">GrowCheq</td>
                                    <td className="border border-gray-300 px-4 py-2">Remembers your interface preferences (e.g. language, time zone, layout options).</td>
                                    <td className="border border-gray-300 px-4 py-2">Up to 12 months</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Targeting / advertising</td>
                                    <td className="border border-gray-300 px-4 py-2">ad_conv_tracker</td>
                                    <td className="border border-gray-300 px-4 py-2">Advertising partner</td>
                                    <td className="border border-gray-300 px-4 py-2">Measures conversions and helps deliver more relevant GrowCheq ads on third‑party sites.</td>
                                    <td className="border border-gray-300 px-4 py-2">3–12 months</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">Social‑media / marketing</td>
                                    <td className="border border-gray-300 px-4 py-2">social_pixel</td>
                                    <td className="border border-gray-300 px-4 py-2">Social‑media platform</td>
                                    <td className="border border-gray-300 px-4 py-2">Tracks visits and campaign performance when you arrive via social‑media links or ads.</td>
                                    <td className="border border-gray-300 px-4 py-2">Up to 24 months</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">AI / machine‑learning</td>
                                    <td className="border border-gray-300 px-4 py-2">ghq_ai_usage</td>
                                    <td className="border border-gray-300 px-4 py-2">GrowCheq / AI tool provider</td>
                                    <td className="border border-gray-300 px-4 py-2">Records usage of AI‑powered features to improve recommendations and scoring models.</td>
                                    <td className="border border-gray-300 px-4 py-2">6–18 months</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mb-4">A more detailed, up‑to‑date cookie list (including the full set of cookies currently in use) can be made available on request or provided in a separate cookie listing on the website.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Legal basis for using cookies</h2>
                    <p className="mb-4">GrowCheq's use of cookies is based on:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Legitimate interests</strong> for strictly necessary cookies and similar technologies that are essential to provide the Services you request, maintain security and prevent fraud</li>
                        <li><strong>Consent</strong> for performance, analytics, functionality, targeting, advertising and AI‑related cookies that are not strictly necessary</li>
                    </ul>
                    <p className="mb-4">Where consent is required under applicable privacy and electronic‑communications laws, GrowCheq obtains it through a cookie banner and/or preference centre before such cookies are set.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Managing your cookie preferences</h2>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Cookie banner and preference centre</h3>
                    <p className="mb-4">When you first visit our website, you will see a banner or pop‑up that gives you the option to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Accept all cookies</li>
                        <li>Reject non‑essential cookies</li>
                        <li>Manage your cookie settings in more detail</li>
                    </ul>
                    <p className="mb-4">You can change your preferences at any time by using the cookie‑settings link (for example, in the website footer or within your account area). In that settings area, you can typically turn on or off non‑essential categories (such as analytics, marketing or AI‑related cookies). Strictly necessary cookies will remain active because they are required for the Services to function.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.2 Browser and device settings</h3>
                    <p className="mb-4">You can also control cookies using your browser or device settings. Most browsers allow you to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>See what cookies are stored on your device</li>
                        <li>Delete cookies</li>
                        <li>Block all cookies</li>
                        <li>Block cookies from specific sites</li>
                    </ul>
                    <p className="mb-4">Instructions can usually be found in the "Help", "Options" or "Settings" section of your browser or device. Please note that if you block or delete all cookies, some parts of our Services may not function properly or may become unavailable.</p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.3 Third‑party opt‑outs</h3>
                    <p className="mb-4">Some third‑party providers offer their own opt‑out mechanisms (for example, analytics tools or advertising networks). Where relevant, links to such opt‑out tools may be included in our cookie table or on those providers' own websites.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Cookies, profiling and personal data</h2>
                    <p className="mb-4">Where cookies and similar technologies collect information that can reasonably identify you (directly or indirectly), GrowCheq treats that information as personal data. This may include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Identifiers such as IP address, device ID, user ID or session ID</li>
                        <li>Information about how you interact with the Services over time</li>
                        <li>Profiles or segments created for analytics or targeting purposes</li>
                    </ul>
                    <p className="mb-4">The Privacy Policy explains in more detail:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>The types of personal data we collect</li>
                        <li>The purposes for which we use it</li>
                        <li>Our lawful bases for processing</li>
                        <li>When we may share data with third parties (including the underlying platform and other technology vendors)</li>
                        <li>Your rights under data‑protection law, including rights of access, rectification, erasure, restriction, objection and data portability</li>
                    </ul>
                    <p className="mb-4">If you wish to exercise any of these rights in relation to information obtained via cookies, please contact us using the details below.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. International transfers</h2>
                    <p className="mb-4">Some of our technology providers, including the underlying platform and infrastructure provider and certain analytics, AI and marketing tools, may be located outside the United Kingdom and European Economic Area, or may store data in other jurisdictions.</p>
                    <p className="mb-4">Where cookie‑related data that constitutes personal data is transferred to such providers in countries that do not benefit from an adequacy decision, GrowCheq will ensure that appropriate safeguards are in place (for example, approved contractual clauses and additional technical and organisational measures) in line with applicable data‑protection laws.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to this Cookie Policy</h2>
                    <p className="mb-4">GrowCheq may update this Cookie Policy from time to time, for example:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To reflect changes in the cookies and technologies used</li>
                        <li>To describe new tools or features used in the white‑label SaaS platform</li>
                        <li>To reflect changes in law, regulatory guidance or industry practice</li>
                    </ul>
                    <p className="mb-4">The latest version will always be available on the website and will state the date on which it was last updated. Reviewing this Policy periodically will help you stay informed about how GrowCheq uses cookies and similar technologies.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. How to contact us</h2>
                    <p className="mb-4">If you have any questions about this Cookie Policy or our use of cookies and similar technologies, or if you wish to exercise your data‑protection rights, please contact:</p>
                    <p className="mb-4">GrowCheq Ltd</p>
                    <p className="mb-4">Email: <a href="mailto:privacy@growcheq.com" className="text-blue-600 hover:text-blue-800">privacy@growcheq.com</a></p>
                    <p className="mb-4">Postal address: [insert address]</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CookiePolicy;
