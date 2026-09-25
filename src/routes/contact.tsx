import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Clock3, Mail, MapPin, MessageCircle, Phone, UsersRound } from "lucide-react";

import heroImg from "@/assets/contact-hero.jpg";
import { PageHero } from "@/components/site/page-parts";
import { ContactForm, Faq } from "@/components/site/forms";
import { Button } from "@/components/ui/button";
import { WHATSAPP_HREF } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — Crown International Placement Service, Mohali" },
    { name: "description", content: "Call or WhatsApp 9878603703, email crownips409@gmail.com, or send an enquiry to Crown International Placement Service in Mohali, Punjab. Open 9:30 AM – 6:00 PM." },
    { property: "og:title", content: "Contact Crown International Placement Service" },
    { property: "og:description", content: "Phone and WhatsApp 9878603703 · crownips409@gmail.com · Mohali, Punjab, India – 160055." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

const ways = [
  { icon: Phone, title: "Call Us", value: "9878603703", note: "9:30 AM – 6:00 PM", href: "tel:+919878603703" },
  { icon: Mail, title: "Email Us", value: "crownips409@gmail.com", note: "For documents and detailed enquiries", href: "mailto:crownips409@gmail.com" },
  { icon: MessageCircle, title: "Chat on WhatsApp", value: "9878603703", note: "For quick questions", href: WHATSAPP_HREF },
  { icon: MapPin, title: "Our Location", value: "Mohali, Punjab", note: "India – 160055" },
];

const faq: [string, string][] = [
  ["What is the quickest way to reach Crown?", "A WhatsApp message or phone call to 9878603703 during working hours is usually the quickest way to speak with our team."],
  ["What are your working hours?", "Our team is available from 9:30 AM to 6:00 PM."],
  ["Do you support both candidates and employers?", "Yes. We speak with candidates seeking overseas employment and with employers or recruitment partners looking for skilled, semi-skilled and operator manpower."],
  ["What should candidates include when contacting you?", "Your full name, phone number, trade or skill, years of experience and, if available, your CV. This helps us understand which roles may suit you."],
  ["Where are you located?", "Crown International Placement Service is based in Mohali, Punjab, India – 160055. Please contact us before visiting so we can make sure the right person is available."],
  ["Does contacting you guarantee a job?", "No. Opportunities depend on confirmed employer requirements and each candidate's suitability. We will always be clear about what is currently available."],
];

function ContactPage() {
  return (
    <main>
      <PageHero crumb="Contact Us" title="Contact Us" accent="We're Here to Help" text="Speak with our team about overseas job opportunities, employer partnerships or any general question about working with Crown International." image={heroImg} imageAlt="World map with flight paths and an aircraft wing above the clouds" imagePosition="object-right" />

      <section className="site-container -mt-px py-12">
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ icon: Icon, title, value, note, href }) => (
            <li key={title} className="bg-background p-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent"><Icon className="size-5" aria-hidden="true" /></div>
              <h2 className="mt-4 text-base font-bold text-brand-deep">{title}</h2>
              {href ? <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} className="mt-1.5 block break-words text-sm font-semibold text-primary hover:underline">{value}</a> : <p className="mt-1.5 text-sm font-semibold text-foreground">{value}</p>}
              <p className="mt-1 text-xs text-muted-foreground">{note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-container grid gap-8 pb-16 lg:grid-cols-[1.35fr_1fr]">
        <div className="rounded-lg border border-border bg-card p-6 sm:p-9">
          <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">Send Us a Message</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Fill in the form below. Online sending is not yet active, so for an immediate response please also call, email or WhatsApp us.</p>
          <div className="mt-7"><ContactForm /></div>
        </div>
        <div className="flex flex-col rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
            <div><h2 className="text-xl font-bold text-brand-deep">Our Location</h2><p className="mt-1 text-sm text-muted-foreground">Mohali, Punjab, India – 160055</p></div>
          </div>
          <iframe title="Map of Mohali, Punjab, India" src="https://www.google.com/maps?q=Mohali,+Punjab+160055,+India&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-6 min-h-72 w-full flex-1 rounded-md border border-border" />
          <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="size-3.5" aria-hidden="true" /> Please contact us before visiting.</p>
          <Button asChild variant="outline" size="lg" className="mt-4 border-primary text-primary">
            <a href="https://www.google.com/maps/search/?api=1&query=Mohali%2C+Punjab+160055" target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>

      <section className="bg-brand-mist py-16">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep">Direct Support</h2>
          <p className="mt-2 text-muted-foreground">Choose the right route for your enquiry.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Support icon={UsersRound} title="For Candidates" text="Questions about overseas opportunities, registration, required documents or the recruitment process." cta={<Link to="/candidates">Register as Candidate <ArrowRight aria-hidden="true" /></Link>} />
            <Support icon={BriefcaseBusiness} title="For Employers / B2B Partners" text="Looking for skilled, semi-skilled or operator manpower, or exploring a recruitment partnership." cta={<Link to="/employers">Employer Enquiries <ArrowRight aria-hidden="true" /></Link>} />
          </div>
        </div>
      </section>

      <section className="site-container py-16">
        <h2 className="text-3xl font-bold text-brand-deep">Frequently Asked Questions</h2>
        <div className="mt-8"><Faq items={faq} /></div>
      </section>

      <section className="bg-brand-deep py-12 text-brand-deep-foreground">
        <div className="site-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div><h2 className="text-3xl font-bold">Prefer to talk it through?</h2><p className="mt-2 text-brand-deep-foreground/75">Message or call our team on 9878603703, 9:30 AM – 6:00 PM.</p></div>
          <Button asChild size="lg" variant="whatsapp"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>
        </div>
      </section>
    </main>
  );
}

function Support({ icon: Icon, title, text, cta }: { icon: typeof UsersRound; title: string; text: string; cta: ReactNode }) {
  return (
    <article className="flex gap-5 rounded-lg border border-border bg-background p-6 sm:p-8">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-primary"><Icon className="size-6" aria-hidden="true" /></div>
      <div>
        <h3 className="text-xl font-bold text-brand-deep">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        <Button asChild variant="outline" className="mt-5 border-primary text-primary">{cta}</Button>
      </div>
    </article>
  );
}
