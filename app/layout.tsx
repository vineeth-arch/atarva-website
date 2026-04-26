import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";

const degularDisplay = localFont({
  src: [
    { path: "../public/fonts/DegularDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/DegularDisplay-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/DegularDisplay-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/DegularDisplay-SemiboldItalic.otf", weight: "600", style: "italic" },
    { path: "../public/fonts/DegularDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/DegularDisplay-BoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "../public/fonts/DMSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/DMSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/DMSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/DMSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/DMSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/DMSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avarta IT and Design Solutions — Where Technical Precision Meets Creative Vision",
  description:
    "Avarta is an interdisciplinary think tank and consultancy combining computational engineering, design intelligence, and research-led thinking to solve complex problems across industry and academia.",
  keywords: [
    "CFD",
    "computational fluid dynamics",
    "design consultancy",
    "interdisciplinary",
    "think tank",
    "research",
    "branding",
    "technical consultancy",
    "India",
  ],
  authors: [{ name: "Avarta IT and Design Solutions Pvt. Ltd." }],
  openGraph: {
    title: "Avarta — Where Technical Precision Meets Creative Vision",
    description:
      "An interdisciplinary think tank and consultancy at the intersection of physics, CFD, design intelligence, and research.",
    url: "https://avarta.in",
    siteName: "Avarta",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avarta — Where Technical Precision Meets Creative Vision",
    description:
      "An interdisciplinary think tank and consultancy at the intersection of physics, CFD, design intelligence, and research.",
  },
  metadataBase: new URL("https://avarta.in"),
  icons: {
    icon: "/logos/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Flash-free theme init: reads localStorage before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('avarta-theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${degularDisplay.variable} ${dmSans.variable} antialiased bg-midnight text-stellar`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
