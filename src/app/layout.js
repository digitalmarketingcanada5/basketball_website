import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://exceedcad.vercel.app'),
  title: "EXCEED - Academic Basketball Prep Program",
  description: "Excellence in Academics & Athletics. An exceptional opportunity for young individuals from diverse backgrounds to excel both academically and athletically. Grades 6-12/Post Secondary program with Division I scholarships, Nike funding, and elite competition circuits.",
  keywords: "basketball prep, academic excellence, Division I scholarships, elite basketball training, grades 6-12/post secondary, academic scholarships, CESPORTS, OBSA, special needs support, Edmonton basketball",
  authors: [{ name: "EXCEED" }],
  creator: "EXCEED Academic Basketball Prep Program",
  publisher: "EXCEED",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://exceedcad.com",
    siteName: "EXCEED",
    title: "EXCEED - Academic Basketball Prep Program",
    description: "Excellence in Academics & Athletics. Elite basketball training combined with rigorous academic standards for grades 6-12/Post Secondary students.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EXCEED Academic Basketball Prep Program"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EXCEED - Academic Basketball Prep Program",
    description: "Excellence in Academics & Athletics. Elite basketball training with academic excellence.",
    images: ["/images/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
