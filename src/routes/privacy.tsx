import { createFileRoute } from "@tanstack/react-router";

import { ContactLines, LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — Crown International Placement Service" },
    { name: "description", content: "How Crown International Placement Service handles personal information shared by candidates, employers and website visitors." },
    { property: "og:title", content: "Privacy Policy — Crown International" },
    { property: "og:description", content: "How Crown International handles personal information shared by candidates, employers and visitors." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PrivacyPage,
});

// Internal note: content prepared for final client/legal review before launch.
const sections = [
  { id: "scope", title: "About This Policy", body: <p>This policy explains how Crown International Placement Service ("Crown", "we", "us") approaches personal information shared with us by candidates, employers, recruitment partners and visitors to this website. Crown is an overseas recruitment agency based in Mohali, Punjab, India.</p> },
  { id: "info", title: "Information You May Provide", body: <><p>You may choose to share information with us through the forms on this website or when you contact us directly by phone, WhatsApp or email. This may include:</p><ul><li>your name, phone number and email address;</li><li>for candidates: your trade or skill, work experience and CV or related documents;</li><li>for employers and partners: company name, contact person and recruitment requirements;</li><li>the content of any message or enquiry you send us.</li></ul><p>The forms on this website currently check that the details you enter are complete, but they do not send or save your information. To share your details with us, please contact us directly using the details below.</p></> },
  { id: "cv", title: "CVs and Documents", body: <p>If you share a CV or other documents with us directly, we use them only to understand your background and to assess whether you may be suitable for overseas opportunities from our employer partners. Please share only the documents we ask for, and avoid sending sensitive information that is not needed.</p> },
  { id: "use", title: "How Information Is Used", body: <><p>Information you share with us may be used to:</p><ul><li>respond to your enquiry;</li><li>assess candidates against confirmed employer requirements;</li><li>guide candidates through screening, documentation and deployment steps;</li><li>discuss manpower requirements with employers and partners.</li></ul><p>We do not sell your personal information.</p></> },
  { id: "communication", title: "Communication", body: <p>We may contact you by phone, WhatsApp or email about your enquiry or relevant opportunities. You can ask us at any time to stop contacting you.</p> },
  { id: "sharing", title: "Sharing With Employers", body: <p>Where a candidate is being considered for a specific role, relevant details may be shared with the prospective employer for that recruitment process. We will discuss this with you before your details are put forward.</p> },
  { id: "retention", title: "Data Retention", body: <p>We keep information shared with us only for as long as it is needed for the purpose it was provided, or as required by applicable law. You can ask us to delete your information when it is no longer needed.</p> },
  { id: "security", title: "Security", body: <p>We take reasonable care to protect information shared with us. However, no method of transmission over the internet or by messaging services is completely secure, so please share only what is necessary.</p> },
  { id: "rights", title: "Your Choices", body: <p>You may ask us what information we hold about you, ask us to correct it, or ask us to delete it, by contacting us using the details below.</p> },
  { id: "links", title: "External Links", body: <p>This website links to external services such as WhatsApp and Google Maps. Those services have their own privacy policies, which we encourage you to read.</p> },
  { id: "updates", title: "Changes to This Policy", body: <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p> },
  { id: "contact", title: "Contact Us", body: <><p>For any question about this policy or your information, please contact:</p><ContactLines /></> },
];

function PrivacyPage() {
  return <LegalPage crumb="Privacy Policy" title="Privacy Policy" intro="How we handle the personal information that candidates, employers and visitors share with us." updated="September 2026" sections={sections} />;
}
