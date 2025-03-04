import { VitHeader } from "@/components/vit-header";
import { VitBreadcrumbs } from "@/components/vit-breadcrumbs";
import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselArticleCard2 } from "@/components/carousel-article-card2";
import { TestimonialCard } from "@/components/testimonial-card";
import { VitFooter } from "@/components/vit-footer";

export function Section7() {
  return (
    <main className="p-4 bg-black">
      <VitHeader />
      <VitBreadcrumbs label="Projects" href="/projects" />
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 border rounded-md mb-8 border-border bg-foreground">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">Projects</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-background">
            Our work helps your business grow
          </h2>
        </div>
        <p className="text-lg text-balance max-w-2xl text-center text-muted">
          We look forward to adding you to our list of satisfied clients.
        </p>
        <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
          <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
          <CarouselContent className="pb-4">
            <CarouselArticleCard2
              date="Jul 16, 2024"
              image="/images/article-1.avif"
              title="How to build a beautiful landing page in minutes"
              category="Coding"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
            />
            <CarouselArticleCard2
              date="May 10, 2024"
              image="/images/article-2.avif"
              title="How to generate the perfect theme for your website with AI"
              category="Design"
              description="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue."
            />
            <CarouselArticleCard2
              date="Apr 27, 2024"
              image="/images/article-3.avif"
              title="How to build at the speed of no-code without customization limits"
              category="Coding"
              description="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut."
            />
            <CarouselArticleCard2
              date="Apr 9, 2024"
              image="/images/article-4.avif"
              title="How to edit React components and Tailwind visually"
              category="Design"
              description="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit."
            />
            <CarouselArticleCard2
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
      <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7 rounded-md mb-8 border-border border">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-center text-accent">Testimonials</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center text-foreground">
            What our users say
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
          What developers and founders of top companies around the internet are saying about Reweb.
        </p>
        <div className="columns-1 gap-7 md:columns-2 lg:columns-3">
          <TestimonialCard
            name="John"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit."
            image="/images/testimonial-1.avif"
            username="johndoe"
          />
          <TestimonialCard
            name="Max"
            text="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel."
            image="/images/testimonial-2.avif"
            username="maxcook"
          />
          <TestimonialCard
            name="Bob"
            text="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque."
            image="/images/testimonial-3.avif"
            username="thisisbob"
          />
          <TestimonialCard
            name="Emily"
            text="Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida."
            image="/images/testimonial-4.avif"
            username="emilysmith"
          />
          <TestimonialCard
            name="Micheal"
            text="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit. Curabitur tempor."
            image="/images/testimonial-5.avif"
            username="michael"
          />
          <TestimonialCard
            name="Linda"
            text="Nullam non lorem vitae risus volutpat dictum non sed magna. Aliquam in venenatis quam. Morbi feugiat tristique leo, vel ultrices dolor varius non."
            image="/images/testimonial-6.avif"
            username="thisislinda"
          />
        </div>
      </section>
      <VitFooter/>
    </main>
  );
}
