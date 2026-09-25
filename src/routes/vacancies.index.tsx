import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Globe2, Mail, MessageCircle, Phone, Search, SearchX } from "lucide-react";

import heroImg from "@/assets/vacancies-hero.jpg";
import ctaImg from "@/assets/cta-traveller.jpg";
import { Button } from "@/components/ui/button";
import { CountryFlag, ImageCta, PageHero, categoryIcons } from "@/components/site/page-parts";
import { WHATSAPP_HREF, categories, countries } from "@/lib/site-data";
import { employmentTypes, vacancies } from "@/lib/vacancies";

export const Route = createFileRoute("/vacancies/")({
  head: () => ({ meta: [
    { title: "Job Vacancies Abroad — Crown International Placement Service" },
    { name: "description", content: "Browse overseas vacancies in Romania, Croatia, Bulgaria, Albania, Serbia and Moldova, or register your interest with Crown International." },
    { property: "og:title", content: "Overseas Job Vacancies — Crown International" },
    { property: "og:description", content: "Current overseas opportunities for Indian skilled, semi-skilled and operator manpower." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: VacanciesPage,
});

const selectCls = "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30";

function VacanciesPage() {
  const [q, setQ] = useState(""); const [country, setCountry] = useState(""); const [category, setCategory] = useState(""); const [type, setType] = useState("");
  const results = useMemo(() => vacancies.filter((v) =>
    (!country || v.country === country) && (!category || v.category === category) && (!type || v.employmentType === type) &&
    (!q || `${v.title} ${v.summary}`.toLowerCase().includes(q.toLowerCase()))), [q, country, category, type]);

  return (
    <main>
      <PageHero crumb="Vacancies" title="Job" accent="Vacancies" imagePosition="object-left"
        text="Overseas opportunities for Indian skilled, semi-skilled and operator manpower, listed only when an employer requirement is confirmed."
        image={heroImg} imageAlt="Indian passport resting on a world map on a recruitment desk" />

      <div className="site-container relative z-10 -mt-8 md:-mt-12">
        <form role="search" onSubmit={(e) => e.preventDefault()} className="grid gap-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto] lg:items-end lg:p-6">
          <label className="text-sm font-medium text-brand-deep">Keyword<input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Job title or skill" className={selectCls} /></label>
          <label className="text-sm font-medium text-brand-deep">Country<select value={country} onChange={(e) => setCountry(e.target.value)} className={selectCls}><option value="">All countries</option>{countries.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
          <label className="text-sm font-medium text-brand-deep">Job Category<select value={category} onChange={(e) => setCategory(e.target.value)} className={selectCls}><option value="">All categories</option>{categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
          <label className="text-sm font-medium text-brand-deep">Employment Type<select value={type} onChange={(e) => setType(e.target.value)} className={selectCls}><option value="">All types</option>{employmentTypes.map((t) => <option key={t}>{t}</option>)}</select></label>
          <Button type="submit" size="lg" className="sm:col-span-2 lg:col-span-1"><Search aria-hidden="true" /> Search</Button>
        </form>
      </div>

      <section className="py-16 lg:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-bold text-brand-deep" aria-live="polite">{vacancies.length ? `${results.length} Job Opportunit${results.length === 1 ? "y" : "ies"}` : "Current Opportunities"}</h2>
            {results.length ? (
              <ul className="mt-6 space-y-4">
                {results.map((v) => (
                  <li key={v.slug} className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center">
                    {v.image ? <img src={v.image} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover sm:w-40" /> : null}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-brand-deep">{v.title}</h3>
                      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2"><CountryFlag id={v.country} className="h-3.5 w-5" />{countries.find((c) => c.id === v.country)?.name}</span>
                        <span>{categories.find((c) => c.id === v.category)?.name}</span><span>{v.employmentType}</span>
                      </p>
                    </div>
                    <Button asChild variant="outline"><Link to="/vacancies/$slug" params={{ slug: v.slug }}>View Details <ArrowRight aria-hidden="true" /></Link></Button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-lg border border-border bg-card p-8 sm:p-10">
                <SearchX className="size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-brand-deep">{vacancies.length ? "No vacancies match these filters" : "No vacancies listed right now"}</h3>
                <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                  {vacancies.length ? "Try a different country, category or keyword." : "Vacancies are published here once an overseas employer confirms its requirements. Register your interest now and our team can contact you when a suitable role in your trade becomes available."}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild size="lg"><Link to="/candidates">Register Your Interest <ArrowRight aria-hidden="true" /></Link></Button>
                  <Button asChild size="lg" variant="outline"><Link to="/contact">Contact Us</Link></Button>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6" aria-label="Help and quick links">
            <div className="rounded-lg bg-brand-mist p-6">
              <h2 className="text-lg font-bold text-brand-deep">Need Assistance?</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Talk to our team about the roles we recruit for, 9:30 AM – 6:00 PM.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="tel:+919878603703" className="flex items-center gap-2 font-semibold text-brand-deep hover:text-primary"><Phone className="size-4 text-primary" aria-hidden="true" />9878603703</a></li>
                <li><a href="mailto:crownips409@gmail.com" className="flex items-center gap-2 text-brand-deep hover:text-primary"><Mail className="size-4 text-primary" aria-hidden="true" />crownips409@gmail.com</a></li>
              </ul>
              <Button asChild variant="whatsapp" className="mt-5 w-full"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>
            </div>
            <nav aria-label="Explore" className="rounded-lg border border-border p-6">
              <h2 className="text-lg font-bold text-brand-deep">Explore</h2>
              <ul className="mt-3 divide-y divide-border text-sm">
                <li><Link to="/countries" className="flex items-center gap-3 py-3 hover:text-primary"><Globe2 className="size-4 text-accent" aria-hidden="true" />Countries We Serve</Link></li>
                <li><Link to="/job-categories" className="flex items-center gap-3 py-3 hover:text-primary"><BriefcaseBusiness className="size-4 text-accent" aria-hidden="true" />Job Categories</Link></li>
                <li><Link to="/employers" className="flex items-center gap-3 py-3 hover:text-primary"><ArrowRight className="size-4 text-accent" aria-hidden="true" />For Employers</Link></li>
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-brand-mist py-16 lg:py-20">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><h2 className="text-3xl font-bold text-brand-deep">Browse by Job Category</h2><p className="mt-2 text-muted-foreground">The sectors we typically recruit for.</p></div>
            <Link to="/job-categories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View all categories <ArrowRight className="size-4" /></Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((c) => { const Icon = categoryIcons[c.id]; return (
              <li key={c.id}><button type="button" onClick={() => { setCategory(c.id); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex w-full flex-col items-center gap-3 rounded-lg border border-border bg-card px-4 py-6 text-center text-sm font-medium text-brand-deep transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
                <Icon className="size-8 text-accent" strokeWidth={1.5} aria-hidden="true" />{c.name}
              </button></li>
            ); })}
          </ul>
        </div>
      </section>

      <ImageCta image={ctaImg} title="Take the Next Step Towards a Global Career" text="Register your details so our team can reach you when suitable roles open." primary={{ label: "Register as Candidate", to: "/candidates" }} />
    </main>
  );
}
