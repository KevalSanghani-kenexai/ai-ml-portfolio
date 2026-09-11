import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = SITE.description,
  path = "",
  image,
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const pageTitle = title
    ? `${title} — ${SITE.shortName}`
    : `${SITE.shortName} — ${SITE.role} | GenAI, RAG & AI Systems`;
  const url = absoluteUrl(path);

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(absoluteUrl()),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE.shortName,
      locale: "en_US",
      type: "website",
      ...(image
        ? {
            images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.role,
    description: SITE.positioning,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location,
      addressCountry: "IN",
    },
    url: absoluteUrl(),
    worksFor: {
      "@type": "Organization",
      name: SITE.company,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.shortName} — ${SITE.role}`,
    url: absoluteUrl(),
    description: SITE.description,
    author: {
      "@type": "Person",
      name: SITE.name,
    },
  };
}

export function creativeWorkJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: input.url,
    author: {
      "@type": "Person",
      name: SITE.name,
    },
    datePublished: input.datePublished,
  };
}
