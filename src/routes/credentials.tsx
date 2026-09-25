import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, Landmark, MessageCircle } from "lucide-react";

import { Breadcrumb } from "@/components/site/page-parts";
import { Button } from "@/components/ui/button";
import { WHATSAPP_HREF } from "@/lib/site-data";

export const Route = createFileRoute("/credentials")({
  head: () => ({ meta: [
    { title: "Credentials & Licence — Crown International Placement Service" },
    { name: "description", content: "Registration Certificate B-3117/PUN/PER/100/5/11122/2025, RA ID RA6347252. Crown International Placement Service is approved by the Government of India, Ministry of External Affairs." },
    { property: "og:title", content: "Credentials & Licence — Crown International" },
    { property: "og:description", content: "Registration details of Crown International Placement Service, approved by the Government of India, Ministry of External Affairs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CredentialsPage,
});

const details: [string, string][] = [
  ["Registration Certificate No.", "B-3117/PUN/PER/100/5/11122/2025"],
  ["RA ID", "RA6347252"],
  ["Entity", "Proprietorship"],
  ["RC Holder", "Rupendra Singh – Proprietor"],
  ["Certificate issued", "17 June 2025"],
  ["Certificate validity", "17 June 2025 – 25 April 2030"],
  ["Worker limit", "100"],
  ["Operating focus", "Overseas recruitment and placement of Indian skilled, semi-skilled and operator manpower."],
];

function CredentialsPage() {
  return (
    <main>
      <section className="border-b border-border bg-brand-mist">
        <div className="site-container py-12 md:py-16">
          <Breadcrumb current="Credentials / Licence" />
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">Credentials / Licence</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Registration details of Crown International Placement Service, an overseas recruitment agency based in Mohali, Punjab, operating since 2016.</p>
        </div>
      </section>

      <section className="site-container grid gap-10 py-14 lg:grid-cols-[1fr_20rem]">
        <div>
          <div className="flex items-start gap-4 rounded-lg border border-primary/20 bg-accent-soft p-5">
            <Landmark className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
            <p className="font-semibold text-brand-deep">Approved by the Government of India, Ministry of External Affairs.</p>
          </div>
          <h2 className="mt-10 text-2xl font-bold text-brand-deep">Registration Details</h2>
          <dl className="mt-5 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            {details.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-muted-foreground">{k}</dt>
                <dd className="break-words font-semibold text-brand-deep">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <aside className="h-fit rounded-lg border border-border bg-brand-mist p-6">
          <FileCheck2 className="size-7 text-primary" aria-hidden="true" />
          <h2 className="mt-4 text-lg font-bold text-brand-deep">Questions about our registration?</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Our team can answer questions about these details during working hours, 9:30 AM – 6:00 PM.</p>
          <div className="mt-5 grid gap-3">
            <Button asChild variant="whatsapp"><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> 9878603703</a></Button>
            <Button asChild variant="outline" className="border-primary text-primary"><Link to="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </aside>
      </section>
    </main>
  );
}
