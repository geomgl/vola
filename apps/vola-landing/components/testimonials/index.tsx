"use client";

import { TestimonialCard } from "./testimonial-card";

export function Testimonials() {
  return (
    <section className="py-16 pt-32 bg-background text-foreground mt-16">
      <div className="max-w-[90rem] mx-auto px-4">
        <h3 className="text-secondary-foreground text-sm font-medium text-center mb-4">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold text-center mb-12 max-w-2xl mx-auto">
          {"Don't just take our word for it, hear what others are saying"}
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row items-center">
            {[...Array(3)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    author: {
      name: "Anthony Villa",
      image: "/images/testimonials/anthony.jpg",
      handle: "anthonyvilla",
      platform: "producthunt",
    },
    content:
      "Fast Waitlist helped me launch within 24 hours and already I've signed up 6 people to the waitlist in 48 hours. There are a ton of landing page builders out there but none that force me to just focus on key elements. I would've spent a whole week and killed momentum with other builders.",
  },
  {
    author: {
      name: "Szymon Pruszynski",
      image: "/images/testimonials/szymon.jpg",
      handle: "szymonp",
      platform: "producthunt",
    },
    content:
      "Easy tool to kickstart your new idea. I literally spent 10min for setup and it works great!",
  },
  {
    author: {
      name: "Emmett Cooke",
      image: "/images/testimonials/emmett.jpg",
      handle: "emmettc",
      platform: "producthunt",
    },
    content:
      "This is very cool well done. Really nice landing pages and super easy to setup. I always wanted to build something like this or buy a platform that does this so great work.",
  },
];
