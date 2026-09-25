import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight, BriefcaseBusiness, Building2, ChevronRight, Factory, HardHat, Hotel, MessageCircle, Sparkles, Truck, Wrench, Cog,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_HREF, type CategoryIcon, type CountryId } from "@/lib/site-data";

export const categoryIcons: Record<CategoryIcon, typeof HardHat> = {
  operators: Cog, construction: HardHat, manufacturing: Factory, logistics: Truck,
  hospitality: Hotel, cleaning: Sparkles, trades: Wrench, other: BriefcaseBusiness,
};
export { Building2 };

/* Flag colours are fixed national colours, not theme tokens. */
export function CountryFlag({ id, className = "h-5 w-8" }: { id: CountryId; className?: string }) {
  const v = (a: string, b: string, c: string) => (<><rect width="1" height="2" fill={a} /><rect x="1" width="1" height="2" fill={b} /><rect x="2" width="1" height="2" fill={c} /></>);
  const h = (a: string, b: string, c: string) => (<><rect width="3" height="0.667" fill={a} /><rect y="0.667" width="3" height="0.667" fill={b} /><rect y="1.333" width="3" height="0.667" fill={c} /></>);
  const flags: Record<CountryId, ReactNode> = {
    romania: v("#002B7F", "#FCD116", "#CE1126"),
    moldova: v("#0046AE", "#FFD200", "#CC092F"),
    bulgaria: h("#FFFFFF", "#00966E", "#D62612"),
    croatia: h("#FF0000", "#FFFFFF", "#171796"),
    serbia: h("#C6363C", "#0C4076", "#FFFFFF"),
    albania: (<><rect width="3" height="2" fill="#E41E20" /><path d="M1.5 0.5 L1.8 0.9 L1.7 1.5 L1.5 1.35 L1.3 1.5 L1.2 0.9 Z" fill="#000" /></>),
  };
  return <svg viewBox="0 0 3 2" className={`${className} shrink-0 rounded-[2px] ring-1 ring-border`} aria-hidden="true" preserveAspectRatio="none">{flags[id]}</svg>;
}

export function Breadcrumb({ current, parent }: { current: string; parent?: { label: string; to: "/vacancies" } }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Link to="/" className="hover:text-primary">Home</Link>
      <ChevronRight className="size-3.5" aria-hidden="true" />
      {parent ? <><Link to={parent.to} className="hover:text-primary">{parent.label}</Link><ChevronRight className="size-3.5" aria-hidden="true" /></> : null}
      <span aria-current="page" className="text-foreground">{current}</span>
    </nav>
  );
}

export function PageHero({ crumb, eyebrow, title, accent, text, image, imageAlt, children, imagePosition = "object-center" }: { crumb: string; eyebrow?: string; title: ReactNode; accent?: ReactNode; text: string; image: string; imageAlt: string; children?: ReactNode; imagePosition?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-mist">
      <img src={image} alt={imageAlt} width={1408} height={912} className={`absolute inset-y-0 right-0 hidden h-full w-[60%] object-cover md:block ${imagePosition}`} />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--brand-mist)_40%,color-mix(in_oklab,var(--brand-mist)_70%,transparent)_54%,transparent_72%)] md:block" aria-hidden="true" />
      <div className="site-container relative py-12 md:min-h-[440px] md:py-20 lg:min-h-[500px] lg:py-24">
        <Breadcrumb current={crumb} />
        <div className="mt-10 max-w-xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-deep sm:text-5xl lg:text-[3.75rem]">
            {title}{accent ? <><br /><span className="text-accent">{accent}</span></> : null}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">{text}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
      <img src={image} alt="" width={1408} height={912} className={`aspect-[16/10] w-full object-cover md:hidden ${imagePosition}`} />
    </section>
  );
}

export function ProcessSteps({ title, text, steps }: { title: string; text: string; steps: { icon: typeof HardHat; label: string; text: string }[] }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="site-container">
        <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{text}</p>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map(({ icon: Icon, label, text: t }, i) => (
            <li key={label} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-sm font-bold text-primary">{i + 1}</span>
                <Icon className="size-9 text-accent" strokeWidth={1.5} aria-hidden="true" />
                {i < steps.length - 1 ? <ArrowRight className="ml-auto hidden size-5 text-accent/60 lg:block" aria-hidden="true" /> : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-deep">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ValueStrip({ title, text, items }: { title: string; text: string; items: { icon: typeof HardHat; label: string; text: string }[] }) {
  return (
    <section className="bg-brand-mist py-16 lg:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">{title}</h2>
          <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
        </div>
        <div className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border-strong/60">
          {items.map(({ icon: Icon, label, text: t }) => (
            <div key={label} className="px-6 text-center">
              <Icon className="mx-auto size-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-brand-deep">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageCta({ image, eyebrow, title, text, primary }: { image: string; eyebrow?: string; title: string; text: string; primary: { label: string; to: "/vacancies" | "/candidates" | "/contact" | "/employers" } }) {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-brand-deep-foreground">
      <img src={image} alt="" loading="lazy" width={1920} height={640} className="absolute inset-0 h-full w-full object-cover object-right" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--brand-deep)_30%,color-mix(in_oklab,var(--brand-deep)_55%,transparent)_65%,transparent)]" aria-hidden="true" />
      <div className="site-container relative py-16 lg:py-20">
        <div className="max-w-xl">
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-sky">{eyebrow}</p> : null}
          <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-brand-deep-foreground/80">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link to={primary.to}>{primary.label} <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SplitHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <h2 className="text-3xl font-bold text-brand-deep sm:text-4xl">{title}</h2>
      <p className="max-w-md text-muted-foreground md:text-right">{text}</p>
    </div>
  );
}
