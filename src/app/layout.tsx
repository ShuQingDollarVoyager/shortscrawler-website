import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Shorts Crawler - Efficiently crawl YouTube Shorts video metadata",
  description: "YouTube Shorts Crawler - A powerful Chrome extension for efficiently scraping YouTube Shorts video metadata. Features include reliable crawling, tag management, data storage, and export functionality.",
  keywords: ["YouTube Shorts", "video crawler", "metadata scraping", "Chrome extension", "video analysis", "data extraction"],
  authors: [{ name: "YouTube Shorts Crawler Team" }],
  openGraph: {
    title: "YouTube Shorts Crawler - Efficiently crawl YouTube Shorts video metadata",
    description: "A powerful Chrome extension for efficiently scraping YouTube Shorts video metadata. Features include reliable crawling, tag management, data storage, and export functionality.",
    url: "https://shortscrawler.com",
    siteName: "YouTube Shorts Crawler",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts Crawler - Efficiently crawl YouTube Shorts video metadata",
    description: "A powerful Chrome extension for efficiently scraping YouTube Shorts video metadata.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-K271YP2T13`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K271YP2T13');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s8u98u1x1m");
            `,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6086365089627599"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
