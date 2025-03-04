// Terms Page //

'use client';

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";
import type { NextPage } from 'next';
import Policy from '../../components/shared/Policy';

const TermsPage: NextPage = () => {
  return (
    <main className="p-4 bg-background">
    <VitHeader />
    <VitBreadcrumbs label="Terms" href="/terms" />
    <div className="container border border-border rounded-md mb-8 py-10" >
      <h2 className="text-accent text-3xl font-bold">Terms of Service</h2>
      <Policy policyKey="U201T05GcFliVWczYzJSV04wRTlQUT09" />
    </div>
    <VitFooter/>
  </main>
  );
};

export default TermsPage;