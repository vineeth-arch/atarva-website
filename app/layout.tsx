import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
        className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-midnight text-stellar`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
