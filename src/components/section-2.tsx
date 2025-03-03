import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";

export function Section2() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Disclaimer" href="/disclaimer" />
      <section className="container border border-border rounded-md mb-8 py-10" />
      <VitFooter
        facebookLink="https://www.facebook.com/virtualizedit"
        instagramLink="https://instagram.com/virtualizedit"
        xLink="https://x.com/Virtualized_IT"
        linkedInLink="https://linkedin.com/company/virtualizedit"
        youTubeLink="https://www.youtube.com/@Virtualized_IT"
      />
    </main>
  );
}
