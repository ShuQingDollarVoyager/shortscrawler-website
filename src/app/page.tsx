import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <div className="rounded-xl border max-w-md mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 text-white shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">YouTube Shorts Crawler</span>
                  </div>
                  <Badge className="bg-white/20 text-white border-transparent hover:bg-white/30">
                    v1.0.0
                  </Badge>
                </div>
                <Button className="w-full mb-4 bg-white/20 hover:bg-white/30 text-white border-white/30">
                  ⚙️ Open Configuration Page
                </Button>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Browse YouTube Shorts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enable Crawler Function</span>
                    <div className="w-10 h-5 bg-green-500 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-green-300">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    <span className="text-sm">Crawler Running</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 h-full">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-lg font-semibold mb-3">Reliable Scraping</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliably scrape YouTube Shorts video metadata with minimal anti-crawling issues
              </p>
            </Card>

            <Card className="text-center p-6 h-full">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h4 className="text-lg font-semibold mb-3">Tag Management</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Video classification and management based on hashtags, easily organize and track different types of content
              </p>
            </Card>

            <Card className="text-center p-6 h-full">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
              </div>
              <h4 className="text-lg font-semibold mb-3">Data Storage</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Store all scraped video data locally, view and search historical records anytime
              </p>
            </Card>

            <Card className="text-center p-6 h-full">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h4 className="text-lg font-semibold mb-3">Export Function</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Export scraped data in JSON format for easy integration with other tools
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Get Started with YouTube Shorts Crawler</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stable scraping, reliable management, and comprehensive analysis of YouTube Shorts video data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/features">Learn More Features</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/usage">View Usage Tutorial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community and Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Community */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                🤝 Join Our Community
              </h3>
              <p className="text-gray-600 mb-6">
                Join our Telegram community to connect with creators and share YouTube Shorts strategies and data analysis insights
              </p>
              <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                <Link
                  href="https://t.me/+SC04FydTFPljMWI1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Telegram Community
                </Link>
              </Button>
            </Card>

            {/* Development Team */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                👥 Development Team
              </h3>
              <p className="text-gray-600 mb-6">
                We are a professional development team dedicated to providing high-quality tools for YouTube creators
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold">Shuqing</h4>
                    <p className="text-sm text-gray-600">Project Founder & Lead Developer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Full-stack developer with expertise in C# software and web development, later specializing in Python for web scraping and data analysis.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="container mx-auto text-center">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
            <h4 className="font-semibold mb-3">Having Issues?</h4>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions, please contact:
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:luo353761425@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  luo353761425@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
