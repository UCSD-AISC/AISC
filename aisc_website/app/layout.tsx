import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree, Archivo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "AISC @ UCSD | Artificial Intelligence Student Collective",
  description:
    "The Artificial Intelligence Student Collective (AISC) at UC San Diego is dedicated to making AI literacy accessible to all through initiatives, events, and community.",
  openGraph: {
    title: "AISC @ UCSD | Artificial Intelligence Student Collective",
    description:
      "AISC empowers students at UC San Diego to learn, explore, and apply AI through hands-on projects, events, and outreach.",
    url: "https://aisc.ucsd.edu",
    siteName: "AISC @ UCSD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISC @ UCSD",
    description:
      "Artificial Intelligence Student Collective at UC San Diego: Building a future of accessible AI literacy.",
    creator: "@aisc_ucsd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="keywords"
          content="AI, Artificial Intelligence, UCSD, AISC, Student Collective, Machine Learning, Education, Tech Events"
        />
        <meta
          name="author"
          content="Artificial Intelligence Student Collective"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} ${archivo.variable} antialiased relative`}
      >
        {/* Nebula Background */}
        <div className="pointer-events-none fixed inset-0 z-[-1] opacity-50 blur-3xl">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-500 rounded-full opacity-40"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-fuchsia-600 rounded-full opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-500 rounded-full opacity-40"></div>
        </div>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
