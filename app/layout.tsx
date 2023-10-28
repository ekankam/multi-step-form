import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ubuntu = Ubuntu({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Multi-step form",
  description:
    "Frontend Mentor Multi-step form challenge. Tech stack includes NextJS, TailwindCSS, Typescript with form validation using React-hook-form and Zod. And Zustand managing form state.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={cn(ubuntu.className, "bg-c-neutral-magnolia")}>
        {children}
      </body>
    </html>
  );
}
