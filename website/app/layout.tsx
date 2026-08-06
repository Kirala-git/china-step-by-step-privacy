import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "China Step by Step — Your China trip, made clear";
  const description = "The offline-ready visual travel companion for payments, apps, trains, translation and everyday life in China.";
  return {
    title, description,
    metadataBase: new URL(origin),
    openGraph: { title, description, type:"website", images:[{url:"/og.png",width:1200,height:630,alt:"China Step by Step travel companion"}] },
    twitter: { card:"summary_large_image", title, description, images:["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
