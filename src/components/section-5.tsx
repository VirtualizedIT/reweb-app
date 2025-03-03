import Link from "next/link";
import Image from "next/image";

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { VitFooter } from "@/components/vit-footer";

export function Section5() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Agency" href="/agency" />
      <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10 border rounded-md mb-8 border-border bg-foreground">
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight text-background">
          Let us build a complete online agency system for you!
        </h1>
        <p className="max-w-lg text-center text-lg sm:text-xl text-muted">
          You are considering HighLevel to scale your agency, not learn another software
          platform.&lt;br&gt;We will develop an end-to-end system to create, host, and promote your
          agency business.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
            <Link href="https://virtualizedit.agency/home">Learn More</Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="cursor-pointer border-border hover:bg-background hover:text-foreground"
          >
            <Link href="https://marketing.virtualizedit.agency/crm-sales">Get Started</Link>
          </Button>
        </div>
      </section>
      <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24 border rounded-md mb-8 border-border bg-muted">
        <div className="relative flex-1">
          <Image
            alt="SaaS Dashboard"
            src="/images/dashboard.png"
            width={713}
            height={497.7}
            className="rounded-xl border border-border shadow-lg"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase text-left text-accent">
              Customer Relationship Management
            </span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left text-foreground">
              {" "}
              CRM Hosting and Implementation
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            Our Platform Includes Learning Management Platform - Community Hosting - Client
            Management and Engagement - Marketing Management including Email, Text, and Social -
            Workflow Automation - Payment Processing and so much more.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button size="lg" asChild variant="outline" className="border-border cursor-pointer">
              <Link href="#" className="h-12 cursor-pointer border-border text-base md:px-9">
                Learn More
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="border-border cursor-pointer hover:bg-background hover:text-foreground"
            >
              <Link href="#" className="h-12 cursor-pointer text-base md:px-9">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24 border rounded-md mb-8 border-border">
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase text-left text-accent">Contact US</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left text-foreground">
              We Would Love to Meet You
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            Fill out the Form to Schedule a Call with VirtualizedIT.
          </p>
        </div>
        <div className="relative flex-1">
          <form className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-foreground">Sign Up</h3>
            <div>
              <Label className="text-muted-foreground">Full Name</Label>
              <Input placeholder="Full Name" className="bg-input text-background" />
            </div>
            <div>
              <Label className="text-muted-foreground">Email</Label>
              <Input type="email" placeholder="Email" className="bg-input text-background" />
            </div>
            <div>
              <Label className="text-muted-foreground">Message</Label>
              <Input placeholder="Message" className="bg-input text-background" />
            </div>
            <Button className="mt-2 hover:bg-foreground hover:text-background">Submit</Button>
          </form>
        </div>
      </section>
      <VitFooter facebookLink="" instagramLink="" xLink="" linkedInLink="" youTubeLink="" />
    </main>
  );
}
