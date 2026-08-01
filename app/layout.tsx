import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/nav";
import { PwaRegister } from "@/components/pwa-register";
import "./globals.css";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "First Principles University",
  description:
    "One curated video every commute — understand how the world works from first principles.",
  applicationName: "FPU",
  manifest: `${bp}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FPU",
  },
  // Legacy tag for older iOS versions to launch full-screen from the home screen.
  other: { "apple-mobile-web-app-capable": "yes" },
  icons: {
    icon: [
      { url: `${bp}/icons/favicon-64.png`, sizes: "64x64", type: "image/png" },
      { url: `${bp}/icons/icon-192.png`, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: `${bp}/icons/apple-touch-icon.png`, sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
