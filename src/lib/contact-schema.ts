import { z } from "zod";
import { BUDGET_RANGES, PROJECT_TYPES } from "@/lib/constants";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  company: z.string().trim(),
  projectType: z.enum(PROJECT_TYPES, {
    message: "Select a project type.",
  }),
  budget: z.enum(BUDGET_RANGES, {
    message: "Select a budget range.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more detail (20+ characters).")
    .max(4000, "Message is too long."),
});

export type ContactSchema = z.infer<typeof contactSchema>;
