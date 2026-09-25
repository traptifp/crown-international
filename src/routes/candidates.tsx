import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, FileSearch, Handshake, MessageCircle, MessagesSquare, PlaneTakeoff, ShieldCheck, Send, UserRoundCheck } from "lucide-react";

import heroImg from "@/assets/candidates-hero.jpg";
import { Button } from "@/components/ui/button";
import { CandidateForm, Faq } from "@/components/site/forms";
import { PageHero, ProcessSteps } from "@/components/site/page-parts";
import { WHATSAPP_HREF } from "@/lib/site-data";

export const Route = createFileRoute("/candidates")({
  head: () => ({ meta: [
    { title: "For Candidates — Register for Overseas Jobs | Crown International" },
    { name: "description", content: "Indian skilled, semi-skilled and operator workers can register their interest in overseas roles in six European countries with Crown International." },
    { property: "og:title", content: "Candidates — Crown International Placement Service" },
    { property: "og:description", content: "Register your interest in genuine overseas opportunities with an MEA-approved recruitment agency." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CandidatesPage,
});

const expect = [
  { icon: ShieldCheck, label: "Registered Agency", text: "Approved by the Government of India, Ministry of External Affairs." },
  { icon: ClipboardList, label: "Clear Process", text: "You know what happens at each step after you register." },
  { icon: MessagesSquare, label: "Honest Communication", text: "Straight answers about roles, requirements and documents." },
  { icon: UserRoundCheck, label: "Personal Guidance", text: "A team you can call or message throughout the process." },
];

function CandidatesPage() {
  return (
    <main>
      <PageHero crumb="Candidates" title="Candidates" accent="Your Skills. Global Opportunities." imagePosition="object-[70%_center]"
        text="We help Indian skilled, semi-skilled and operator workers find genuine overseas roles in Romania, Croatia, Bulgaria, Albania, Serbia and Moldova."
        image={heroImg} imageAlt="Young woman with a backpack smiling in an airport terminal">
        <Button asChild size="lg"><a href="#register">Register Your Interest <ArrowRight aria-hidden="true" /></a></Button>
      </PageHero>

      <section className="border-b border-border py-16 lg:py-20">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_2fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">What You Can Expect</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Working abroad is a big decision. We keep the process transparent so you can make it with confidence.</p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expect.map(({ icon: Icon, label, text }) => (
              <li key={label}><Icon className="size-9 text-accent" strokeWidth={1.5} aria-hidden="true" /><h3 className="mt-4 font-semibold text-brand-deep">{label}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps title="How It Works" text="A simple, step-by-step route from registration to your next role."
        steps={[
          { icon: Send, label: "Submit Your Details", text: "Fill in the registration form and upload your CV." },
          { icon: FileSearch, label: "Profile Review", text: "We review your skills and experience against employer requirements." },
          { icon: Handshake, label: "Matching Opportunities", text: "When a suitable role is confirmed, we contact you with the details." },
          { icon: PlaneTakeoff, label: "Guidance & Support", text: "We guide you through documentation and the next steps." },
        ]} />

      <section id="register" className="scroll-mt-28 bg-brand-mist py-16 lg:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Start your journey</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-deep sm:text-4xl">Register Your Interest</h2>
            <p className="mt-4 max-w-md leading-7 text-muted-foreground">Share your details and CV. Our team keeps your profile on hand and contacts you when a role matching your trade becomes available.</p>
            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <p className="font-semibold text-brand-deep">Prefer to talk first?</p>
              <p className="mt-1 text-sm text-muted-foreground">Call or WhatsApp 9878603703, 9:30 AM – 6:00 PM.</p>
              <Button asChild variant="whatsapp" className="mt-4"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>
            </div>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"><CandidateForm /></div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10"><Faq items={[
            ["How do I register?", "Complete the registration form on this page with your name, phone, email and CV, or contact us on WhatsApp at 9878603703."],
            ["What types of jobs do you recruit for?", "We focus on skilled, semi-skilled and operator roles in sectors such as construction, manufacturing, logistics, hospitality and skilled trades."],
            ["Which countries do you recruit for?", "Romania, Croatia, Bulgaria, Albania, Serbia and Moldova."],
            ["Does registering guarantee a job?", "No. Registration lets us consider you when an employer confirms a requirement that matches your skills and experience."],
            ["What documents will I need?", "Usually a valid passport, CV and proof of experience. Exact requirements depend on the role and country, and we will explain them clearly."],
            ["How can I check the agency is genuine?", "Crown International is approved by the Government of India, Ministry of External Affairs. Our registration details are shown at the top of every page."],
          ]} /></div>
          <p className="mt-10 text-sm text-muted-foreground">Looking for current roles? <Link to="/vacancies" className="font-semibold text-primary hover:underline">View vacancies</Link></p>
        </div>
      </section>
    </main>
  );
}
