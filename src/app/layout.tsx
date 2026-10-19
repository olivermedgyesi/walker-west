import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kelowna Event Planner | Walker & West Events",
    template: "%s | Walker & West Events",
  },
  description:
    "Walker & West is a Kelowna event planner for corporate and non-profit events across the Okanagan, led by planner Brittany Saari.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
