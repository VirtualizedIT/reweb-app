// Terms Page section-9.tsx //

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";

export function Section9() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Terms" href="/terms" />
      <div className="container border border-border rounded-md mb-8 py-10" />
      <VitFooter/>
    </main>
  );
}
