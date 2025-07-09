import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UsagePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Usage Tutorial</h1>
            <p className="text-lg text-gray-600">
              Learn how to effectively use YouTube Shorts Crawler to collect and analyze video data
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">1</Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Open YouTube Shorts</h3>
                    <p className="text-gray-600">Navigate to YouTube and go to the Shorts section</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">2</Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Activate Extension</h3>
                    <p className="text-gray-600">Click the extension icon and enable crawler function</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">3</Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Start Browsing</h3>
                    <p className="text-gray-600">Browse through Shorts content normally - data will be collected automatically</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Data Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">📊 View Collected Data</h3>
                  <p className="text-gray-600 text-sm">Access your collected data through the extension popup or export it for external analysis.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">🏷️ Tag Filtering</h3>
                  <p className="text-gray-600 text-sm">Use hashtags to filter and categorize videos for better organization.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">📤 Export Options</h3>
                  <p className="text-gray-600 text-sm">Export data in JSON format for integration with other analysis tools.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">🔍 Search Function</h3>
                  <p className="text-gray-600 text-sm">Search through collected videos using keywords, tags, or metadata.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Keep the extension enabled while browsing for continuous data collection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Regularly export your data to prevent loss</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Use tags to organize different types of content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Monitor crawler status for optimal performance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF  
cd /home/project && cd shortscrawler-website && cat > src/app/usage/page.tsx << 'EOF'
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UsagePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Usage Tutorial</h1>
            <p className="text-lg text-gray-600">
              Learn how to effectively use YouTube Shorts Crawler to collect and analyze video data
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">1</Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Open YouTube Shorts</h3>
                    <p className="text-gray-600">Navigate to YouTube and go to the Shorts section</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">2</Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Activate Extension</h3>
                    <p className="text-gray-600">Click the extension icon and enable crawler function</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Badge className="mt-1">3</Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Start Browsing</h3>
                    <p className="text-gray-600">Browse through Shorts content normally - data will be collected automatically</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Data Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">📊 View Collected Data</h3>
                  <p className="text-gray-600 text-sm">Access your collected data through the extension popup or export it for external analysis.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">🏷️ Tag Filtering</h3>
                  <p className="text-gray-600 text-sm">Use hashtags to filter and categorize videos for better organization.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">📤 Export Options</h3>
                  <p className="text-gray-600 text-sm">Export data in JSON format for integration with other analysis tools.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">🔍 Search Function</h3>
                  <p className="text-gray-600 text-sm">Search through collected videos using keywords, tags, or metadata.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Keep the extension enabled while browsing for continuous data collection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Regularly export your data to prevent loss</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Use tags to organize different types of content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-600">Monitor crawler status for optimal performance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
