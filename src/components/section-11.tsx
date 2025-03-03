import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";

export function Section11() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Cookie" href="/cookie" />
      <div className="container border border-border rounded-md mb-8 py-10" />
      <VitFooter facebookLink="" instagramLink="" xLink="" linkedInLink="" youTubeLink="" />
    </main>
  );
}
