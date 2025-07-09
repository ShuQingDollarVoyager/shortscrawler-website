import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation Guide</h1>
            <p className="text-lg text-gray-600">
              Get started with YouTube Shorts Crawler in just a few simple steps
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold">Install from Chrome Web Store</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Download and install the extension directly from the official Chrome Web Store.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag" target="_blank">
                  Install Extension
                </Link>
              </Button>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h2 className="text-2xl font-bold">Grant Permissions</h2>
              </div>
              <p className="text-gray-600 mb-4">
                After installation, grant the necessary permissions for the extension to access YouTube data.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to YouTube.com</li>
                <li>Local storage permissions</li>
                <li>Data export capabilities</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h2 className="text-2xl font-bold">Start Crawling</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Navigate to YouTube Shorts and activate the crawler to start collecting data.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>Tip:</strong> Make sure to enable the crawler function in the extension popup before browsing YouTube Shorts.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              If you encounter any issues during installation, check our FAQ or contact support.
            </p>
            <div className="space-x-4">
              <Button asChild variant="outline">
                <Link href="/faq">View FAQ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:luo353761425@gmail.com">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF  
cd /home/project && cd shortscrawler-website && cat > src/app/installation/page.tsx << 'EOF'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation Guide</h1>
            <p className="text-lg text-gray-600">
              Get started with YouTube Shorts Crawler in just a few simple steps
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold">Install from Chrome Web Store</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Download and install the extension directly from the official Chrome Web Store.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag" target="_blank">
                  Install Extension
                </Link>
              </Button>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h2 className="text-2xl font-bold">Grant Permissions</h2>
              </div>
              <p className="text-gray-600 mb-4">
                After installation, grant the necessary permissions for the extension to access YouTube data.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to YouTube.com</li>
                <li>Local storage permissions</li>
                <li>Data export capabilities</li>
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h2 className="text-2xl font-bold">Start Crawling</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Navigate to YouTube Shorts and activate the crawler to start collecting data.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>Tip:</strong> Make sure to enable the crawler function in the extension popup before browsing YouTube Shorts.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              If you encounter any issues during installation, check our FAQ or contact support.
            </p>
            <div className="space-x-4">
              <Button asChild variant="outline">
                <Link href="/faq">View FAQ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="mailto:luo353761425@gmail.com">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
