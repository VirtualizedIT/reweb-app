// EULA Page //

'use client';

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { VitFooter } from "@/components/vit-footer";
import type { NextPage } from 'next';
import Policy from '../../components/shared/Policy';

const EulaPage: NextPage = () => {
  return (
    <main className="p-4 bg-background">
    <VitHeader />
    <VitBreadcrumbs label="EULA" href="/eula" />
    <div className="container border border-border rounded-md mb-8 py-10" >
      <h2 className="text-accent text-3xl font-bold">EULA</h2>
     <Policy policyKey="V1RRclpYVnFWR0Z1ZGxvcmJIYzlQUT0"/>
    </div>
    <VitFooter/>
  </main>
  );
};

export default EulaPage;
