import { Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-10 px-4 md:px-6 lg:px-8 mt-auto">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start">
          <div className="text-xl font-extrabold flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>Vola AI</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Create AI Voice Agents for your sales team in seconds.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>

        <div>
          <h6 className="font-semibold mb-4">Links</h6>
          <nav className="flex flex-col space-y-2">
            <Link
              href="mailto:info@mail.volaai.com"
              className="text-sm hover:underline"
            >
              Support
            </Link>
          </nav>
        </div>

        <div>
          <h6 className="font-semibold mb-4">Legal</h6>
          <nav className="flex flex-col space-y-2">
            <Link href="/tos" className="text-sm hover:underline">
              Terms and conditions
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
