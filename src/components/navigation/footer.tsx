import { LINKS, SITE } from "@/lib/constants";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { Container } from "@/components/ui/section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              {SITE.initials}
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight">
              {SITE.shortName}
            </h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {SITE.role}
            </p>
            <p className="mt-4 text-sm text-muted">{SITE.location}</p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Navigate
            </p>
            <div className="flex flex-col gap-3 text-sm text-foreground/90">
              <MagneticLink href="/projects">Work</MagneticLink>
              <MagneticLink href="/services">Services</MagneticLink>
              <MagneticLink href="/about">About</MagneticLink>
              <MagneticLink href="/writing">Writing</MagneticLink>
              <MagneticLink href="/contact">Contact</MagneticLink>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Connect
            </p>
            <div className="flex flex-col gap-3 text-sm text-foreground/90">
              <MagneticLink href={LINKS.email}>Email</MagneticLink>
              <MagneticLink href={LINKS.linkedin} external>
                LinkedIn
              </MagneticLink>
              <MagneticLink href={LINKS.resume} external>
                Resume
              </MagneticLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            © {year} {SITE.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Engineer first. Creative technology second.
          </p>
        </div>
      </Container>
    </footer>
  );
}
