// ---------------------------------------------------------------------------
// Legal page content.
//
// IMPORTANT: these are DRAFTS written in plain language from what the website
// actually does. Have a qualified Nigerian lawyer review them before launch.
//
// Things to set/confirm before launch:
// - legalEntity: use the registered company name that operates the site.
// - legalContactEmail: the inbox that should receive privacy requests.
// - serviceProviders: the platforms that really receive form data.
// - If analytics or advertising tools are ever added, update the Cookies and
//   third-party section of the privacy policy.
// ---------------------------------------------------------------------------

export const legalEntity = "Elysian Farms & Resort, a project of Agrolocale";
export const legalContactEmail = "hello@elysianfarmsandresort.com";
export const serviceProviders = "Zoho Mail and Brevo";
export const legalLastUpdated = "20 October 2026";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

// ---------------------------------------------------------------------------
// Privacy Policy
// ---------------------------------------------------------------------------

export const privacyPolicy: LegalDoc = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  intro: `${legalEntity} ("we", "us") runs this website. This policy explains what personal information we collect through it, how we use it, and the choices you have.`,
  sections: [
    {
      id: "information-we-collect",
      heading: "Information we collect",
      paragraphs: [
        "We only collect the information you choose to give us, plus basic technical data that is logged automatically.",
      ],
      list: [
        "Enquiry form: your name, email address, phone number (optional), the topic you select and your message.",
        "Waitlist and newsletter sign-ups: your email address.",
        "Technical data: for example your IP address, browser type and the pages you visit, which our hosting and security systems may log automatically.",
      ],
    },
    {
      id: "how-we-use-it",
      heading: "How we use your information",
      list: [
        "To respond to your enquiries.",
        "To tell you when the resort opens or when rooms and other offerings become available, if you joined the waitlist.",
        "To send our newsletter and project updates, if you subscribed. You can unsubscribe at any time using the link in every email.",
        "To keep the website secure and working properly.",
        "To meet our legal obligations.",
      ],
    },
    {
      id: "legal-basis",
      heading: "Our legal basis",
      paragraphs: [
        "We process personal data on the basis of your consent (for example newsletter and waitlist sign-ups), our legitimate interests in responding to enquiries and operating this website, and where the law requires it. This policy is written with the Nigeria Data Protection Act 2023 in mind.",
      ],
    },
    {
      id: "who-we-share-it-with",
      heading: "Who we share it with",
      paragraphs: [
        `We use trusted service providers to run this website and communicate with you, including email and email-marketing platforms (currently ${serviceProviders}) and our website hosting provider. We ask them to use your information only to provide their service to us.`,
        "We do not sell your personal information. Some of our providers operate outside Nigeria, so your information may be processed in other countries. We share only what is needed to provide the service.",
        "We may also disclose information where the law requires it.",
      ],
    },
    {
      id: "cookies-and-third-party-content",
      heading: "Cookies and third-party content",
      paragraphs: [
        "Some pages embed content from other services, such as Google Maps on our Contact page and YouTube videos. These services may set their own cookies or collect information such as your IP address when the content loads. Please see their own privacy policies for details.",
        "If we add analytics or advertising tools in future, we will update this policy.",
      ],
    },
    {
      id: "how-long-we-keep-it",
      heading: "How long we keep it",
      paragraphs: [
        "We keep enquiries for as long as we need to respond and for a reasonable period afterwards for record-keeping. We keep newsletter and waitlist details until you unsubscribe or ask us to delete them.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      paragraphs: ["You can ask us to:"],
      list: [
        "Tell you what personal information we hold about you and give you a copy.",
        "Correct information that is wrong or out of date.",
        "Delete your information, where we are not required to keep it.",
        "Restrict or stop certain uses of your information.",
        "Withdraw your consent at any time, for example by unsubscribing.",
      ],
    },
    {
      id: "complaints",
      heading: "Making a request or complaint",
      paragraphs: [
        `To exercise any of these rights, email us at ${legalContactEmail}. If you are not happy with how we handle your information, you also have the right to complain to the Nigeria Data Protection Commission (NDPC).`,
      ],
    },
    {
      id: "security",
      heading: "Security",
      paragraphs: [
        "We take reasonable steps to protect your information. No website or online service can be completely secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      id: "children",
      heading: "Children",
      paragraphs: [
        "This website is not directed at children under 18 and we do not knowingly collect their personal information.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      paragraphs: [`Questions about this policy? Email ${legalContactEmail}.`],
    },
  ],
};

// ---------------------------------------------------------------------------
// Terms of Service
// ---------------------------------------------------------------------------

export const termsOfService: LegalDoc = {
  eyebrow: "Legal",
  title: "Terms of Service",
  intro: `These terms apply to your use of this website, which is run by ${legalEntity} ("we", "us"). By using the website you agree to them. If you do not agree, please do not use it.`,
  sections: [
    {
      id: "not-an-offer",
      heading: "Information on this website is not an offer",
      paragraphs: [
        "Prices, deposits, availability, floor plans, descriptions, photographs and renderings on this website are for general information and illustration. They may change without notice and do not form an offer or a contract.",
        "Any purchase of a cottage, land or other offering is governed only by a written agreement signed with us.",
      ],
    },
    {
      id: "development-stage",
      heading: "Development stage",
      paragraphs: [
        "Elysian Farms & Resort is under development. Amenities, services, layouts and timelines described on this website may change, and some will only be available once the resort opens.",
      ],
    },
    {
      id: "enquiries-and-waitlists",
      heading: "Enquiries and waitlists",
      paragraphs: [
        "Submitting an enquiry, joining the waitlist or subscribing to the newsletter is not a booking, reservation or purchase, and does not create a contract. Joining the waitlist does not guarantee availability.",
      ],
    },
    {
      id: "no-advice-no-guarantees",
      heading: "No advice and no guarantees",
      paragraphs: [
        "Nothing on this website is financial, legal, tax or investment advice. Any reference to potential lodging income is not a guarantee of income or returns.",
        "Please do your own due diligence and take independent professional advice before making a purchase decision.",
      ],
    },
    {
      id: "using-the-website",
      heading: "Using the website",
      paragraphs: ["When using this website you agree not to:"],
      list: [
        "Break any law or infringe anyone else's rights.",
        "Try to gain unauthorised access to the website or its systems.",
        "Introduce harmful code or interfere with how the website works.",
        "Copy content in bulk using automated tools without our permission.",
        "Submit information that is false or belongs to someone else.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "The content on this website, including text, logos, photographs, graphics and design, belongs to us or our licensors. You may view it for your own personal, non-commercial use. You may not copy, reproduce or reuse it without our written permission.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-party links and content",
      paragraphs: [
        "This website may link to or embed content from other services. We do not control them and are not responsible for their content or practices.",
      ],
    },
    {
      id: "liability",
      heading: "Disclaimer and limitation of liability",
      paragraphs: [
        "The website is provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, we are not liable for any loss arising from your use of the website or your reliance on its content.",
        "Nothing in these terms excludes or limits liability that cannot be excluded or limited by law.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to the website and these terms",
      paragraphs: [
        "We may change the website and these terms from time to time. The date at the top of this page shows when they were last updated. Continuing to use the website after a change means you accept the updated terms.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of Nigeria have jurisdiction over any dispute arising from them.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      paragraphs: [`Questions about these terms? Email ${legalContactEmail}.`],
    },
  ],
};