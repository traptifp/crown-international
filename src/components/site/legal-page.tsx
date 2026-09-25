import type { ReactNode } from "react";

import { Breadcrumb } from "@/components/site/page-parts";

export function LegalPage({ crumb, title, intro, updated, sections }: { crumb: string; title: string; intro: string; updated: string; sections: { id: string; title: string; body: ReactNode }[] }) {
  return (
    <main>
      <section className="border-b border-border bg-brand-mist">
        <div className="site-container py-12 md:py-16">
          <Breadcrumb current={crumb} />
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>
          <p className="mt-4 text-sm font-medium text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>
      <div className="site-container grid gap-10 py-14 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-40">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">On this page</p>
            <ol className="mt-4 space-y-2.5 border-l border-border text-sm">
              {sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-muted-foreground hover:border-accent hover:text-primary">{s.title}</a></li>)}
            </ol>
          </div>
        </nav>
        <article className="max-w-3xl">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-40 border-b border-border py-8 first:pt-0 last:border-0">
              <h2 className="text-xl font-bold text-brand-deep sm:text-2xl"><span className="mr-2 text-accent">{i + 1}.</span>{s.title}</h2>
              <div className="mt-4 space-y-4 leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a:hover]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">{s.body}</div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}

export function ContactLines() {
  return (
    <ul>
      <li>Crown International Placement Service, Mohali, Punjab, India – 160055</li>
      <li>Phone / WhatsApp: <a href="tel:+919878603703">9878603703</a></li>
      <li>Email: <a href="mailto:crownips409@gmail.com">crownips409@gmail.com</a></li>
      <li>Working hours: 9:30 AM – 6:00 PM</li>
    </ul>
  );
}
