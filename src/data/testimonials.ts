// Testimonials remain empty until real quotes exist.
// The UI auto-hides this section when no non-placeholder items are present.
import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-placeholder",
    quote: "TESTIMONIAL_PLACEHOLDER",
    author: "[ADD NAME]",
    role: "[ADD ROLE]",
    company: "[ADD COMPANY]",
    isPlaceholder: true,
  },
];

export function getPublishedTestimonials() {
  return testimonials.filter((item) => !item.isPlaceholder);
}
