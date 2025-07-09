import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn about the team behind YouTube Shorts Crawler and our mission
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                YouTube Shorts Crawler was created to help content creators, researchers, and marketers 
                better understand the YouTube Shorts ecosystem through data-driven insights.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that access to comprehensive video metadata can help creators optimize their 
                content strategy, researchers analyze trends, and marketers make informed decisions.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Shuqing</h3>
                  <p className="text-blue-600 mb-3">Project Founder & Lead Developer</p>
                  <p className="text-gray-600 leading-relaxed">
                    Full-stack developer with expertise in C# software and web development, 
                    later specializing in Python for web scraping and data analysis. 
                    Passionate about creating tools that help creators succeed on digital platforms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🔒 Privacy First
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All data is stored locally on your device. We never collect or share your personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🎯 User-Focused
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Every feature is designed with our users' needs in mind, prioritizing simplicity and effectiveness.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🌟 Quality
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We are committed to delivering high-quality tools that creators can rely on for their success.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🤝 Community
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We actively listen to our community feedback and continuously improve our products based on user needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Whether you have questions, feedback, or suggestions, 
                don't hesitate to reach out.
              </p>
              <div className="space-y-4">
                <div>
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:luo353761425@gmail.com" className="text-blue-600 hover:underline">
                    luo353761425@gmail.com
                  </Link>
                </div>
                <div>
                  <strong>Community:</strong>{" "}
                  <Link 
                    href="https://t.me/+SC04FydTFPljMWI1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Join our Telegram group
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag" target="_blank">
                Install Extension Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF  
cd /home/project && cd shortscrawler-website && cat > src/app/about/page.tsx << 'EOF'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Learn about the team behind YouTube Shorts Crawler and our mission
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                YouTube Shorts Crawler was created to help content creators, researchers, and marketers 
                better understand the YouTube Shorts ecosystem through data-driven insights.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that access to comprehensive video metadata can help creators optimize their 
                content strategy, researchers analyze trends, and marketers make informed decisions.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Shuqing</h3>
                  <p className="text-blue-600 mb-3">Project Founder & Lead Developer</p>
                  <p className="text-gray-600 leading-relaxed">
                    Full-stack developer with expertise in C# software and web development, 
                    later specializing in Python for web scraping and data analysis. 
                    Passionate about creating tools that help creators succeed on digital platforms.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🔒 Privacy First
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All data is stored locally on your device. We never collect or share your personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🎯 User-Focused
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Every feature is designed with our users' needs in mind, prioritizing simplicity and effectiveness.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🌟 Quality
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We are committed to delivering high-quality tools that creators can rely on for their success.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    🤝 Community
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We actively listen to our community feedback and continuously improve our products based on user needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Whether you have questions, feedback, or suggestions, 
                don't hesitate to reach out.
              </p>
              <div className="space-y-4">
                <div>
                  <strong>Email:</strong>{" "}
                  <Link href="mailto:luo353761425@gmail.com" className="text-blue-600 hover:underline">
                    luo353761425@gmail.com
                  </Link>
                </div>
                <div>
                  <strong>Community:</strong>{" "}
                  <Link 
                    href="https://t.me/+SC04FydTFPljMWI1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Join our Telegram group
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag" target="_blank">
                Install Extension Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
