"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { SITE } from "@/lib/constants";

export type ContactActionState = {
  ok: boolean;
  message: string;
  fallbackMailto?: string;
};

export async function submitContact(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: String(formData.get("company") ?? ""),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: parsed.error.issues[0]?.message ?? "Please check the form fields.",
    };
  }

  const data = parsed.data;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Portfolio inquiry — ${data.projectType}`,
  )}&body=${encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "—"}\nProject type: ${data.projectType}\nBudget: ${data.budget}\n\n${data.message}`,
  )}`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      message:
        "Email delivery is not configured yet. You can continue with a prefilled email instead.",
      fallbackMailto: mailto,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
    await resend.emails.send({
      from,
      to: SITE.email,
      replyTo: data.email,
      subject: `Portfolio inquiry — ${data.projectType}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company || "—"}`,
        `Project type: ${data.projectType}`,
        `Budget: ${data.budget}`,
        "",
        data.message,
      ].join("\n"),
    });

    return {
      ok: true,
      message: "Message sent. I’ll get back to you soon.",
    };
  } catch {
    return {
      ok: false,
      message: "Something went wrong sending the message. Try email instead.",
      fallbackMailto: mailto,
    };
  }
}
