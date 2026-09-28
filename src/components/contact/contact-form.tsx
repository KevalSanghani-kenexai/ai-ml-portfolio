"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import {
  contactSchema,
  type ContactSchema,
} from "@/lib/contact-schema";
import { BUDGET_RANGES, LINKS, PROJECT_TYPES, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { submitContact, type ContactActionState } from "@/app/contact/actions";
import { cn } from "@/lib/utils";

const initialState: ContactActionState = {
  ok: false,
  message: "",
};

const fieldClass =
  "w-full border border-border bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: PROJECT_TYPES[0],
      budget: BUDGET_RANGES[4],
      message: "",
    },
  });

  useEffect(() => {
    if (state.ok) reset();
  }, [state.ok, reset]);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
          Have an AI problem worth solving?
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          Let&apos;s turn the idea into a production-ready system. Prefer email or
          LinkedIn? Use the direct links below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticLink href={LINKS.email} variant="primary">
            Email Me
            <ArrowUpRight size={14} />
          </MagneticLink>
          <MagneticLink href={LINKS.linkedin} variant="secondary" external>
            LinkedIn
          </MagneticLink>
          <MagneticLink href={LINKS.resume} variant="secondary" external>
            Resume
          </MagneticLink>
        </div>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {SITE.availability}
        </p>
      </div>

      <form
        action={formAction}
        className="border border-border bg-surface p-6 md:p-8"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" error={errors.name?.message}>
            <input
              {...register("name")}
              name="name"
              className={fieldClass}
              placeholder="Your name"
              autoComplete="name"
            />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input
              {...register("email")}
              name="email"
              type="email"
              className={fieldClass}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </Field>
          <Field label="Company" error={errors.company?.message}>
            <input
              {...register("company")}
              name="company"
              className={fieldClass}
              placeholder="Optional"
              autoComplete="organization"
            />
          </Field>
          <Field label="Project type" error={errors.projectType?.message}>
            <select {...register("projectType")} name="projectType" className={fieldClass}>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label="Budget range"
            error={errors.budget?.message}
            className="sm:col-span-2"
          >
            <select {...register("budget")} name="budget" className={fieldClass}>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label="Message"
            error={errors.message?.message}
            className="sm:col-span-2"
          >
            <textarea
              {...register("message")}
              name="message"
              className={cn(fieldClass, "min-h-36 resize-y")}
              placeholder="What are you trying to build?"
            />
          </Field>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button type="submit" variant="accent" disabled={pending}>
            {pending ? "Sending…" : "Send message"}
          </Button>
          {state.message ? (
            <p
              className={`text-sm ${state.ok ? "text-success" : "text-danger"}`}
              role="status"
            >
              {state.message}
            </p>
          ) : null}
          {state.fallbackMailto ? (
            <a
              href={state.fallbackMailto}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
            >
              Open mailto fallback
              <ArrowUpRight size={14} />
            </a>
          ) : null}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-danger">{error}</span> : null}
    </label>
  );
}
