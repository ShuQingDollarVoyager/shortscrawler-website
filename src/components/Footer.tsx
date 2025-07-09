import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">YS</span>
              </div>
              <span className="text-lg font-semibold">YouTube Shorts Crawler</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Efficiently crawl YouTube Shorts video metadata with reliable scraping, 
              tag management, and data export capabilities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://t.me/+SC04FydTFPljMWI1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </Link>
              <Link
                href="mailto:luo353761425@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-gray-400 hover:text-white transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/usage" className="text-gray-400 hover:text-white transition-colors">
                  Usage Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chrome Store
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 YouTube Shorts Crawler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
EOF  
cd /home/project && cd shortscrawler-website && cat > src/components/Footer.tsx << 'EOF'
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">YS</span>
              </div>
              <span className="text-lg font-semibold">YouTube Shorts Crawler</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Efficiently crawl YouTube Shorts video metadata with reliable scraping, 
              tag management, and data export capabilities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://t.me/+SC04FydTFPljMWI1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </Link>
              <Link
                href="mailto:luo353761425@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/installation" className="text-gray-400 hover:text-white transition-colors">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/usage" className="text-gray-400 hover:text-white transition-colors">
                  Usage Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chrome Store
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 YouTube Shorts Crawler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
