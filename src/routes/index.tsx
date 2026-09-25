import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck2, CheckCircle2, Globe2, Landmark, MessageCircle, SearchX, UsersRound, FileText, UserCheck, Plane } from "lucide-react";

import heroImg from "@/assets/home-hero.jpg";
import candidateImg from "@/assets/home-candidate.jpg";
import employerImg from "@/assets/home-employer.jpg";
import aboutImg from "@/assets/home-about.jpg";
import ctaImg from "@/assets/cta-skyline.jpg";
import { Button } from "@/components/ui/button";
import { CountryFlag, categoryIcons } from "@/components/site/page-parts";
import { categories, countries, WHATSAPP_HREF } from "@/lib/site-data";
import { vacancies } from "@/lib/vacancies";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Crown International Placement Service — Overseas Recruitment Since 2016" },
    { name: "description", content: "Government-approved overseas recruitment agency in Mohali, Punjab, placing Indian skilled, semi-skilled and operator manpower in Romania, Croatia, Bulgaria, Albania, Serbia and Moldova." },
    { property: "og:title", content: "Crown International Placement Service — Global Opportunities, Real Careers" },
    { property: "og:description", content: "Overseas recruitment of Indian skilled, semi-skilled and operator manpower for employers across six European countries." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const trust = [
  { icon: CalendarCheck2, label: "Established in 2016" },
  { icon: Landmark, label: "Approved by the Ministry of External Affairs" },
  { icon: Globe2, label: "Six European countries" },
  { icon: UsersRound, label: "Skilled, semi-skilled & operator manpower" },
];

const selectCls = "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function HomePage() {
  const navigate = useNavigate();
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-mist">
        {/* Full panoramic photo at its natural ratio (no cropping); mirrored so the worker sits on the right, away from the text */}
        <div className="relative hidden lg:ml-auto lg:block lg:w-[72%]">
          <img src={heroImg} alt="Skilled worker in a hard hat looking over an international port as a plane flies overhead" width={1600} height={1008} className="block h-auto w-full -scale-x-100" />
          <div className="absolute inset-y-0 left-0 w-2/5 bg-[linear-gradient(90deg,var(--brand-mist),color-mix(in_oklab,var(--brand-mist)_55%,transparent)_45%,transparent)]" aria-hidden="true" />
        </div>
        <div className="site-container py-14 lg:absolute lg:inset-0 lg:flex lg:items-center lg:py-0">
          <div className="max-w-xl">
            <p className="eyebrow">Overseas recruitment & manpower placement</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight text-brand-deep lg:text-6xl xl:text-7xl">Global Opportunities<br /><span className="text-accent">Real Careers</span></h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">We connect skilled and hardworking Indian professionals with genuine overseas employment across Romania, Croatia, Bulgaria, Albania, Serbia and Moldova.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/vacancies">View Vacancies <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary bg-background/80 text-primary"><Link to="/candidates">Register as Candidate <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </div>
        <img src={heroImg} alt="" width={1600} height={1008} className="block h-auto w-full lg:hidden" />
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-background">
        <ul className="site-container grid grid-cols-2 gap-y-6 py-8 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 px-2 lg:justify-center lg:px-6">
              <Icon className="size-9 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-sm font-semibold leading-5 text-brand-deep">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Search */}
      <section className="site-container pt-12">
        <form
          onSubmit={(e) => { e.preventDefault(); navigate({ to: "/vacancies" }); }}
          className="grid gap-4 rounded-lg border border-border bg-brand-mist p-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:items-end"
        >
          <h2 className="text-xl font-bold text-brand-deep lg:self-center">Find Your Next Opportunity</h2>
          <label className="grid gap-1.5 text-xs font-semibold text-muted-foreground">Country
            <select className={selectCls} defaultValue=""><option value="">All countries</option>{countries.map((c) => <option key={c.id}>{c.name}</option>)}</select>
          </label>
          <label className="grid gap-1.5 text-xs font-semibold text-muted-foreground">Job category
            <select className={selectCls} defaultValue=""><option value="">All categories</option>{categories.map((c) => <option key={c.id}>{c.name}</option>)}</select>
          </label>
          <label className="grid gap-1.5 text-xs font-semibold text-muted-foreground">Employment type
            <select className={selectCls} defaultValue=""><option value="">All types</option><option>Full time</option><option>Contract</option></select>
          </label>
          <Button type="submit" size="lg" className="h-11">Search Jobs</Button>
        </form>
      </section>

      {/* Current opportunities */}
      <section className="site-container py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-brand-deep">Current Opportunities</h2>
            <p className="mt-2 text-muted-foreground">Genuine overseas vacancies are published here as employer requirements are confirmed.</p>
          </div>
          <Link to="/vacancies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View all vacancies <ArrowRight className="size-4" /></Link>
        </div>
        {vacancies.length === 0 ? (
          <div className="mt-8 grid items-center gap-8 rounded-lg border border-dashed border-border-strong bg-background p-8 md:grid-cols-[auto_1fr_auto] md:p-10">
            <div className="flex size-16 items-center justify-center rounded-full bg-accent-soft text-accent"><SearchX className="size-7" aria-hidden="true" /></div>
            <div>
              <h3 className="text-xl font-bold text-brand-deep">No vacancies are listed right now</h3>
              <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">New openings are added only when an employer requirement is confirmed. Register your details so our team can contact you when a suitable role in your trade becomes available.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/candidates">Register Your Interest</Link></Button>
              <Button asChild size="lg" variant="whatsapp"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Ask on WhatsApp</a></Button>
            </div>
          </div>
        ) : null}
      </section>

      {/* Countries */}
      <section className="site-container pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-brand-deep">Countries We Serve</h2>
            <p className="mt-2 text-muted-foreground">Recruitment for employers across six European countries.</p>
          </div>
          <Link to="/countries" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Explore countries <ArrowRight className="size-4" /></Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {countries.map((c) => (
            <li key={c.id}>
              <Link to="/countries" className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-card">
                <img src={c.image} alt={c.alt} loading="lazy" width={1024} height={640} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-brand-deep"><CountryFlag id={c.id} className="h-4 w-6" />{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Candidate / Employer split */}
      <section className="site-container grid gap-6 pb-16 lg:grid-cols-2">
        <Pathway
          tone="candidate" eyebrow="For candidates" title="Your Overseas Career Starts Here" image={candidateImg} imageAlt="Smiling technician in a navy work shirt"
          points={["Genuine overseas job opportunities", "Simple registration with basic details", "Guidance through screening and documents", "Support until your departure"]}
          cta={{ label: "Register Now", to: "/candidates" }}
        />
        <Pathway
          tone="employer" eyebrow="For employers / B2B partners" title="Your Reliable Recruitment Partner" image={employerImg} imageAlt="Business handshake in a modern office"
          points={["Skilled, semi-skilled and operator manpower", "Candidate sourcing and screening", "Documentation and deployment coordination", "Long-term recruitment partnerships"]}
          cta={{ label: "Partner With Us", to: "/employers" }}
        />
      </section>

      {/* About */}
      <section className="bg-brand-mist py-16 lg:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About Crown International</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">Committed to People,<br />Committed to Progress</h2>
            <p className="mt-5 leading-7 text-muted-foreground">Crown International Placement Service is an overseas recruitment agency based in Mohali, Punjab, operating since 2016 and approved by the Government of India, Ministry of External Affairs.</p>
            <p className="mt-4 leading-7 text-muted-foreground">We recruit and place Indian skilled, semi-skilled and operator manpower with international employers, guiding every candidate through registration, screening, documentation and deployment.</p>
            <Button asChild size="lg" className="mt-8"><Link to="/about">Learn More About Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
          <img src={aboutImg} alt="Two workers in hi-vis vests reviewing plans at a logistics port at sunset" loading="lazy" width={1408} height={912} className="aspect-[3/2] w-full rounded-lg object-cover shadow-card" />
        </div>
      </section>

      {/* Categories */}
      <section className="site-container py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-brand-deep">Job Categories</h2>
            <p className="mt-2 text-muted-foreground">The sectors we recruit for, based on employer demand.</p>
          </div>
          <Link to="/job-categories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Explore job categories <ArrowRight className="size-4" /></Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((c) => { const Icon = categoryIcons[c.id]; return (
            <li key={c.id}>
              <Link to="/job-categories" className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-3 py-6 text-center text-sm font-semibold text-brand-deep transition-colors hover:border-accent hover:text-primary">
                <Icon className="size-8 text-accent" strokeWidth={1.5} aria-hidden="true" />{c.name}
              </Link>
            </li>
          ); })}
        </ul>
      </section>

      {/* How it works (replaces testimonials) */}
      <section className="border-t border-border bg-background py-16">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-brand-deep">How Placement Works</h2>
          <p className="mt-2 text-muted-foreground">A clear, step-by-step process from first contact to departure.</p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FileText, t: "Register", d: "Share your basic details, trade and experience with our team." },
              { icon: UserCheck, t: "Screening", d: "We match your profile against confirmed employer requirements." },
              { icon: CheckCircle2, t: "Documentation", d: "We guide you through the documents and formalities required." },
              { icon: Plane, t: "Deployment", d: "We coordinate the final steps until you travel to your employer." },
            ].map((s, i) => (
              <li key={s.t} className="relative">
                <span className="text-sm font-bold text-accent">0{i + 1}</span>
                <s.icon className="mt-3 size-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-brand-deep">{s.t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-brand-deep text-brand-deep-foreground">
        <img src={ctaImg} alt="" loading="lazy" width={1920} height={640} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="site-container relative flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Take the Next Step Towards Your Global Career</h2>
            <p className="mt-3 text-brand-deep-foreground/80">Register your details or speak with our team about overseas opportunities.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90"><Link to="/candidates">Register as Candidate <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild size="lg" variant="whatsapp"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Pathway({ tone, eyebrow, title, image, imageAlt, points, cta }: { tone: "candidate" | "employer"; eyebrow: string; title: string; image: string; imageAlt: string; points: string[]; cta: { label: string; to: "/candidates" | "/employers" } }) {
  const isEmployer = tone === "employer";
  return (
    <article className={`relative grid overflow-hidden rounded-lg border border-border sm:grid-cols-[1.25fr_1fr] ${isEmployer ? "bg-success/10" : "bg-accent-soft"}`}>
      <div className="p-7 lg:p-9">
        <p className={`text-xs font-bold uppercase tracking-[0.12em] ${isEmployer ? "text-success" : "text-accent"}`}>{eyebrow}</p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-brand-deep">{title}</h3>
        <ul className="mt-5 space-y-2.5">
          {points.map((p) => <li key={p} className="flex gap-2.5 text-sm text-foreground"><CheckCircle2 className={`mt-0.5 size-4 shrink-0 ${isEmployer ? "text-success" : "text-accent"}`} aria-hidden="true" />{p}</li>)}
        </ul>
        <Button asChild size="lg" variant={isEmployer ? "whatsapp" : "default"} className="mt-7"><Link to={cta.to}>{cta.label} <ArrowRight aria-hidden="true" /></Link></Button>
      </div>
      <img src={image} alt={imageAlt} loading="lazy" width={912} height={912} className="h-64 w-full object-cover sm:h-full" />
    </article>
  );
}
