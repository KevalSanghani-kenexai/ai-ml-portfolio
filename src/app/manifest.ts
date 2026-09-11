import { SITE } from "@/lib/constants";

export default function manifest() {
  return {
    name: `${SITE.shortName} — ${SITE.role}`,
    short_name: SITE.initials,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#08080A",
    theme_color: "#08080A",
  };
}
