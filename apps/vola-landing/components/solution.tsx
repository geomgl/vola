"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Solution() {
  return (
    <section className="py-16 bg-muted text-foreground" id="solution">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-primary text-sm font-medium text-center mb-4">
            The solution
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            An AI Receptionist that Never Sleeps
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Here's how it works
          </p>
        </motion.div>

        <div className="flex flex-row gap-24">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
              reverse={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SolutionCardProps {
  title: string;
  badge: string;
  description: string;
  features: string[];
  videoSrc?: string;
  reverse?: boolean;
  index: number;
}

function SolutionCard({
  title,
  badge,
  description,
  features,
  videoSrc,
  reverse,
  index,
}: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-foreground" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className="inline-flex items-center rounded-full py-0.5 text-xs font-medium bg-purple-200 text-secondary-foreground px-2">
              {badge}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        {/* <Button className="mt-4">Create waitlist now</Button> */}
      </div>
      {/* <motion.div
        className="flex-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <video
          src={videoSrc}
          className="w-full h-auto rounded-lg shadow-md border"
          width={600}
          height={400}
          autoPlay
          playsInline
          muted
          loop
        />
      </motion.div> */}
    </motion.div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const solutions = [
  {
    title: "Create Your Receptionist",
    badge: "Seamless Setup",
    description:
      "Get your AI receptionist running in minutes. Set the greeting, choose a natural voice, and connect to your practice’s phone line — no technical steps, no disruption to your front desk.",
    features: ["Dedicated phone number", "Multiple lifelike voice options"],
    // videoSrc: "https://cdn.fastwaitlist.com/how-it-works-1.mp4",
  },
  {
    title: "Customize to Perfection",
    badge: "Knowledge Base",
    description:
      "Load Vola with the details that matter: insurance accepted, hours, providers, services, and your unique workflows. Everything updates instantly, so your receptionist always gives accurate, compliant information.",
    features: [
      "Start with templates tailored to dental practices",
      "Simple, no-code customization",
    ],
    // videoSrc: "https://cdn.fastwaitlist.com/how-it-works-2.mp4",
  },
  {
    title: "Act on Key Insights",
    badge: "Smart Summaries and Analytics",
    description:
      "Once your agent is set up and customized, Vola handles the rest. It answers calls instantly, schedules appointments through OpenDental, and provides HIPAA-compliant call summaries your team can trust.",
    features: [
      "Always on, zero missed calls",
      "Real-time appointment scheduling",
    ],
    // videoSrc: "https://cdn.fastwaitlist.com/how-it-works-3.mp4",
  },
];
