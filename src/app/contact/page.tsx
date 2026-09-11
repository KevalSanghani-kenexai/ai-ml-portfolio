import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Keval Sanghani for freelance AI/ML projects, consulting, and contract work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-28 pb-[var(--section-pad)] md:pt-32">
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
}
