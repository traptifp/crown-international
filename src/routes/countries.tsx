import { createFileRoute } from "@tanstack/react-router";
import { Compass, FileCheck2, Globe2, Handshake } from "lucide-react";

import heroImg from "@/assets/countries-hero.jpg";
import ctaImg from "@/assets/cta-traveller.jpg";
import { CountryFlag, ImageCta, PageHero, SplitHeading, ValueStrip } from "@/components/site/page-parts";
import { countries } from "@/lib/site-data";

export const Route = createFileRoute("/countries")({
  head: () => ({ meta: [
    { title: "Countries We Serve — Crown International Placement Service" },
    { name: "description", content: "Crown International recruits Indian skilled, semi-skilled and operator manpower for employers in Romania, Croatia, Bulgaria, Albania, Serbia and Moldova." },
    { property: "og:title", content: "Countries We Serve — Crown International" },
    { property: "og:description", content: "Overseas placement across Romania, Croatia, Bulgaria, Albania, Serbia and Moldova." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <main>
      <PageHero
        crumb="Countries We Serve" title="Countries" accent="We Serve"
        text="We connect skilled and semi-skilled Indian professionals with employers across six European countries, helping candidates take a well-guided step towards working abroad."
        image={heroImg} imageAlt="Map of Europe with connection lines and a hand holding a passport"
      />

      <section className="py-16 lg:py-20">
        <div className="site-container">
          <SplitHeading title="Our Focus Countries" text="We currently facilitate recruitment for the following countries, with a focus on operators and similar skilled manpower." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <li key={c.id} className="overflow-hidden rounded-lg border border-border bg-card">
                <img src={c.image} alt={c.alt} loading="lazy" width={1024} height={640} className="aspect-[16/9] w-full object-cover" />
                <div className="p-6">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-brand-deep"><CountryFlag id={c.id} className="h-5 w-8" />{c.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">Available roles depend on confirmed employer requirements and current vacancies.</p>
        </div>
      </section>

      <ValueStrip
        title="Why Consider These Countries?"
        text="Each country offers its own opportunities for workers who want international experience in their trade."
        items={[
          { icon: Globe2, label: "European Work Experience", text: "Build experience with employers in established European industries." },
          { icon: Compass, label: "Roles Across Sectors", text: "Construction, manufacturing, logistics, hospitality and skilled trades." },
          { icon: FileCheck2, label: "Guided Documentation", text: "Support with the paperwork each placement requires." },
          { icon: Handshake, label: "Direct Employer Coordination", text: "We liaise with employers and authorised partners on your behalf." },
        ]}
      />

      <ImageCta image={ctaImg} title="Take the Next Step Towards a Global Career" text="Browse current opportunities or register your details with our team." primary={{ label: "View Vacancies", to: "/vacancies" }} />
    </main>
  );
}
