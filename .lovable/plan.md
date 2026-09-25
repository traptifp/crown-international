# Crown International Placement Service — Website Plan

A professional, spacious overseas-recruitment website matching the approved reference screenshots. No accounts, no dashboards, no invented facts.

## 1. Pages and routes

| Page | Path |
| --- | --- |
| Home | `/` |
| About Us | `/about` |
| Vacancies | `/vacancies` |
| Vacancy detail (reusable template) | `/vacancies/$slug` |
| Countries We Serve | `/countries` |
| Job Categories | `/job-categories` |
| Candidates | `/candidates` |
| Employers / B2B Partners | `/employers` |
| Credentials / Licence (footer only) | `/credentials` |
| Contact Us | `/contact` |
| Privacy Policy | `/privacy` |
| Terms & Conditions | `/terms` |

Main navigation: Home, About Us, Vacancies, Countries, Job Categories, Candidates, Employers / B2B, Contact Us — plus one "Register Now" button and one WhatsApp action. Credentials lives in the footer.

## 2. Design system

- White dominant; blue (#1E3A8A primary, #3B82F6 accent) for brand and links; dark navy (#0F172A) for deep bands and text; light grey (#F1F5F9) only to separate the occasional section; green (#22C55E) reserved for WhatsApp/success.
- Type: one strong geometric sans (headings tight and confident, body comfortable), clear H1→H3 hierarchy, restrained sizes.
- Generous vertical spacing, modest corner rounding, hairline borders, very soft shadows only where a card needs lift. No gradients-as-decoration, no glass, no glow, minimal motion (short fades on scroll at most).
- Shared pieces: top utility bar, header/nav with mobile drawer, footer, section heading block, feature/icon row, step/process row, image+text split band, card (category, country, vacancy), accordion FAQ, form field set, dark CTA band, breadcrumb, empty state.

## 3. Global chrome

- **Utility bar** (thin, quiet): Reg. No. B-3117/PUN/PER/100/5/11122/2025 · Approved by the Government of India, Ministry of External Affairs · Working Hours 9:30 AM – 6:00 PM · social icons. Collapses to essentials on mobile.
- **Header:** supplied logo used as-is, nav, Register Now, WhatsApp button. Sticky, current page underlined.
- **Footer:** logo + tagline "People | Opportunities | A Brighter Tomorrow", quick links (incl. Credentials / Licence), contact block, social, WhatsApp button, copyright, Privacy and Terms.

## 4. Page intent (layouts vary; no repeated template)

- **Home** — hero with clear positioning and primary CTAs; short trust strip drawn only from verified facts (since 2016, MEA-approved, six countries); what we do; countries preview; job categories preview; candidates vs employers split; how we work; closing CTA band.
- **About Us** — headline statement, our story since 2016, mission/vision/values, what we do with image band, how we work steps, CTA.
- **Vacancies** — hero, filter row (country / category / employment type), results list, professional empty state at launch ("No vacancies listed right now — register your interest"), browse-by-category strip, sidebar with assistance/quick links, CTA.
- **Vacancy detail** — breadcrumb, title with country/category/type tags, description, responsibilities, requirements, benefits, sticky application form, job details table, related vacancies, CTA. Renders entirely from one vacancy record.
- **Countries We Serve** — Romania, Croatia, Bulgaria, Albania, Serbia, Moldova as image cards with short notes; why work there; CTA band.
- **Job Categories** — category cards with imagery and short descriptions; why these categories; CTA.
- **Candidates** — hero, what to expect, how it works, registration form section, FAQ.
- **Employers / B2B** — hero, why partner, recruitment process, industries served, partnership enquiry form with image band, FAQ.
- **Credentials / Licence** — verified registration details only: certificate number, RA ID, entity type, RC holder, issue date, validity window, worker limit, approved MEA wording, operating focus. No certificate image.
- **Contact Us** — hero, contact methods row, message form, location and map link, direct support split for candidates vs employers, FAQ.
- **Privacy / Terms** — clean readable documents, generic and non-committal, marked for legal review.

## 5. Vacancy data

A single typed vacancy shape (slug, title, country, category, employment type, salary/accommodation notes, posted date, description, responsibilities, requirements, benefits) in one local data file that starts as an **empty list**. Listing, filters, detail page and related vacancies all read from it, so real vacancies can be added later by editing that one file — or swapped to a database later without touching the pages.

## 6. Forms

Candidate registration (name, phone, email, CV upload), vacancy application (same), employer enquiry (company, contact person, email, phone, requirements), contact (name, email, phone, subject, message). Real labels, inline validation, accessible error messages, focus states. On submit they show a neutral confirmation and **do not** claim an email, WhatsApp message, or stored record — no storage or integration in this phase.

## 7. Responsive, SEO, accessibility

- Mobile-first: single column, drawer nav, stacked forms; comfortable tablet mid-layouts; spacious desktop.
- Per-page unique title, description and social tags; semantic landmarks and heading order; descriptive alt text; keyboard-operable nav, accordions and forms; contrast-checked colours.
- Lean: no heavy animation or extra libraries.

## 8. Imagery

Deliberate, varied photography per section — international workplaces, travel, business meetings, skilled trades, country scenes — with no repeated composition. Nothing depicting Crown's own office, staff, clients or certificates.

## 9. Build order

1. Design system, utility bar, header, footer
2. Home
3. About Us
4. Countries, Job Categories
5. Vacancies list + detail template + empty state
6. Candidates, Employers
7. Contact, Credentials
8. Privacy, Terms
9. Responsive, accessibility and polish pass

## A. Buildable immediately

Everything above: all twelve pages, full design system, forms as frontend-only, empty vacancy system, credentials page from the verified details.

## B. Needs confirmation

- **Phone number conflict:** the brief states 9878603703; the reference screenshots show +91 98766 43210. Which is correct?
- Full street address beyond "Mohali, Punjab, India – 160055", if you want one shown.
- Social profile links (LinkedIn, Facebook, Instagram, YouTube) — placeholders otherwise omitted.
- Real vacancy listings when available.
- Privacy Policy and Terms content — I will write reasonable general wording for your review, not legal advice.
- Whether an approved certificate image may be published later.

## C. Decisions to review

- Form submissions are currently non-functional by instruction; decide the destination (email, WhatsApp, database) before launch.
- Home reference screenshot was not supplied, so its composition is my judgement within the established system.
- Gulf countries appear in some reference copy, but only the six European countries are confirmed — I will keep wording to the confirmed six.
- Vacancies managed by editing a data file for now; a database-backed admin can come later if you want to update listings yourself.
