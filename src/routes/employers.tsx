import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, FileCheck2, Handshake, ListChecks, PlaneTakeoff, ShieldCheck, UserRoundSearch, UsersRound } from "lucide-react";

import heroImg from "@/assets/employers-hero.jpg";
import meetingImg from "@/assets/employers-meeting.jpg";
import ctaImg from "@/assets/cta-skyline.jpg";
import { Button } from "@/components/ui/button";
import { EmployerForm, Faq } from "@/components/site/forms";
import { ImageCta, PageHero, ProcessSteps, categoryIcons } from "@/components/site/page-parts";
import { categories } from "@/lib/site-data";

export const Route = createFileRoute("/employers")({
  head: () => ({ meta: [
    { title: "Employers & B2B Partners — Crown International Placement Service" },
    { name: "description", content: "Recruit Indian skilled, semi-skilled and operator manpower through Crown International, an MEA-approved overseas recruitment agency." },
    { property: "og:title", content: "Employers & B2B Partners — Crown International" },
    { property: "og:description", content: "Partner with Crown International for overseas recruitment of Indian skilled and operator manpower." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: EmployersPage,
});

const why = [
  { icon: UsersRound, label: "Indian Manpower", text: "Skilled, semi-skilled and operator workers across practical trades." },
  { icon: ShieldCheck, label: "MEA-Approved", text: "A registered recruitment agency operating since 2016." },
  { icon: ClipboardCheck, label: "Single Point of Contact", text: "One team coordinating your requirement from brief to deployment." },
  { icon: Handshake, label: "Long-Term Partnership", text: "We aim to support repeat and ongoing requirements." },
];

function EmployersPage() {
  return (
    <main>
      <PageHero crumb="Employers / B2B Partners" title="Employers &" accent="B2B Partners" imagePosition="object-[75%_center]"
        text="We recruit Indian skilled, semi-skilled and operator manpower for overseas employers and authorised recruitment partners, with an organised and compliant process."
        image={heroImg} imageAlt="Two business professionals shaking hands in a high-rise office">
        <Button asChild size="lg"><a href="#enquiry">Partner With Us <ArrowRight aria-hidden="true" /></a></Button>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="max-w-2xl"><h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">Why Partner With Crown?</h2><p className="mt-4 leading-7 text-muted-foreground">Our focus is simple: finding dependable workers who match the roles you need to fill.</p></div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: Icon, label, text }) => (
              <li key={label} className="bg-card p-7"><Icon className="size-9 text-accent" strokeWidth={1.5} aria-hidden="true" /><h3 className="mt-5 font-semibold text-brand-deep">{label}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-brand-mist">
        <ProcessSteps title="Our Recruitment Process" text="A structured process built around your requirement."
          steps={[
            { icon: ListChecks, label: "Understand Requirements", text: "We confirm roles, numbers, skills and work conditions with you." },
            { icon: UserRoundSearch, label: "Candidate Sourcing", text: "We identify and screen suitable candidates and share profiles." },
            { icon: FileCheck2, label: "Documentation", text: "We coordinate the paperwork required for each placement." },
            { icon: PlaneTakeoff, label: "Deployment Support", text: "We help with final formalities and joining arrangements." },
          ]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">Manpower We Supply</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Our operating focus covers the following categories for employers in Romania, Croatia, Bulgaria, Albania, Serbia and Moldova.</p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((c) => { const Icon = categoryIcons[c.id]; return (
              <li key={c.id} className="flex items-center gap-3 rounded-md border border-border px-4 py-4 text-sm font-medium text-brand-deep"><Icon className="size-6 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />{c.name}</li>
            ); })}
          </ul>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-28 border-y border-border">
        <div className="grid lg:grid-cols-2">
          <img src={meetingImg} alt="Two professionals reviewing workforce plans on a tablet" loading="lazy" width={1200} height={1008} className="h-64 w-full object-cover sm:h-80 lg:h-full" />
          <div className="px-5 py-14 sm:px-10 lg:px-14 lg:py-20">
            <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">Partner With Us</h2>
            <p className="mt-3 text-muted-foreground">Share your requirements and our team will review them.</p>
            <div className="mt-8 max-w-xl"><EmployerForm /></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10"><Faq items={[
            ["What types of manpower do you provide?", "Indian skilled, semi-skilled and operator manpower across construction, manufacturing, logistics, hospitality, cleaning, maintenance and skilled trades."],
            ["Which countries do you recruit for?", "Romania, Croatia, Bulgaria, Albania, Serbia and Moldova."],
            ["Are you a registered agency?", "Yes. Crown International is approved by the Government of India, Ministry of External Affairs, under Registration Certificate No. B-3117/PUN/PER/100/5/11122/2025."],
            ["How do we start?", "Send your requirement through the enquiry form, or call or WhatsApp 9878603703 to discuss it with our team."],
            ["What documentation do you handle?", "We coordinate candidate documents and the paperwork required on the Indian side for each placement."],
            ["How long does recruitment take?", "Timelines depend on the role, number of workers and destination country. We agree a realistic plan once we understand your requirement."],
          ]} /></div>
        </div>
      </section>

      <ImageCta image={ctaImg} title="Let’s Build a Stronger Workforce Together" text="Tell us what roles you need to fill and we’ll take it from there." primary={{ label: "Contact Us", to: "/contact" }} />
    </main>
  );
}
