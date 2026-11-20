import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "AYANA — Ювелирный магазин",
    description: "Казахстанский бренд арабского производства.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return <html lang="en"><body>{children}</body></html>;
}
