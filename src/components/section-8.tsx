import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { VitFooter } from "@/components/vit-footer";

export function Section8() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Contact" href="/contact" />
      <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10 border rounded-md mb-8 border-border bg-foreground">
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight text-background">
          We&apos;d love to meet you!
        </h1>
        <p className="max-w-lg text-center text-lg sm:text-xl text-muted">
          Find the most convenient way to get in touch with us
        </p>
        <div className="relative sm:mt-8">
          <Image
            alt="SaaS Dashboard"
            src="/images/VITA-CommunityImage-1600x900.jpg"
            width={1000}
            height={698}
            priority
            className="border border-border rounded-md"
          />
        </div>
      </section>
      <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24 border rounded-md mb-8 border-border bg-muted">
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase text-left text-accent">Contact Us</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left text-foreground">
              Discuss a potential project
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            Build at the speed of no-code and then export to Next.js, Tailwind &amp; shadcn/ui code
            for full customization.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <Check size={24} className="size-5 text-accent" />
              <span className="text-muted-foreground">Get started quickly with templates.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} className="size-5 text-accent" />
              <span className="text-muted-foreground">See your changes in real-time.</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} className="size-5 text-accent" />
              <span className="text-muted-foreground">Export code for full customization.</span>
            </li>
          </ul>
        </div>
        <div className="relative flex-1">
          <form className="flex flex-col gap-2">
            <h3 className="font-bold text-xl text-foreground">Sign Up</h3>
            <div>
              <Label className="text-muted-foreground">Name</Label>
              <Input placeholder="Name" className="bg-input text-background" />
            </div>
            <div>
              <Label className="text-muted-foreground">Email</Label>
              <Input placeholder="Email" type="email" className="bg-input text-background" />
            </div>
            <Button className="mt-2 hover:bg-background hover:text-foreground">Submit</Button>
          </form>
        </div>
      </section>
      <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24 mb-8 border rounded-md border-border bg-background">
        <div className="relative flex-1">
          <Image
            alt="SaaS Dashboard"
            src="/images/2h-media-cdDDWLezAJ0-unsplash.jpg"
            width={713}
            height={497.7}
            className="border border-border rounded-md"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase text-left text-accent">Schedule</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left text-foreground">
              Book an introductory appointment
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
            Build at the speed of no-code and then export to Next.js, Tailwind &amp; shadcn/ui code
            for full customization.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button
              size="lg"
              asChild
              className="cursor-pointer border-border hover:bg-foreground hover:text-background"
            >
              <Link href="#" className="h-12 cursor-pointer text-base md:px-9">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <VitFooter/>
    </main>
  );
}
