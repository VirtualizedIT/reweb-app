import Link from "next/link";
import Image from "next/image";
import { Frame } from "lucide-react";

import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { EmployeeFeatureCard } from "@/components/employee-feature-card";
import { CarouselArticleCard } from "@/components/carousel-article-card";
import { VitFooter } from "@/components/vit-footer";

export function Section3() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Company" href="/company" />
      <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10 bg-foreground border border-border rounded-md mb-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight text-background">
            We have the passion to grow your brand
          </h1>
          <p className="max-w-lg text-center text-lg sm:text-xl text-muted">
            We have helped many businesses like yours...We hope you choose to join us
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Button
            size="lg"
            asChild
            variant="outline"
            className="cursor-pointer border-border hover:bg-accent"
          >
            <Link href="#">Learn More</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer border-border hover:bg-background">
            <Link href="#">Get Started</Link>
          </Button>
        </div>
        <div className="relative sm:mt-8 flex items-center flex-col">
          <Image
            alt="Image of Open Office Workspace"
            src="/images/company-page--1.webp"
            width={1000}
            height={698}
            priority
            className="border border-border block rounded-md"
          />
          <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]">
            <p className="text-lg text-balance text-background" />
          </div>
        </div>
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center pt-20 text-background">
            It is our mission to help businesses learn to better utilize today&apos;s wide array of
            technology solutions.
          </h2>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 mb-8 border border-border rounded-md bg-muted">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">People</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-foreground">
            Meet the Team
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
          Our talented team of experts bring a wealth of experience to the table.
        </p>
        <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
          <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
          <CarouselContent className="pb-4">
            <EmployeeFeatureCard
              icon={Frame}
              title="Geoffrey White"
              description="Founder and Owner"
            />
          </CarouselContent>
          <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
        </Carousel>
      </section>
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border border-border rounded-md mb-8">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">Articles</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-foreground">
            Our Blog
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
          Learn how to build beautiful landing pages fast.
        </p>
        <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
          <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
          <CarouselContent className="pb-4">
            <CarouselArticleCard
              date="Jul 16, 2024"
              image="/images/article-1.avif"
              title="How to build a beautiful landing page in minutes"
              category="Coding"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
            />
            <CarouselArticleCard
              date="May 10, 2024"
              image="/images/article-2.avif"
              title="How to generate the perfect theme for your website with AI"
              category="Design"
              description="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue."
            />
            <CarouselArticleCard
              date="Apr 27, 2024"
              image="/images/article-3.avif"
              title="How to build at the speed of no-code without customization limits"
              category="Coding"
              description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
            />
            <CarouselArticleCard
              date="Apr 9, 2024"
              image="/images/article-4.avif"
              title="How to edit React components and Tailwind visually"
              category="Design"
              description="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit."
            />
            <CarouselArticleCard
              date="Mar 11, 2024"
              image="/images/article-5.avif"
              title="How to build at the speed of no-code without customization limits"
              category="Coding"
              description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
            />
          </CarouselContent>
          <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
        </Carousel>
      </section>
      <VitFooter facebookLink="" instagramLink="" xLink="" linkedInLink="" youTubeLink="" />
    </main>
  );
}
