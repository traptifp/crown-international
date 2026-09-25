import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  FileCheck2,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import logoAsset from "@/assets/crown-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const mainNavigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vacancies", to: "/vacancies" },
  { label: "Countries", to: "/countries" },
  { label: "Job Categories", to: "/job-categories" },
  { label: "Candidates", to: "/candidates" },
  { label: "Employers / B2B", to: "/employers" },
  { label: "Contact Us", to: "/contact" },
] as const;

const whatsappHref = "https://wa.me/919878603703";

export function UtilityBar() {
  return (
    <div className="bg-brand-deep text-brand-deep-foreground">
      <div className="site-container flex min-h-9 items-center justify-between gap-6 py-2 text-[0.6875rem] font-medium sm:text-xs">
        <div className="flex min-w-0 items-center gap-2">
          <FileCheck2 className="size-3.5 shrink-0 text-brand-sky" aria-hidden="true" />
          <span className="truncate">Reg. No. B-3117/PUN/PER/100/5/11122/2025</span>
          <span className="hidden text-brand-deep-foreground/40 md:inline" aria-hidden="true">|</span>
          <span className="hidden lg:inline">Approved by the Government of India, Ministry of External Affairs</span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Clock3 className="size-3.5 text-brand-sky" aria-hidden="true" />
          <span className="hidden sm:inline">Working Hours:</span>
          <span>9:30 AM – 6:00 PM</span>
        </div>
      </div>
    </div>
  );
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="Crown International Placement Service"
      className={compact ? "h-12 w-auto max-w-52 object-contain" : "h-14 w-auto max-w-60 object-contain lg:h-16"}
    />
  );
}

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"} className={mobile ? "flex flex-col" : "hidden items-stretch xl:flex"}>
      {mainNavigation.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeOptions={{ exact: item.to === "/" }}
          className={mobile
            ? "border-b border-border py-3.5 text-base font-semibold text-foreground transition-colors hover:text-primary"
            : "relative flex items-center px-2.5 text-[0.8125rem] font-semibold text-foreground transition-colors after:absolute after:inset-x-2.5 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-primary hover:after:scale-x-100"
          }
          activeProps={{ className: mobile ? "text-primary" : "text-primary after:scale-x-100" }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-header backdrop-blur-sm">
      <UtilityBar />
      <div className="site-container flex h-[4.75rem] items-center justify-between gap-4 lg:h-[5.25rem]">
        <Link to="/" aria-label="Crown International home" className="shrink-0">
          <BrandLogo />
        </Link>

        <NavigationLinks />

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild size="lg" className="hidden lg:inline-flex">
            <Link to="/candidates">Register Now <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Button asChild size="icon" variant="whatsapp" aria-label="Chat with Crown on WhatsApp">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open navigation menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(90vw,24rem)] overflow-y-auto p-0">
              <SheetHeader className="border-b border-border px-6 py-5 text-left">
                <SheetTitle><BrandLogo compact /></SheetTitle>
                <SheetDescription>Overseas recruitment and manpower placement</SheetDescription>
              </SheetHeader>
              <div className="px-6 py-4">
                <SheetClose asChild>
                  <div><NavigationLinks mobile /></div>
                </SheetClose>
                <div className="mt-6 grid gap-3">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                      <Link to="/candidates">Register Now <ArrowRight aria-hidden="true" /></Link>
                    </Button>
                  </SheetClose>
                  <Button asChild size="lg" variant="whatsapp" className="w-full">
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle aria-hidden="true" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
                <div className="mt-8 space-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
                  <a href="tel:+919878603703" className="flex items-center gap-3 hover:text-primary"><Phone className="size-4 text-accent" /> 9878603703</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vacancies", to: "/vacancies" },
  { label: "Countries", to: "/countries" },
  { label: "Job Categories", to: "/job-categories" },
] as const;

