import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2, Home, MessageCircle, SearchX, Wallet } from "lucide-react";

import ctaImg from "@/assets/cta-skyline.jpg";
import { Button } from "@/components/ui/button";
import { CandidateForm } from "@/components/site/forms";
import { Breadcrumb, CountryFlag, ImageCta } from "@/components/site/page-parts";
import { WHATSAPP_HREF, categories, countries } from "@/lib/site-data";
import { getVacancy, vacancies } from "@/lib/vacancies";

export const Route = createFileRoute("/vacancies/$slug")({
  loader: ({ params }) => {
    const vacancy = getVacancy(params.slug);
    if (!vacancy) throw notFound();
    return { vacancy };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Opportunity not available — Crown International" }, { name: "robots", content: "noindex" }] };
    const v = loaderData.vacancy;
    const t = `${v.title} — Crown International Vacancies`;
    return { meta: [{ title: t }, { name: "description", content: v.summary }, { property: "og:title", content: t }, { property: "og:description", content: v.summary }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  notFoundComponent: VacancyNotFound,
  component: VacancyDetail,
});

function VacancyNotFound() {
  return (
    <main className="bg-brand-mist py-20 lg:py-28">
      <div className="site-container">
        <Breadcrumb parent={{ label: "Vacancies", to: "/vacancies" }} current="Not available" />
        <div className="mt-10 max-w-2xl rounded-lg border border-border bg-card p-8 sm:p-12">
          <SearchX className="size-11 text-accent" strokeWidth={1.5} aria-hidden="true" />
          <h1 className="mt-6 text-3xl font-extrabold text-brand-deep sm:text-4xl">Opportunity not found</h1>
          <p className="mt-4 leading-7 text-muted-foreground">This vacancy is no longer available or the link is incorrect. Browse current vacancies, or register your interest so our team can contact you when a suitable role opens.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/vacancies">Browse Vacancies <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/candidates">Register Your Interest</Link></Button>
            <Button asChild size="lg" variant="whatsapp"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp</a></Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-brand-deep">{title}</h2>
      <ul className="mt-5 space-y-3">{items.map((i) => <li key={i} className="flex gap-3 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />{i}</li>)}</ul>
    </section>
  );
}

function VacancyDetail() {
  const { vacancy: v } = Route.useLoaderData();
  const country = countries.find((c) => c.id === v.country)!;
  const category = categories.find((c) => c.id === v.category)!;
  const posted = new Date(v.postedOn).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const related = vacancies.filter((r) => r.slug !== v.slug && (r.category === v.category || r.country === v.country)).slice(0, 3);
  const details: [string, string][] = [["Country", country.name], ["Job Category", category.name], ["Employment Type", v.employmentType], ...(v.salaryNote ? [["Salary", v.salaryNote] as [string, string]] : []), ...(v.accommodation ? [["Accommodation", v.accommodation] as [string, string]] : []), ["Posted On", posted]];

  return (
    <main>
      <section className="relative overflow-hidden bg-brand-mist">
        {v.image ? <img src={v.image} alt="" className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover md:block" /> : null}
        {v.image ? <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--brand-mist)_45%,transparent_75%)] md:block" aria-hidden="true" /> : null}
        <div className="site-container relative py-12 lg:py-20">
          <Breadcrumb parent={{ label: "Vacancies", to: "/vacancies" }} current={v.title} />
          <h1 className="mt-8 max-w-2xl text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">{v.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="flex items-center gap-2 font-semibold text-brand-deep"><CountryFlag id={v.country} />{country.name}</span>
            <span className="rounded bg-accent-soft px-3 py-1 text-primary">{category.name}</span>
            <span className="rounded bg-accent-soft px-3 py-1 text-primary">{v.employmentType}</span>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {v.salaryNote ? <li className="flex items-center gap-2"><Wallet className="size-5 text-accent" aria-hidden="true" />{v.salaryNote}</li> : null}
            {v.accommodation ? <li className="flex items-center gap-2"><Home className="size-5 text-accent" aria-hidden="true" />{v.accommodation}</li> : null}
            <li className="flex items-center gap-2"><CalendarDays className="size-5 text-accent" aria-hidden="true" />Posted {posted}</li>
          </ul>
        </div>
      </section>

      <div className="site-container grid gap-12 py-16 lg:grid-cols-[1fr_380px] lg:py-20">
        <article className="max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-deep">Job Description</h2>
          <p className="mt-4 leading-8 text-muted-foreground">{v.description}</p>
          <List title="Key Responsibilities" items={v.responsibilities} />
          <List title="Requirements" items={v.requirements} />
          {v.benefits?.length ? <List title="Benefits" items={v.benefits} /> : null}
        </article>
        <aside className="space-y-6">
          <section id="apply" className="rounded-lg bg-brand-mist p-6 sm:p-7">
            <h2 className="text-xl font-bold text-brand-deep">Apply for This Position</h2>
            <p className="mt-2 text-sm text-muted-foreground">Share your details and CV for this role.</p>
            <div className="mt-6"><CandidateForm prefix="apply" submitLabel="Submit Application" /></div>
          </section>
          <section className="rounded-lg border border-border p-6">
            <h2 className="text-lg font-bold text-brand-deep">Job Details</h2>
            <dl className="mt-4 divide-y divide-border text-sm">{details.map(([k, val]) => <div key={k} className="flex justify-between gap-4 py-2.5"><dt className="font-medium text-brand-deep">{k}</dt><dd className="text-right text-muted-foreground">{val}</dd></div>)}</dl>
          </section>
        </aside>
      </div>

      {related.length ? (
        <section className="border-t border-border bg-brand-mist py-16">
          <div className="site-container">
            <h2 className="text-3xl font-bold text-brand-deep">Related Vacancies</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <li key={r.slug} className="rounded-lg border border-border bg-card p-5"><h3 className="font-bold text-brand-deep">{r.title}</h3><p className="mt-1 text-sm text-muted-foreground">{countries.find((c) => c.id === r.country)?.name} · {r.employmentType}</p><Link to="/vacancies/$slug" params={{ slug: r.slug }} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View Details <ArrowRight className="size-4" /></Link></li>)}
            </ul>
          </div>
        </section>
      ) : null}

      <ImageCta image={ctaImg} title="Ready to Build Your International Career?" text="Apply now or browse other opportunities with our team." primary={{ label: "Browse All Vacancies", to: "/vacancies" }} />
    </main>
  );
}
