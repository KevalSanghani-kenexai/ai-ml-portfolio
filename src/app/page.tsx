import { Hero } from "@/components/hero/hero";
import { Statement } from "@/components/home/statement";
import { Capabilities } from "@/components/home/capabilities";
import { SelectedWork } from "@/components/projects/selected-work";
import { ServicesPreview } from "@/components/services/services-preview";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ContactCTA } from "@/components/contact/contact-cta";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { getPublishedTestimonials } from "@/data/testimonials";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const testimonials = getPublishedTestimonials();

  return (
    <>
      <Hero />
      <Statement />
      <Capabilities />
      <SelectedWork projects={featuredProjects} />
      <ServicesPreview services={services} limit={4} />
      <ProcessTimeline steps={processSteps} />
      {testimonials.length > 0 ? null : null}
      <ContactCTA />
    </>
  );
}
