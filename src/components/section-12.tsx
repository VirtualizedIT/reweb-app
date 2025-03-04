import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";

export function Section12() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="EULA" href="/eula" />
      <div className="container border border-border rounded-md mb-8 py-10" />
      <VitFooter/>
    </main>
  );
}
