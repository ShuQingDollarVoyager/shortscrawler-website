import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturesPage() {
  const features = [
    {
      title: "Reliable Scraping",
      description: "Efficiently scrape YouTube Shorts video metadata with minimal anti-crawling issues",
      icon: "📊",
      category: "Core"
    },
    {
      title: "Tag Management", 
      description: "Video classification and management based on hashtags, easily organize and track different types of content",
      icon: "🏷️",
      category: "Organization"
    },
    {
      title: "Data Storage",
      description: "Store all scraped video data locally, view and search historical records anytime",
      icon: "💾",
      category: "Storage"
    },
    {
      title: "Export Function",
      description: "Export scraped data in JSON format for easy integration with other tools", 
      icon: "📤",
      category: "Export"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make YouTube Shorts Crawler the ultimate tool for video data collection and analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <Badge variant="secondary" className="text-xs">{feature.category}</Badge>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
EOF  
cd /home/project && cd shortscrawler-website && cat > src/app/features/page.tsx << 'EOF'
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturesPage() {
  const features = [
    {
      title: "Reliable Scraping",
      description: "Efficiently scrape YouTube Shorts video metadata with minimal anti-crawling issues",
      icon: "📊",
      category: "Core"
    },
    {
      title: "Tag Management", 
      description: "Video classification and management based on hashtags, easily organize and track different types of content",
      icon: "🏷️",
      category: "Organization"
    },
    {
      title: "Data Storage",
      description: "Store all scraped video data locally, view and search historical records anytime",
      icon: "💾",
      category: "Storage"
    },
    {
      title: "Export Function",
      description: "Export scraped data in JSON format for easy integration with other tools", 
      icon: "📤",
      category: "Export"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make YouTube Shorts Crawler the ultimate tool for video data collection and analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <Badge variant="secondary" className="text-xs">{feature.category}</Badge>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
