import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, ShieldCheck, UsersRound, Wrench } from "lucide-react";

import heroImg from "@/assets/categories-hero.jpg";
import ctaImg from "@/assets/cta-skyline.jpg";
import { ImageCta, PageHero, SplitHeading, ValueStrip, categoryIcons } from "@/components/site/page-parts";
import { categories } from "@/lib/site-data";

export const Route = createFileRoute("/job-categories")({
  head: () => ({ meta: [
    { title: "Job Categories — Crown International Placement Service" },
    { name: "description", content: "Overseas recruitment categories including operators, construction, manufacturing, logistics, hospitality, cleaning and skilled trades." },
    { property: "og:title", content: "Job Categories — Crown International" },
    { property: "og:description", content: "The sectors Crown International recruits skilled, semi-skilled and operator manpower for." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <main>
      <PageHero
        crumb="Job Categories" title="Job" accent="Categories"
        text="We recruit skilled, semi-skilled and operator manpower across the sectors where international employers most often need dependable workers."
        image={heroImg} imageAlt="Workers from different trades standing together overlooking a European city"
      />

      <section className="py-16 lg:py-20">
        <div className="site-container">
          <SplitHeading title="Explore Job Categories" text="The sectors below reflect the roles we typically recruit for. Specific openings depend on confirmed employer requirements." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => { const Icon = categoryIcons[c.id]; return (
              <li key={c.id} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
                <img src={c.image} alt={c.alt} loading="lazy" width={1008} height={656} className="aspect-[3/2] w-full object-cover" />
                <div className="p-5">
                  <h3 className="flex items-center gap-2.5 font-bold text-brand-deep"><Icon className="size-5 text-accent" aria-hidden="true" />{c.name}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{c.text}</p>
                </div>
              </li>
            ); })}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg bg-accent-soft px-6 py-5">
            <p className="font-semibold text-brand-deep">Don’t see your trade listed?</p>
            <Link to="/candidates" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Register your skills with us <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <ValueStrip
        title="Why These Categories?"
        text="We focus on sectors that match the skills of Indian workers and the needs of our partner employers."
        items={[
          { icon: Wrench, label: "Practical, Hands-on Roles", text: "Trades and operator work where experience counts." },
          { icon: Globe2, label: "Six European Countries", text: "Romania, Croatia, Bulgaria, Albania, Serbia and Moldova." },
          { icon: UsersRound, label: "Skilled & Semi-skilled", text: "Opportunities for different levels of experience." },
          { icon: ShieldCheck, label: "MEA-Approved Agency", text: "Recruitment through a registered agency." },
        ]}
      />

      <ImageCta image={ctaImg} title="Find the Right Opportunity in Your Field" text="Browse current vacancies or get in touch to learn more about working abroad." primary={{ label: "View Vacancies", to: "/vacancies" }} />
    </main>
  );
}
