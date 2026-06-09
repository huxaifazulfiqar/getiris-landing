import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Iris POS — by Iris Technologies",
  description: "Iris POS by Iris Technologies. Complete point-of-sale and CRM software built specifically for optical stores in Pakistan. Manage orders, prescriptions, inventory, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${redHatDisplay.className} min-h-full`}>{children}</body>
    </html>
  );
}
