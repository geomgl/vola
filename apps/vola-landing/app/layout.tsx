import "./globals.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Vola AI",
  description: "Create AI Voice Agents for your sales team in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          bricolage.variable,
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
