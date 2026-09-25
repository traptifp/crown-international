import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList, Eye, FileCheck2, Gem, LifeBuoy, Plane, Search, Target, UserPlus, Users } from "lucide-react";

import heroImg from "@/assets/about-hero.jpg";
import storyImg from "@/assets/about-story.jpg";
import servicesImg from "@/assets/about-services.jpg";
import ctaImg from "@/assets/cta-skyline.jpg";
import { ImageCta, PageHero } from "@/components/site/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — Crown International Placement Service" },
    { name: "description", content: "Since 2016, Crown International Placement Service has recruited Indian skilled, semi-skilled and operator manpower for overseas employers. Approved by the Ministry of External Affairs." },
    { property: "og:title", content: "About Crown International Placement Service" },
    { property: "og:description", content: "An MEA-approved overseas recruitment agency in Mohali, Punjab, operating since 2016." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

const values = ["Integrity and transparency", "Candidate welfare", "Clear communication with employers", "Compliance with applicable requirements", "Long-term partnerships"];
const services = [
  { icon: UserPlus, t: "Recruitment of skilled, semi-skilled and operator manpower" },
  { icon: Users, t: "Coordination with international employers and authorised partners" },
  { icon: Search, t: "Candidate screening against employer requirements" },
  { icon: FileCheck2, t: "Guidance on documentation and formalities" },
  { icon: Plane, t: "Assistance through to deployment" },
];
const steps = [
  { icon: ClipboardList, t: "Registration", d: "Candidates share basic details, trade and experience." },
  { icon: Search, t: "Screening", d: "Profiles are shortlisted against employer requirements." },
  { icon: FileCheck2, t: "Documentation", d: "We guide candidates through required documents." },
  { icon: Plane, t: "Deployment", d: "Travel and joining are coordinated with the employer." },
  { icon: LifeBuoy, t: "Ongoing Support", d: "Our team remains available for guidance and questions." },
];

function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About Us" eyebrow="About Crown International"
        title={<>People.<br />Opportunities.</>} accent="A Brighter Tomorrow."
        text="Crown International Placement Service is a government-approved overseas recruitment agency, operating since 2016, connecting Indian skilled, semi-skilled and operator manpower with genuine international opportunities."
        image={heroImg} imageAlt="Traveller with a suitcase watching aircraft through an airport window at sunrise"
      />

      <section className="py-16 lg:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <img src={storyImg} alt="Tidy desk with a laptop and notebook overlooking a city skyline" loading="lazy" width={1200} height={800} className="aspect-[3/2] w-full rounded-lg object-cover" />
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">A Trusted Recruitment Partner Since 2016</h2>
            <p className="mt-5 leading-7 text-muted-foreground">Crown International Placement Service was established in Mohali, Punjab in 2016 with a clear purpose: to create genuine overseas employment pathways for skilled and hardworking Indian professionals.</p>
            <p className="mt-4 leading-7 text-muted-foreground">We are registered with the Government of India, Ministry of External Affairs, and focus on recruitment for employers in Romania, Croatia, Bulgaria, Albania, Serbia and Moldova — always with honest communication and care for the candidates we represent.</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 lg:py-20">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">Our Mission, Vision & Values</h2>
          <p className="mt-2 text-muted-foreground">The principles that guide how we work with candidates and employers.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg bg-card p-8 shadow-card">
              <Target className="size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-brand-deep">Our Mission</h3>
              <p className="mt-3 leading-7 text-muted-foreground">To connect Indian workers with genuine overseas employment through ethical, transparent and well-guided recruitment.</p>
            </article>
            <article className="rounded-lg bg-card p-8 shadow-card">
              <Eye className="size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-brand-deep">Our Vision</h3>
              <p className="mt-3 leading-7 text-muted-foreground">To be a dependable recruitment partner for international employers and a trusted first step for candidates seeking work abroad.</p>
            </article>
            <article className="rounded-lg bg-card p-8 shadow-card">
              <Gem className="size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-brand-deep">Our Values</h3>
              <ul className="mt-3 space-y-2">
                {values.map((v) => <li key={v} className="flex gap-2.5 text-sm text-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{v}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">Reliable Overseas Recruitment Services</h2>
            <p className="mt-5 leading-7 text-muted-foreground">We supply Indian skilled, semi-skilled and operator manpower to international employers, matching the right people to each requirement and supporting them through the full recruitment process.</p>
            <ul className="mt-7 space-y-4">
              {services.map(({ icon: Icon, t }) => <li key={t} className="flex items-start gap-3 text-foreground"><Icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />{t}</li>)}
            </ul>
          </div>
          <img src={servicesImg} alt="Recruitment team reviewing candidate documents at a meeting table" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-lg object-cover shadow-card" />
        </div>
      </section>

      <section className="border-t border-border bg-brand-mist/60 py-16 lg:py-20">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">How We Work</h2>
          <p className="mt-2 text-muted-foreground">A simple, transparent process for candidates and employers.</p>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="text-center lg:text-left">
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                  <span className="text-2xl font-bold text-accent">0{i + 1}</span>
                  <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-primary"><Icon className="size-6" aria-hidden="true" /></span>
                </div>
                <h3 className="mt-4 font-bold text-brand-deep">{t}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ImageCta image={ctaImg} eyebrow="Let's build better futures together" title="Start Your Global Journey" text="Explore current opportunities or get in touch with our team." primary={{ label: "View Vacancies", to: "/vacancies" }} />
    </main>
  );
}
