import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, Lock, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

type Errors = Record<string, string>;
const inputCls = "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30 aria-[invalid=true]:border-destructive";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+\d][\d\s-]{7,15}$/;

function Field({ id, label, error, children, className = "" }: { id: string; label: string; error?: string | undefined; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-brand-deep">{label} <span className="text-destructive" aria-hidden="true">*</span></label>
      {children}
      {error ? <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

function Done({ onReset, text }: { onReset: () => void; text: string }) {
  return (
    <div role="status" className="flex flex-col items-start gap-4 py-6">
      <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
      <h3 className="text-xl font-bold text-brand-deep">Thank you — your details are ready</h3>
      <p className="text-sm leading-6 text-muted-foreground">{text}</p>
      <Button variant="outline" onClick={onReset}>Start again</Button>
    </div>
  );
}

const a = (id: string, errors: Errors) => ({ id, name: id, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-err` : undefined });

export function CandidateForm({ prefix = "cand", submitLabel = "Register Now" }: { prefix?: string; submitLabel?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [file, setFile] = useState<File | null>(null);
  const [done, setDone] = useState(false);
  const id = (k: string) => `${prefix}-${k}`;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const err: Errors = {};
    if (String(f.get(id("name")) ?? "").trim().length < 2) err[id("name")] = "Please enter your full name.";
    if (!PHONE.test(String(f.get(id("phone")) ?? "").trim())) err[id("phone")] = "Please enter a valid phone number.";
    if (!EMAIL.test(String(f.get(id("email")) ?? "").trim())) err[id("email")] = "Please enter a valid email address.";
    if (!file) err[id("cv")] = "Please attach your CV.";
    else if (!/\.(pdf|docx?)$/i.test(file.name)) err[id("cv")] = "CV must be a PDF, DOC or DOCX file.";
    else if (file.size > 5 * 1024 * 1024) err[id("cv")] = "CV must be 5 MB or smaller.";
    setErrors(err);
    if (Object.keys(err).length) { document.getElementById(Object.keys(err)[0] ?? "")?.focus(); return; }
    setDone(true);
  }

  if (done) return <Done onReset={() => { setDone(false); setFile(null); }} text="Our team reviews registrations against current employer requirements. For a quicker response, you can also reach us on WhatsApp at 9878603703." />;

  return (
    <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <Field id={id("name")} label="Full Name" error={errors[id("name")]}><input {...a(id("name"), errors)} autoComplete="name" placeholder="Enter your full name" className={inputCls} /></Field>
      <Field id={id("phone")} label="Phone Number" error={errors[id("phone")]}><input {...a(id("phone"), errors)} type="tel" autoComplete="tel" placeholder="+91 Enter your phone number" className={inputCls} /></Field>
      <Field id={id("email")} label="Email Address" error={errors[id("email")]} className="sm:col-span-2"><input {...a(id("email"), errors)} type="email" autoComplete="email" placeholder="Enter your email address" className={inputCls} /></Field>
      <Field id={id("cv")} label="Upload Your CV" error={errors[id("cv")]} className="sm:col-span-2">
        <label htmlFor={id("cv")} className="mt-1.5 flex cursor-pointer items-center gap-4 rounded-md border border-dashed border-border-strong bg-brand-mist/60 px-4 py-4 transition-colors hover:border-primary focus-within:ring-2 focus-within:ring-ring/30">
          <Upload className="size-6 text-primary" aria-hidden="true" />
          <span className="text-sm"><span className="font-semibold text-primary">{file ? file.name : "Click to upload your CV"}</span><span className="block text-xs text-muted-foreground">PDF, DOC or DOCX (max 5 MB)</span></span>
          <input {...a(id("cv"), errors)} type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        </label>
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">{submitLabel} <ArrowRight aria-hidden="true" /></Button>
        <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground"><Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />Your information is used only to discuss recruitment opportunities with you.</p>
      </div>
    </form>
  );
}

export function EmployerForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const fields = [["company", "Company Name", "Enter company name", "organization"], ["contact", "Contact Person", "Enter full name", "name"], ["email", "Email Address", "Enter your email address", "email"], ["phone", "Phone Number", "Include country code", "tel"]] as const;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(`emp-${k}`) ?? "").trim();
    const err: Errors = {};
    if (g("company").length < 2) err["emp-company"] = "Please enter your company name.";
    if (g("contact").length < 2) err["emp-contact"] = "Please enter a contact person.";
    if (!EMAIL.test(g("email"))) err["emp-email"] = "Please enter a valid email address.";
    if (!PHONE.test(g("phone"))) err["emp-phone"] = "Please enter a valid phone number.";
    if (g("req").length < 10) err["emp-req"] = "Please describe your requirements (roles, numbers, location).";
    setErrors(err);
    if (Object.keys(err).length) { document.getElementById(Object.keys(err)[0] ?? "")?.focus(); return; }
    setDone(true);
  }

  if (done) return <Done onReset={() => setDone(false)} text="Our team will review your requirements. To discuss them straight away, contact us on WhatsApp or call 9878603703." />;

  return (
    <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      {fields.map(([k, label, ph, ac]) => (
        <Field key={k} id={`emp-${k}`} label={label} error={errors[`emp-${k}`]}>
          <input {...a(`emp-${k}`, errors)} type={k === "email" ? "email" : k === "phone" ? "tel" : "text"} autoComplete={ac} placeholder={ph} className={inputCls} />
        </Field>
      ))}
      <Field id="emp-req" label="Recruitment Requirements" error={errors["emp-req"]} className="sm:col-span-2">
        <textarea {...a("emp-req", errors)} rows={4} placeholder="Job roles, number of workers, work location and expected start" className={inputCls} />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg">Submit Enquiry <ArrowRight aria-hidden="true" /></Button>
        <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground"><Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />Your details are used only for business communication about your enquiry.</p>
      </div>
    </form>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 md:gap-x-6">
      {items.map(([q, ans]) => (
        <details key={q} className="group rounded-md border border-border bg-card px-5 open:shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 [&::-webkit-details-marker]:hidden">
            {q}<span className="text-lg leading-none text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="pb-5 text-sm leading-6 text-muted-foreground">{ans}</p>
        </details>
      ))}
    </div>
  );
}
