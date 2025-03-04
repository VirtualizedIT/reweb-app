// Privacy Page //

'use client';

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";
import type { NextPage } from 'next';
import Policy from '../../components/shared/Policy';

const PrivacyPage: NextPage = () => {
  return (
    <main className="p-4 bg-background">
    <VitHeader />
    <VitBreadcrumbs label="Privacy" href="/privacy" />
    <div className="container border border-border rounded-md mb-8 py-10" >
      <h2 className="text-accent text-3xl font-bold">Privacy Policy</h2>
      <Policy policyKey="ZEVSSWNEWXdMekZzVGtKNWVrRTlQUT09" />
    </div>
    <VitFooter/>
  </main>
  );
};

export default PrivacyPage;