const serviceLinks = [
  { label: "Candidates", to: "/candidates" },
  { label: "Employers / B2B", to: "/employers" },
  { label: "Credentials / Licence", to: "/credentials" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.25fr] lg:gap-12">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-xs text-sm font-medium text-muted-foreground">People <span className="text-border-strong">|</span> Opportunities <span className="text-border-strong">|</span> A Brighter Tomorrow</p>
          <div className="mt-5 flex items-center gap-2 text-sm text-primary"><ShieldCheck className="size-4" /> Government-approved recruitment</div>
        </div>

        <FooterLinkGroup title="Quick Links" links={quickLinks} />
        <FooterLinkGroup title="Services" links={serviceLinks} />

        <div>
          <h2 className="text-sm font-bold text-brand-deep">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" /> Mohali, Punjab, India – 160055</li>
            <li><a href="tel:+919878603703" className="flex items-center gap-3 hover:text-primary"><Phone className="size-4 shrink-0 text-accent" /> 9878603703</a></li>
            <li className="flex items-center gap-3"><Clock3 className="size-4 shrink-0 text-accent" /> 9:30 AM – 6:00 PM</li>
          </ul>
          <Button asChild variant="whatsapp" className="mt-5">
            <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
      <div className="border-t border-border bg-brand-mist/60">
        <div className="site-container flex flex-col gap-3 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Crown International Placement Service. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }: { title: string; links: ReadonlyArray<{ label: string; to: string }> }) {
  return (
    <div>
      <h2 className="text-sm font-bold text-brand-deep">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="transition-colors hover:text-primary">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FoundationPreview() {
  return (
    <main>
      <section className="border-b border-border bg-brand-mist/55 py-14 sm:py-20">
        <div className="site-container max-w-4xl">
          <p className="eyebrow">Shared website foundation</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-brand-deep sm:text-5xl">Crown’s design system and site frame are ready for review.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">This temporary review screen demonstrates the global navigation, footer, typography, buttons and reusable content patterns. The Home page has not been built yet.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Primary action <ArrowRight aria-hidden="true" /></Button>
            <Button variant="outline" size="lg">Secondary action</Button>
            <Button variant="whatsapp" size="lg"><MessageCircle aria-hidden="true" /> WhatsApp action</Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="site-container">
          <SectionHeading eyebrow="Core components" title="A clear, credible visual language" description="Reusable patterns keep every future page consistent without making each page feel identical." />
          <div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            <Feature icon={ShieldCheck} title="Trust-led" text="Verified information, strong hierarchy and restrained visual details." />
            <Feature icon={BriefcaseBusiness} title="Professional" text="Purposeful layouts designed for candidates and international employers." />
            <Feature icon={MessageCircle} title="Easy to reach" text="Clear registration, contact and WhatsApp actions across the site." />
          </div>
        </div>
      </section>

      <CallToAction title="People. Opportunities. A Brighter Tomorrow." text="The shared foundation is ready. Home and all content pages remain paused for review." />
    </main>
  );
}

export function PendingPage({ title }: { title: string }) {
  return (
    <main className="min-h-[42rem] bg-brand-mist/45 py-20">
      <div className="site-container max-w-3xl text-center">
        <p className="eyebrow">Page design pending foundation review</p>
        <h1 className="mt-4 text-4xl font-bold text-brand-deep sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">This page will be built only after the shared design system, navigation and footer are approved.</p>
      </div>
    </main>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold text-brand-deep sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof ShieldCheck; title: string; text: string }) {
  return (
    <article className="bg-background p-7">
      <div className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-accent"><Icon className="size-5" aria-hidden="true" /></div>
      <h3 className="mt-5 text-lg font-bold text-brand-deep">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}

export function CallToAction({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-brand-deep py-12 text-brand-deep-foreground">
      <div className="site-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-brand-deep-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="secondary"><Link to="/candidates">Register as a Candidate <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="whatsapp"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle /> Chat on WhatsApp</a></Button>
        </div>
      </div>
    </section>
  );
}
