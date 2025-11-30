"use client";

import { Button } from "./ui/button";

export function EmailSignupForm() {
  return (
    <div className="w-full">
      <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
        <input
          type="email"
          className="flex h-10 w-full rounded-md border text-foreground border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xl text-base sm:text-lg py-4 sm:py-6"
          placeholder="Your email"
          name="email"
        />
        <Button
          type="submit"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8"
        >
          Join waitlist
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        No credit card required
      </p>
    </div>
  );
}
