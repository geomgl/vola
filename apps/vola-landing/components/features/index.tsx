"use client";

import { PlusCircle as CirclePlus } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "HIPAA-Compliant by Design",
    description:
      "Built for healthcare from day one. All conversations, data handling, and system integrations meet HIPAA requirements to protect sensitive patient information.",
  },
  {
    title: "Human-Like Voice",
    description:
      "Vola speaks in a warm, natural tone that feels like a trained front-desk coordinator — with multilingual support for diverse patient communities.",
  },
  {
    title: "Seamless OpenDental Sync",
    description:
      "Appointments, patient lookups, schedule changes — all handled safely and instantly within your existing workflow. No new software to learn.",
  },
  {
    title: "24/7 Answering & Triage",
    description:
      "Whether your office is closed or your staff is busy assisting patients, every call gets answered and every opportunity is captured.",
  },
  {
    title: "Effortless Onboarding",
    description:
      "Set up in minutes. No technical skills required. Connect your practice information, sync with OpenDental, choose a voice, and go live.",
  },
  {
    title: "Multiple Call Handling",
    description:
      "Your practice never hits a busy signal again — Vola can handle multiple callers simultaneously without sacrificing conversational quality.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-32 px-8 max-w-[84rem] mx-auto overflow-visible"
    >
      <div className="h-28 absolute -top-28"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-primary text-sm font-medium text-center mb-4">
          {"What's included?"}
        </h3>
        <h2 className="text-4xl font-bold text-center mb-8">
          Everything you need to supercharge your front desk
        </h2>
      </motion.div>
      <div className="!mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32 max-w-7xl mx-auto md:pb-14 sm:pb-0">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center w-full max-w-[14rem] mx-auto"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <CirclePlus className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
              <h3 className="text-foreground text-base sm:text-lg">
                {feature.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
