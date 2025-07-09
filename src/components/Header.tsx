import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">YS</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              YouTube Shorts Crawler
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors text-blue-600 border-b-2 border-blue-600 pb-1"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            href="/installation"
            className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
          >
            Installation Guide
          </Link>
          <Link
            href="/usage"
            className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
          >
            Usage Tutorial
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
          >
            Blog
          </Link>
        </nav>

        {/* Install Button */}
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link
            href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Extension
          </Link>
        </Button>
      </div>
    </header>
  );
}
