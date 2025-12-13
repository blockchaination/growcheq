export interface IndustryData {
    heroHeadline: string;
    heroSubheadline: string;
    heroCTA: string;
    features: { title: string; description: string }[];
    testimonial: { quote: string; author: string; title: string; company: string };
    finalCTA: string;
    finalCTAButton: string;
}

export const industryContent: Record<string, IndustryData> = {
    'ALL': {
        heroHeadline: 'Turn Every Interaction Into Revenue',
        heroSubheadline: 'The all-in-one AI platform for local businesses to capture, convert, and keep more customers. No complex software, just results.',
        heroCTA: 'Start Free Trial',
        features: [
            {
                title: "Lead Capture & Automation",
                description: "Automatically capture every inquiry from your website, social media, and third-party platforms in one unified inbox. Never miss a lead again.",
            },
            {
                title: "AI Response System",
                description: "Our AI agent instantly qualifies leads, answers questions, and books appointments 24/7 without you lifting a finger.",
            },
            {
                title: "Review Management",
                description: "Automatically request reviews via text after every service. Watch your Google ranking climb and your reputation grow.",
            },
            {
                title: "Text-to-Pay",
                description: "Securely send payment links via SMS. Get paid 85% faster and eliminate the hassle of chasing invoices.",
            },
            {
                title: "CRM & Pipelines",
                description: "Track every customer journey from lead to sale. Visual pipelines help you see exactly where your revenue is coming from.",
            },
            {
                title: "Team Collaboration",
                description: "Assign conversations, leave internal notes, and track performance. Keep your entire team aligned on one platform.",
            },
        ],
        testimonial: {
            quote: "GrowCheq has completely transformed how we manage our customer communications. It's like having an extra employee who works 24/7.",
            author: "Sarah Jenkins",
            title: "Business Owner",
            company: "Jenkins Solutions"
        },
        finalCTA: "Ready to Grow Your Business?",
        finalCTAButton: "Start Free Trial"
    },
    'AUTOMOTIVE & VEHICLE SERVICES': {
        heroHeadline: 'Turn Service Inquiries Into Booked Appointments',
        heroSubheadline: 'From MOT reminders to service booking confirmations, keep your auto shop running smoothly.',
        heroCTA: 'Get Started for Auto Shops',
        features: [
            {
                title: 'Instant Service Booking Confirmations',
                description: 'Send automated SMS confirmations the moment a customer books a service, reducing no-shows and building trust.'
            },
            {
                title: 'Automated Service Reminders',
                description: 'Keep customers coming back with timely MOT reminders, service due dates, and post-service follow-ups.'
            },
            {
                title: 'Quick Payment Collection',
                description: 'Get paid faster with instant payment links for parts and labor sent directly via SMS.'
            },
            {
                title: 'Review Requests After Service',
                description: 'Automatically request reviews after each service to build your online reputation and attract more customers.'
            },
            {
                title: "Vehicle Status Updates",
                description: "Keep customers informed about their vehicle status with automated text updates throughout the day."
            },
            {
                title: "Parts Ordering Automation",
                description: "Streamline your parts ordering process and notify customers immediately when parts arrive."
            }
        ],
        testimonial: {
            quote: 'GrowCheq helped us reduce no-shows by 45% and made our booking process seamless.',
            author: 'James Mitchell',
            title: 'Owner',
            company: 'Mitchell Auto Services'
        },
        finalCTA: 'Start Growing Your Auto Shop Today',
        finalCTAButton: 'Get Started Free'
    },

    'SALONS & BEAUTY SERVICES': {
        heroHeadline: 'Fill Your Appointment Book & Reduce No-Shows',
        heroSubheadline: 'Reduce no-shows and keep your appointment book full with automated reminders and easy booking.',
        heroCTA: 'Get Started for Salons',
        features: [
            {
                title: 'Easy Online Scheduling',
                description: 'Let clients book their appointments 24/7 through simple SMS or web links, no phone calls needed.'
            },
            {
                title: 'Automated Reminders',
                description: 'Send automatic reminders via SMS to dramatically reduce no-shows and last-minute cancellations.'
            },
            {
                title: 'Loyalty Rewards',
                description: 'Build customer loyalty with automated rewards tracking and referral incentives that drive repeat business.'
            },
            {
                title: 'Before/After Photo Sharing',
                description: 'Make it easy for happy clients to share their transformations and leave glowing reviews online.'
            },
            {
                title: "Waitlist Management",
                description: "Automatically notify clients on your waitlist when a slot opens up, keeping your calendar full."
            },
            {
                title: "Stylist Portfolios",
                description: "Showcase each stylist's work directly in the booking flow to help clients choose the right pro."
            }
        ],
        testimonial: {
            quote: 'Our no-show rate dropped by 60% in the first month. GrowCheq pays for itself instantly.',
            author: 'Sarah Thompson',
            title: 'Owner',
            company: 'Luxe Beauty Studio'
        },
        finalCTA: 'Transform Your Salon Business Today',
        finalCTAButton: 'Get Started Free'
    },

    'HOME SERVICES': {
        heroHeadline: 'Capture Every Lead, Get Paid Faster',
        heroSubheadline: 'Capture leads from every call and website visit. Get jobs approved and paid faster.',
        heroCTA: 'Get Started for Home Services',
        features: [
            {
                title: 'Lead Capture from Every Source',
                description: 'Never miss a lead from phone calls, website forms, or social media. Everything flows into one inbox.'
            },
            {
                title: 'Job Estimate Approvals',
                description: 'Send estimates instantly via SMS and get approval with a single tap from your customer.'
            },
            {
                title: 'Automated Quote Follow-ups',
                description: 'Stop chasing quotes. Automated follow-ups convert more estimates into booked jobs.'
            },
            {
                title: 'Post-Job Review Requests',
                description: 'Automatically request reviews after job completion to build your reputation and win more work.'
            },
            {
                title: "On-The-Way Alerts",
                description: "Let customers know exactly when your tech is arriving with automated 'on the way' text notifications."
            },
            {
                title: "Field Team Dispatch",
                description: "Dispatch jobs to your field team instantly and track their progress in real-time."
            }
        ],
        testimonial: {
            quote: 'We went from missing 30% of leads to capturing 100%. Our revenue is up 40% this quarter.',
            author: 'Mike Rodriguez',
            title: 'Owner',
            company: 'Rodriguez Plumbing & HVAC'
        },
        finalCTA: 'Grow Your Home Services Business',
        finalCTAButton: 'Get Started Free'
    },

    'RETAIL & E-COMMERCE': {
        heroHeadline: 'Build Loyalty & Drive Repeat Business',
        heroSubheadline: 'Build customer loyalty and drive repeat business with targeted messaging and promotions.',
        heroCTA: 'Get Started for Retail',
        features: [
            {
                title: 'Customer Loyalty Programs',
                description: 'Reward your best customers with points, discounts, and exclusive offers delivered via SMS.'
            },
            {
                title: 'Restock Notifications',
                description: 'Alert customers when their favorite items are back in stock or when new products arrive.'
            },
            {
                title: 'Flash Sales Announcements',
                description: 'Drive immediate traffic with time-sensitive promotions delivered directly to customers\' phones.'
            },
            {
                title: 'Abandoned Cart Recovery',
                description: 'Recover lost online sales with automated cart recovery messages that convert browsers into buyers.'
            },
            {
                title: "Order Status Updates",
                description: "Keep customers in the loop with automated shipping and delivery updates via text."
            },
            {
                title: "Personalized Recommendations",
                description: "Send personalized product recommendations based on past purchase history."
            }
        ],
        testimonial: {
            quote: 'Our repeat purchase rate increased by 35% after implementing GrowCheq\'s loyalty program.',
            author: 'Emily Chen',
            title: 'Store Manager',
            company: 'Urban Style Boutique'
        },
        finalCTA: 'Start Building Customer Loyalty Today',
        finalCTAButton: 'Get Started Free'
    },

    'HEALTH & WELLNESS': {
        heroHeadline: 'Reduce Missed Appointments & Improve Care',
        heroSubheadline: 'Improve patient communication and reduce missed appointments with GDPR-compliant messaging.',
        heroCTA: 'Get Started for Healthcare',
        features: [
            {
                title: 'GDPR-Compliant Reminders',
                description: 'Send secure, compliant appointment reminders that reduce no-shows while protecting patient privacy.'
            },
            {
                title: 'Secure Intake Forms',
                description: 'Collect patient information securely online before appointments, saving time and reducing paperwork.'
            },
            {
                title: 'Telehealth Scheduling',
                description: 'Make it easy for patients to book virtual consultations with simple online scheduling links.'
            },
            {
                title: 'Prescription Reminders',
                description: 'Help patients stay on track with automated reminders for prescription renewals and refills.'
            },
            {
                title: "Post-Visit Follow-up",
                description: "Automatically check in with patients after their visit to ensure they are recovering well."
            },
            {
                title: "Health Tips Newsletter",
                description: "Keep patients engaged with regular health tips and wellness advice sent directly to their phones."
            }
        ],
        testimonial: {
            quote: 'Missed appointments dropped by 50%. Our patients love the convenient reminders and online booking.',
            author: 'Dr. Rachel Foster',
            title: 'Practice Manager',
            company: 'Foster Family Medical'
        },
        finalCTA: 'Improve Your Patient Experience Today',
        finalCTAButton: 'Get Started Free'
    },

    'FINANCIAL SERVICES': { // Using PROFESSIONAL SERVICES content but mapped to FINANCIAL SERVICES key if needed, or keeping explicit PROFESSIONAL
        // Note: The prompt uses 'professional' key but displayed 'Professional Services'. 
        // I'll map 'FINANCIAL SERVICES' to Professional content or create a specific one if I had it.
        // For now I will use the 'professional' content for 'FINANCIAL SERVICES' (closest match in list) or 'Professional Services'
        // The prompt asked for: FINANCIAL SERVICES in the pill selector list.
        // Let's create a specific one for Financial logic or re-use Professional. 
        // I will use the 'Professional' content here but tailored slightly for Finance/Professional context.
        heroHeadline: 'Streamline Client Communication & Get Paid',
        heroSubheadline: 'Streamline client communication, automate proposals, and get paid faster for your services.',
        heroCTA: 'Get Started for Professionals',
        features: [
            {
                title: 'Client Onboarding Automation',
                description: 'Automate your client intake process with forms, contracts, and welcome sequences delivered via SMS.'
            },
            {
                title: 'Proposal Approval Tracking',
                description: 'Send proposals instantly and track when clients view and approve them, speeding up your sales cycle.'
            },
            {
                title: 'Meeting Scheduling',
                description: 'Let clients book meetings on your calendar automatically, with reminders sent to both parties.'
            },
            {
                title: 'Automated Invoicing',
                description: 'Generate and send invoices automatically, with payment links that make it easy for clients to pay immediately.'
            },
            {
                title: "Secure Document Sharing",
                description: "Share sensitive financial documents securely with end-to-end encryption."
            },
            {
                title: "Compliance Archiving",
                description: "Automatically archive all client communications for compliance and audit purposes."
            }
        ],
        testimonial: {
            quote: 'Our payment collection time went from 30 days to 7 days. GrowCheq made a huge difference to our cash flow.',
            author: 'David Martinez',
            title: 'Managing Partner',
            company: 'Martinez Legal Consultants'
        },
        finalCTA: 'Transform Your Professional Practice Today',
        finalCTAButton: 'Get Started Free'
    },
    'LEGAL SERVICES': { // Mapping for Legal Services
        heroHeadline: ' streamline Client Communication & Get Paid',
        heroSubheadline: 'Streamline client communication, automate proposals, and get paid faster for your services.',
        heroCTA: 'Get Started for Law Firms',
        features: [
            {
                title: 'Client Onboarding Automation',
                description: 'Automate your client intake process with forms, contracts, and welcome sequences delivered via SMS.'
            },
            {
                title: 'Proposal Approval Tracking',
                description: 'Send proposals instantly and track when clients view and approve them, speeding up your sales cycle.'
            },
            {
                title: 'Meeting Scheduling',
                description: 'Let clients book meetings on your calendar automatically, with reminders sent to both parties.'
            },
            {
                title: 'Automated Invoicing',
                description: 'Generate and send invoices automatically, with payment links that make it easy for clients to pay immediately.'
            },
            {
                title: "Case Status Updates",
                description: "Keep clients informed about the status of their case with automated text updates."
            },
            {
                title: "Secure Document Signing",
                description: "Get contracts and agreements signed faster with secure mobile-friendly e-signatures."
            }
        ],
        testimonial: {
            quote: 'Our payment collection time went from 30 days to 7 days. GrowCheq made a huge difference to our cash flow.',
            author: 'David Martinez',
            title: 'Managing Partner',
            company: 'Martinez Legal Consultants'
        },
        finalCTA: 'Transform Your Practice Today',
        finalCTAButton: 'Get Started Free'
    }
};
