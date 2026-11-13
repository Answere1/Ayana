import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "AYANA — Exceptional High Jewellery",
    description: "Discover the AYANA jewellery collection.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html lang="en"><body>{children}</body></html>;
}
