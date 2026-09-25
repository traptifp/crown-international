import { createFileRoute } from "@tanstack/react-router";
import { FoundationPreview } from "@/components/site/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Crown International Placement Service — Foundation Preview" },
    { name: "description", content: "Review the shared design system, navigation and footer for Crown International Placement Service." },
    { property: "og:title", content: "Crown International Placement Service" },
    { property: "og:description", content: "Shared website foundation for Crown International Placement Service." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FoundationPreview,
});
