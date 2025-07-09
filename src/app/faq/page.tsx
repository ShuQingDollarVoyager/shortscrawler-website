import { Card } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      question: "Is YouTube Shorts Crawler free to use?",
      answer: "Yes, YouTube Shorts Crawler is completely free to download and use. There are no hidden fees or premium features."
    },
    {
      question: "Does the extension collect my personal data?",
      answer: "No, the extension only collects publicly available YouTube Shorts metadata. All data is stored locally on your device and never sent to external servers."
    },
    {
      question: "Can I export the collected data?",
      answer: "Yes, you can export all collected data in JSON format for further analysis or integration with other tools."
    },
    {
      question: "How much data can the extension store?",
      answer: "The storage limit depends on your browser's local storage capacity. The extension is optimized to store large amounts of data efficiently."
    },
    {
      question: "Will this extension slow down my browser?",
      answer: "No, the extension is designed to be lightweight and run efficiently in the background without affecting your browsing experience."
    },
    {
      question: "Is it legal to scrape YouTube data?",
      answer: "The extension only collects publicly available metadata that is already visible on YouTube. However, please review YouTube's terms of service and use the tool responsibly."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about YouTube Shorts Crawler
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-600">
                  A: {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, feel free to contact our support team.
            </p>
            <a
              href="mailto:luo353761425@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF  
cd /home/project && cd shortscrawler-website && cat > src/app/faq/page.tsx << 'EOF'
import { Card } from "@/components/ui/card";

export default function FAQPage() {
  const faqs = [
    {
      question: "Is YouTube Shorts Crawler free to use?",
      answer: "Yes, YouTube Shorts Crawler is completely free to download and use. There are no hidden fees or premium features."
    },
    {
      question: "Does the extension collect my personal data?",
      answer: "No, the extension only collects publicly available YouTube Shorts metadata. All data is stored locally on your device and never sent to external servers."
    },
    {
      question: "Can I export the collected data?",
      answer: "Yes, you can export all collected data in JSON format for further analysis or integration with other tools."
    },
    {
      question: "How much data can the extension store?",
      answer: "The storage limit depends on your browser's local storage capacity. The extension is optimized to store large amounts of data efficiently."
    },
    {
      question: "Will this extension slow down my browser?",
      answer: "No, the extension is designed to be lightweight and run efficiently in the background without affecting your browsing experience."
    },
    {
      question: "Is it legal to scrape YouTube data?",
      answer: "The extension only collects publicly available metadata that is already visible on YouTube. However, please review YouTube's terms of service and use the tool responsibly."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about YouTube Shorts Crawler
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-600">
                  A: {faq.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, feel free to contact our support team.
            </p>
            <a
              href="mailto:luo353761425@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
