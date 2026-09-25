import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactLines, LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms & Conditions — Crown International Placement Service" },
    { name: "description", content: "Terms for using the Crown International Placement Service website, including vacancies, candidate information and employer enquiries." },
    { property: "og:title", content: "Terms & Conditions — Crown International" },
    { property: "og:description", content: "Terms for using the Crown International Placement Service website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TermsPage,
});

// Internal note: content prepared for final client/legal review before launch.
const sections = [
  { id: "use", title: "Using This Website", body: <p>By using the Crown International Placement Service website you agree to these terms. The website provides general information about Crown's overseas recruitment and manpower placement services. Please do not use it for any unlawful purpose.</p> },
  { id: "accuracy", title: "Accuracy of Information", body: <p>We aim to keep the information on this website accurate and up to date, but it is provided for general guidance only. Please contact us directly to confirm any detail that is important to you.</p> },
  { id: "vacancies", title: "Vacancies and Opportunities", body: <p>Vacancies are published only when an employer requirement has been confirmed and may change or close at any time. A listing, a registration or any contact with Crown does not guarantee employment, selection, salary, a visa, deployment or any other outcome. Final selection decisions rest with the employer and the relevant authorities.</p> },
  { id: "candidates", title: "Candidate Information", body: <p>Candidates must provide information that is true, complete and their own. Providing false details or documents may end your participation in any recruitment process. The website forms do not currently send or save submissions; please share your details with us directly.</p> },
  { id: "employers", title: "Employer Enquiries", body: <p>Enquiries from employers and recruitment partners are welcome. An enquiry does not create an agreement; any recruitment engagement will be agreed separately and in writing.</p> },
  { id: "ip", title: "Intellectual Property", body: <p>The Crown name, logo and website content may not be copied or reused without our permission.</p> },
  { id: "links", title: "External Links", body: <p>This website links to external services such as WhatsApp and Google Maps. We are not responsible for the content or practices of those services.</p> },
  { id: "liability", title: "Limitation of Responsibility", body: <p>To the extent permitted by law, Crown is not responsible for any loss arising from reliance on the general information on this website or from the temporary unavailability of the website.</p> },
  { id: "changes", title: "Changes to the Website and These Terms", body: <p>We may update the website and these terms at any time. The date at the top of this page shows when they were last revised. See also our <Link to="/privacy">Privacy Policy</Link>.</p> },
  { id: "contact", title: "Contact Us", body: <><p>Questions about these terms can be sent to:</p><ContactLines /></> },
];

function TermsPage() {
  return <LegalPage crumb="Terms & Conditions" title="Terms & Conditions" intro="The terms that apply when you use the Crown International Placement Service website." updated="September 2026" sections={sections} />;
}
