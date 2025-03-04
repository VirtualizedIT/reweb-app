// Cookie Page //

'use client';

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";
import type { NextPage } from 'next';
import Policy from '../../components/shared/Policy';

const CookiePage: NextPage = () => {
  return (
    <main className="p-4 bg-background">
    <VitHeader />
    <VitBreadcrumbs label="Cookie" href="/cookie" />
    <div className="container border border-border rounded-md mb-8 py-10" >
      <h2 className="text-accent text-3xl font-bold">Cookie Policy</h2>
      <Policy policyKey="UVhSUGFVdE5VWE12UVVwTFNGRTlQUT09" />
    </div>
    <VitFooter/>
  </main>
  );
};

export default CookiePage;