import { VitHeader } from "@/components/vit-header";
import { VitFooter } from "@/components/vit-footer";

export function Section10() {
  return (
    <main className="p-4">
      <VitHeader />
      <div className="space-y-6">
        <div>
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight">Privacy Policy</h2>
          <p className="text-muted-foreground">Last updated: January 1, 2024</p>
        </div>
        <div className="prose prose-slate max-w-none space-y-6">
          <section />
        </div>
      </div>
      <VitFooter />
    </main>
  );
}
