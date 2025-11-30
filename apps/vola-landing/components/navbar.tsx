"use client";

import Link from "next/link";
import { useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-fit border border-border rounded-full mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-2 pl-6 flex h-14 max-w-sm lg:max-w-screen-2xl items-center justify-between w-[22.5rem] sm:w-[52rem]">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-primary" />
          <span className="font-extrabold">Vola AI</span>
        </Link>

        <div className="flex justify-end items-center gap-6">
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium ml-6">
            <Link
              href="#solution"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              How it Works
            </Link>
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="default" className="rounded-full">
              Try me out!
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
