"use client";

import { Gift } from "lucide-react";
import { EmailSignupForm } from "@/components/email-signup-form";
import { useEffect, useState } from "react";

export function Hero() {
  // Add state to handle client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 lg:pt-20 w-full">
      <div className="absolute inset-0 h-full w-full">
        <canvas className="w-full h-full" />
      </div>

      <div className="flex flex-col gap-6 sm:gap-10 lg:gap-14 items-center justify-center text-center">
        <div className="w-full my-10 md:my-0">
          {isMounted && (
            <div className="animate-fade-in-0 inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 sm:mb-10 text-xs md:text-base border-border/40 border">
              <span className="flex items-center text-secondary-foreground justify-center px-2 py-1">
                <Gift className="w-5 h-5 mr-2 bg-secondary-foreground text-background rounded-full p-0.5" />
                <span className="inline">
                  Call (619) 815-5603 to see Vola in action!
                </span>
              </span>
            </div>
          )}

          <h1 className="opacity-0 animate-fade-in-3 font-display text-center drop-shadow-sm text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance max-w-3xl mx-auto">
            The HIPAA-Compliant AI Receptionist for Dental Practices
          </h1>

          <p className="opacity-0 animate-fade-in-5 py-4 sm:py-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-2 break-keep">
            Never miss a call again. Book more appointments. Deliver a
            consistently exceptional patient experience — 24/7.
          </p>

          <div className="opacity-0 animate-fade-in-6 flex flex-col items-center pt-6 w-full relative">
            <EmailSignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
