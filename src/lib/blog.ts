import matter from 'gray-matter';
import { BlogPost, BlogCategory, BlogSearchParams } from '@/types/blog';

// Blog posts data - can be sourced from CMS or database in production
const blogPosts: BlogPost[] = [
  {
    slug: 'youtube-shorts-data-analysis-tips',
    title: 'YouTube Shorts Data Analysis Tips: How to Drive Content Creation with Data',
    description: 'Master the core techniques of YouTube Shorts data analysis, learn to extract value from key metrics like watch time, click-through rate, and engagement rate to optimize your short video content strategy.',
    content: `# YouTube Shorts Data Analysis Tips: How to Drive Content Creation with Data

YouTube Shorts, as an important platform in the short video space, has unique recommendation algorithms and user behavior patterns. Through in-depth data analysis, creators can better understand audience needs, optimize content strategies, and improve video performance.

## Core Data Metrics Analysis

### 1. Watch Time
Watch time is one of the most important metrics for YouTube's algorithm. For Shorts:
- **Target**: Watch completion rate over 70%
- **Analysis Method**: Identify audience drop-off points, optimize video opening and pacing
- **Optimization Strategy**: Capture attention in the first 3 seconds, maintain fast pace

### 2. Click-Through Rate (CTR)
CTR reflects the attractiveness of thumbnails and titles:
- **Healthy Range**: 4-10%
- **Influencing Factors**: Thumbnail design, title copy, posting time
- **Improvement Tips**: A/B test different thumbnail styles

### 3. Engagement Rate
Includes likes, comments, shares, and subscriptions:
- **Calculation Formula**: (Likes + Comments + Shares) / Views × 100%
- **Industry Benchmark**: 2-5% is considered good
- **Improvement Methods**: Encourage interaction, reply to comments, create topics

## Data Collection Strategies

### Using YouTube Shorts Crawler
Our crawler tool can help you systematically collect data:

\`\`\`javascript
// Example: Analyze common characteristics of popular Shorts
const analyzePopularShorts = (data) => {
  const insights = {
    optimalDuration: calculateAverageDuration(data),
    topHashtags: extractTopHashtags(data),
    bestPostingTimes: analyzePostingTimes(data),
    commonElements: findCommonElements(data)
  };
  return insights;
};
\`\`\`

### Competitive Analysis Key Points
1. **Content Theme Trends**: Analyze popular content from similar creators
2. **Publishing Time Patterns**: Find when target audience is most active
3. **Hashtag Usage Strategy**: Research effective hashtag combinations
4. **Visual Style Preferences**: Observe popular visual elements

## Data-Driven Content Optimization

### Content Planning
- **Topic Selection**: Based on search volume and trend data
- **Publishing Schedule**: Create timeline based on audience active hours
- **Series Strategy**: Use data to validate series content feasibility

### Real-time Adjustments
- **Monitor 24-hour post-publication data**: Quickly judge content performance
- **A/B Testing**: Compare effectiveness of different versions
- **Timely Optimization**: Adjust subsequent content based on real-time feedback

## Advanced Analysis Techniques

### 1. Audience Insights Analysis
- **Geographic Distribution**: Understand audience sources, optimize posting times
- **Device Preferences**: Importance of mobile optimization
- **Discovery Paths**: Analyze how users find your content

### 2. Trend Prediction
- **Keyword Heat Changes**: Early positioning for trending topics
- **Seasonal Patterns**: Capitalize on holiday and event marketing opportunities
- **Algorithm Change Adaptation**: Timely strategy adjustments for platform updates

### 3. ROI Analysis
- **Input-Output Ratio**: Calculate content production costs vs. returns
- **Conversion Rate Tracking**: From views to subscriptions/purchases
- **Long-term Value Assessment**: Sustained impact of content

## Tool Recommendations

### Data Analysis Tools
1. **YouTube Analytics**: Most accurate official data
2. **YouTube Shorts Crawler**: Bulk data collection
3. **Third-party Analytics Platforms**: Social Blade, VidIQ, etc.

### Automated Workflows
\`\`\`python
# Example automated data collection and analysis script
import pandas as pd
from youtube_crawler import ShortsCrawler

def daily_analytics_report():
    crawler = ShortsCrawler()
    data = crawler.get_recent_data()

    # Generate analysis report
    report = analyze_performance(data)
    send_email_report(report)

    return report
\`\`\`

## Practical Case Studies

### Case 1: Food Shorts Optimization
**Background**: Food blogger wants to improve video performance
**Data Findings**:
- Best performance when published during dinner time
- 30-45 second duration most popular
- Side dish introductions more engaging than cooking process

**Optimization Results**:
- 40% improvement in watch completion rate
- 60% increase in engagement rate
- Doubled subscription conversion rate

### Case 2: Tech Review Channel Analysis
**Challenge**: How to stand out among numerous tech channels
**Strategy**:
- Focus on new product launch reviews
- Use data to identify features audiences care about most
- Optimize thumbnail design to highlight product features

**Results**:
- 35% increase in average watch time
- CTR improved from 3% to 8%
- 300% growth in monthly views

## Common Pitfalls to Avoid

### Data Misinterpretation
- **Don't focus only on absolute numbers**: Pay attention to trends and ratios
- **Avoid short-term judgments**: Observe at least 2-4 weeks of data
- **Consider external factors**: Impact of holidays and trending events

### Over-optimization
- **Maintain content quality**: Data-driven doesn't mean abandoning creativity
- **Balance algorithm and audience**: Cater to algorithm while creating real value for viewers
- **Avoid homogenization**: Data guides direction but maintain uniqueness

## Conclusion

Data analysis is a key factor for YouTube Shorts success, but not the only factor. Excellent content creators combine data insights with creative expression perfectly, understanding audience needs while discovering innovation opportunities in data.

Remember: Data is the compass, creativity is the engine, and continuous optimization is the guarantee of success.

---

**Tool Recommendation**: Use our [YouTube Shorts Crawler](/) tool to help you collect and analyze data more efficiently, providing strong support for content creation.

**Want to learn more?** Join our [Telegram Community](https://t.me/+SC04FydTFPljMWI1) to exchange experiences with other creators.`,
    author: 'Shuqing',
    publishedAt: '2025-01-09',
    tags: ['Data Analysis', 'YouTube Shorts', 'Content Optimization', 'Crawler Tools', 'Short Videos'],
    category: 'tutorial',
    readTime: 8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
  },
  {
    slug: 'youtube-shorts-crawler-setup-guide',
    title: 'YouTube Shorts Crawler Complete Installation and Configuration Guide',
    description: 'Detailed guide on how to install and configure the YouTube Shorts Crawler extension, including common troubleshooting solutions and advanced setup tips.',
    content: `# YouTube Shorts Crawler Complete Installation and Configuration Guide

This guide will provide detailed instructions on how to install, configure, and use the YouTube Shorts Crawler extension, helping you quickly get started with data collection.

## Installation Steps

### 1. Chrome Extension Installation
1. Visit [Chrome Web Store](https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag)
2. Click "Add to Chrome"
3. Confirm installation permissions

### 2. Basic Configuration
After installation, click the extension icon for initial setup:
- Set data storage location
- Configure crawling frequency
- Select data fields

## Usage Instructions

### Starting the Crawler
1. Open YouTube Shorts page
2. Click the extension icon
3. Enable "Enable Crawler Function"
4. Start browsing Shorts content

### Data Export
- Supports JSON format export
- Filter by time range
- Supports batch data processing

## Common Issues

### Q: Why isn't the crawler working?
A: Please check:
- Is Chrome version up to date
- Have necessary permissions been granted
- Is network connection stable

### Q: What to do if data collection is slow?
A: Recommendations:
- Adjust crawling intervals
- Close unnecessary other extensions
- Ensure sufficient CPU resources

## Advanced Features

### Custom Tag Filtering
Supports filtering content based on specific tags to improve data collection accuracy.

### Scheduled Tasks
Can set up scheduled crawling tasks for automated data collection.`,
    author: 'Shuqing',
    publishedAt: '2025-01-08',
    tags: ['Installation Guide', 'Configuration Tutorial', 'Browser Extension', 'Tool Usage'],
    category: 'guide',
    readTime: 5,
    featured: false
  },
  {
    slug: 'youtube-shorts-trends-2025',
    title: '2025 YouTube Shorts Content Trends Prediction',
    description: 'Data-driven predictions for YouTube Shorts content trends in 2025, including trending topics, creation techniques, and platform changes.',
    content: `# 2025 YouTube Shorts Content Trends Prediction

Based on our analysis of extensive YouTube Shorts data, here are the content trend predictions for 2025.

## Major Trends

### 1. AI-Assisted Creation
- AI-generated content will become more prevalent
- Personalized recommendation algorithms continue to optimize
- Creators need to learn to collaborate with AI

### 2. Interactive Content
- Poll and Q&A content growth
- User engagement becomes key metric
- Community-driven content creation

### 3. Vertical Specialization
- Specialized content more popular
- Niche areas also have opportunities
- Growing demand for professional knowledge sharing

## Technical Developments

### New Feature Predictions
- Enhanced editing tools
- AR/VR integration
- Real-time collaboration features

### Algorithm Optimization
- More precise user profiling
- Diversified recommendation strategies
- Creator-friendly distribution mechanisms

## Creation Recommendations

### Content Strategy
1. Focus on specific domains
2. Maintain consistent updates
3. Value audience feedback

### Technical Preparation
1. Learn new creation tools
2. Understand platform policy changes
3. Build data analysis capabilities

Through our crawler tool, you can track the development of these trends in real-time and adjust your creation strategy accordingly.`,
    author: 'Shuqing',
    publishedAt: '2025-01-07',
    tags: ['Trend Analysis', '2025 Predictions', 'Content Strategy', 'Algorithm Optimization'],
    category: 'analysis',
    readTime: 6,
    featured: true
  },
  {
    slug: 'shortscrawler-vs-apify-comparison',
    title: 'YouTube Shorts Crawler Tools Comparison 2025: ShortsCrawler vs Apify - Creator Benchmarking Guide',
    description: 'Comprehensive comparison guide designed for YouTube creators. Compare ShortsCrawler free plugin vs Apify paid service. Learn to find benchmark channels, study successful creators, and optimize your Shorts strategy with detailed feature, cost, and usability analysis.',
    content: `# YouTube Shorts Crawler Tools Comparison 2025: ShortsCrawler vs Apify - Creator Benchmarking Guide

> **TL;DR**: ShortsCrawler plugin provides a **free, simple, and local** YouTube Shorts data scraping solution, while Apify requires a monthly fee starting at $49. For individual users and small teams, ShortsCrawler is the better choice.

## Table of Contents
- [Tool Overview](#tool-overview)
- [Core Feature Comparison](#core-feature-comparison)
- [Use Case Analysis](#use-case-analysis)
- [Performance Comparison](#performance-comparison)
- [Conclusion and Recommendations](#conclusion-and-recommendations)

## Introduction

In 2025, **YouTube Shorts data scraping** has become an essential skill for content creators and marketers. With the explosive growth of short-form video content, choosing the right **YouTube Shorts crawler tool** is crucial.

**Why do you need YouTube Shorts crawler tools?**

As a content creator, have you ever encountered these challenges:
- 🤔 Not knowing what type of Shorts videos are most popular?
- 📊 Wanting to analyze competitors' successful video characteristics?
- 🎯 Hoping to find benchmark channels in your niche for learning?
- 📈 Needing data insights to optimize your video strategy?

**ShortsCrawler Plugin's Core Value: Help you quickly find benchmark channels and learn from successful creators' experiences**

Through data analysis, you can:
- **Discover viral video patterns**: Analyze titles, tags, posting times of high-performing videos
- **Find benchmark creators**: Filter out channels similar to yours but more successful
- **Optimize content strategy**: Adjust your Shorts direction based on data insights
- **Improve video performance**: Learn successful title writing, tag usage, and content structure

This article provides an in-depth comparison of two mainstream solutions: **ShortsCrawler Chrome Plugin** and **Apify YouTube Shorts Scraper**, helping you choose the best data analysis tool for creators.

## Tool Overview

### ShortsCrawler - Creator-Focused Chrome Plugin
[ShortsCrawler](https://shortscrawler.com/) is a Chrome browser plugin specifically designed for YouTube Shorts creators, **focused on helping creators find benchmark channels, analyze successful video patterns, and quickly improve content quality**.

**Core Advantages**:
- 🎯 **Smart Benchmarking Analysis**: Quickly filter successful creators in your field
- 📊 **Local Data Storage**: All analysis data saved locally for long-term tracking
- 🏷️ **Intelligent Tag Management**: Automatically categorize different types of successful cases
- 💡 **Creative Inspiration Mining**: Discover new content directions from data

### Apify YouTube Shorts Scraper - Cloud-Based Enterprise Solution
Apify is a well-known web scraping platform that provides cloud-based YouTube Shorts data extraction services as part of its extensive scraping tool ecosystem.

## Core Feature Comparison

### 1. Ease of Use

**ShortsCrawler Plugin ✅**
- **One-click installation**: Direct installation from Chrome Web Store, no account registration required
- **Zero configuration startup**: Ready to use after installation, no complex setup needed
- **User-friendly interface**: Clean interface with multilingual support, beginner-friendly
- **Real-time feedback**: Live display of scraping progress and results

**Apify YouTube Shorts Scraper ❌**
- **Complex registration process**: Requires Apify account registration
- **High learning curve**: Need to understand Actor concepts and JSON configuration
- **Technical barriers**: Not user-friendly for non-technical users
- **Complex configuration**: Multiple parameters need to be set before starting

### 2. Data Storage Method

**ShortsCrawler Plugin ✅**
- **Local storage**: All data stored locally with complete data security control
- **Offline access**: View historical scraping records anytime without internet
- **Privacy protection**: Data doesn't pass through third-party servers
- **Fast retrieval**: Local search functionality with instant historical data lookup

**Apify YouTube Shorts Scraper ❌**
- **Cloud storage**: Data stored on Apify servers
- **Network dependent**: Requires continuous internet connection
- **Privacy risks**: Data processed through third parties
- **Access restrictions**: Need to log in to account to view data

### 3. Cost Structure

**ShortsCrawler Plugin ✅**
- **Completely free**: No usage fees whatsoever
- **Unlimited usage**: No restrictions on scraping quantity or frequency
- **No hidden costs**: Won't suddenly charge or limit functionality
- **One-time installation, permanent use**

**Apify YouTube Shorts Scraper ❌**
- **Pay-per-use**: Need to purchase compute units
- **Monthly subscription**: Minimum $49/month Starter plan
- **Hidden costs**: Requires residential proxies and other additional fees
- **Usage limitations**: Extremely limited free quota ($5 per month)

### 4. Benchmark Channel Discovery and Learning Features

**ShortsCrawler Plugin ✅**
- **Smart filtering functionality**: Quickly find excellent creators based on view count, engagement rate metrics
- **Success case marking**: Can mark and categorize videos worth learning from
- **Trend analysis**: Discover popular content types through tag management
- **Creative inspiration library**: Build your own database of successful cases for reference
- **Data comparison**: Easily compare performance differences between creators

**Apify YouTube Shorts Scraper ❌**
- **Raw data output**: Only provides basic data without analysis features
- **Lack of filtering tools**: Need to manually process large amounts of data to find valuable information
- **No learning features**: Not designed with creator optimization in mind
- **Isolated data**: Difficult to establish systematic learning and benchmarking systems

### 5. Data Export Formats

**ShortsCrawler Plugin ✅**
- **JSON format**: Standardized data format
- **Instant export**: Click to export all data immediately
- **Good compatibility**: Seamless integration with other tools
- **Complete data**: Includes all scraped metadata

**Apify YouTube Shorts Scraper ⚖️**
- **Multiple formats**: Supports JSON, CSV, Excel, and other formats
- **Cloud download**: Need to download data files from web interface
- **Rich formats**: Provides more export options
- **Processing delays**: Need to wait for cloud processing completion

## Use Case Analysis

### YouTube Content Creators (Highly Recommend ShortsCrawler)
**Typical Needs**:
- Find successful creators in the same field for learning
- Analyze common characteristics of viral videos
- Optimize title and tag strategies
- Discover new content creation directions

**ShortsCrawler Advantages**:
- **Zero-cost learning**: Free access to competitor analysis data
- **Instant benchmarking**: Collect benchmark channel data while browsing YouTube
- **Creative optimization**: Improve Shorts strategy through data insights
- **Long-term tracking**: Build your own database of excellent cases

**Real Application Case**:
> Food blogger Mike used ShortsCrawler to analyze 50 successful food Shorts videos and discovered that videos showing "complete cooking process within 30 seconds" had 40% higher average completion rates than other types. Based on this finding, he adjusted his video pacing, resulting in a 3x increase in average video views within one month.

### Small Marketing Teams (Recommend ShortsCrawler)
**Typical Needs**:
- Provide competitor analysis reports for clients
- Discover trending content in industries
- Develop data-driven content strategies
- Control tool usage costs

**ShortsCrawler Advantages**:
- **Budget-friendly**: No subscription fees, suitable for small team budgets
- **Quick delivery**: No complex configuration, start analysis work immediately
- **Client demonstration**: Can demonstrate analysis process directly in front of clients
- **Team collaboration**: Multiple people can use simultaneously, easy data sharing

### Personal Media Studios (Recommend ShortsCrawler)
**Typical Needs**:
- Manage content strategies for multiple accounts
- Cross-platform content optimization
- Discover new content opportunities
- Improve video production ROI

**Application Scenarios**:
- **Content planning**: Create next week's publishing plan based on successful case data
- **Performance comparison**: Track your video performance gap with benchmark channels
- **Inspiration mining**: Find creative inspiration from successful videos in different fields
- **Trend prediction**: Predict next trending content direction through data changes

### Large Enterprise Users
**Consider: Apify + ShortsCrawler Combination**
- Enterprise users may need Apify's advanced features
- But ShortsCrawler can still serve as a quick validation tool
- Combined use for complementary advantages

## Performance Comparison

### Scraping Speed Test
**ShortsCrawler Plugin**:
- Average 20-30 videos per minute
- Native browser performance, responsive
- No server delay issues

**Apify YouTube Shorts Scraper**:
- Speed depends on selected compute resources
- May have queue waiting times
- Network latency affects performance

### Data Accuracy
**Both are comparable**:
- Both accurately obtain basic video metadata
- Include core information like titles, view counts, like counts
- ShortsCrawler superior in tag processing

## Frequently Asked Questions (FAQ)

**Q: How to use ShortsCrawler to find benchmark channels?**
A: Search for keywords in your content field on YouTube, use ShortsCrawler to collect data from well-performing videos, then filter out creators worth learning from based on metrics like view count and engagement rate.

**Q: What key data should I analyze to improve my videos?**
A: Focus on: title length and wording, posting time, video duration, tag usage, thumbnail style, content structure. ShortsCrawler can help you systematically collect this data.

**Q: How to avoid over-imitation while maintaining originality?**
A: Learn successful patterns, not specific content. For example, learn the pattern that "titles with numbers are more attractive" rather than directly copying others' titles.

**Q: Will the ShortsCrawler plugin be detected by YouTube?**
A: ShortsCrawler is specifically optimized to simulate real user browsing behavior, making it safe and reliable. Recommend reasonable usage frequency control.

**Q: How to practically apply data analysis to content creation?**
A: Suggest establishing a cycle of "successful cases - pattern summary - application testing - effect verification." ShortsCrawler's tag management feature can help systematize this process.

## Related Resources

- **[ShortsCrawler Official Website](https://shortscrawler.com/)**: Get latest version and usage tutorials
- **[Chrome Web Store Download](https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag)**: Direct plugin installation
- **[YouTube Shorts Creator Guide](https://shortscrawler.com/blog)**: Learn more short video strategies
- **[Data Analysis Best Practices](https://shortscrawler.com/blog/data-analysis-tips)**: How to discover creative inspiration from data
- **[Telegram User Community](https://t.me/+SC04FydTFPljMWI1)**: Exchange benchmarking experiences with other creators

## Conclusion and Recommendations

### If you are...

**Individual User/Small Team**
→ **Highly Recommend ShortsCrawler Plugin**
- Zero cost with complete functionality
- Simple operation, ready to use
- Data security with local control

**Technical Developer**
→ **Recommend ShortsCrawler Plugin as Primary Tool**
- Focus on data analysis rather than data acquisition
- Exported JSON format convenient for further processing
- Save development and maintenance costs

**Large Enterprise**
→ **Suggest Combined Use**
- ShortsCrawler for quick validation and small-scale testing
- Apify for large-scale, automated enterprise needs

### Final Recommendation

For the vast majority of users, **ShortsCrawler Plugin is the better choice**:

1. **Cost advantage**: Completely free vs $49/month starting fee
2. **Ease of use**: One-click installation vs complex configuration
3. **Data security**: Local storage vs cloud risks
4. **Feature specialization**: Optimized for Shorts vs general solution
5. **Maintenance burden**: Zero maintenance vs continuous subscription

ShortsCrawler Plugin proves the philosophy of "specialized tools for specialized tasks." It focuses on YouTube Shorts data scraping and achieves ultimate user experience and feature completeness in this field.

---

*Want to experience ShortsCrawler Plugin? Visit [Chrome Web Store](https://chromewebstore.google.com/detail/youtube-shorts-crawler/ijmdekoohjomoonpfdplgdonlhahfpag) for free installation, or visit the [official website](https://shortscrawler.com/) for more information.*

*Join our [Telegram Community](https://t.me/+SC04FydTFPljMWI1) to exchange experiences and get support from other creators.*`,
    author: 'Shuqing',
    publishedAt: '2025-01-10',
    tags: ['Tool Comparison', 'Apify', 'Cost Analysis', 'User Experience', 'Creator Tools', 'Benchmarking', 'YouTube Analytics', 'Content Strategy'],
    category: 'tutorial',
    readTime: 8,
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  }
];

const categories: BlogCategory[] = [
  {
    id: 'tutorial',
    name: 'Tutorials',
    description: 'Detailed tutorials and practical guides',
    count: 2
  },
  {
    id: 'guide',
    name: 'Setup & Configuration',
    description: 'Installation and configuration technical documentation',
    count: 1
  },
  {
    id: 'analysis',
    name: 'Data Analysis',
    description: 'Data analysis techniques and industry insights',
    count: 1
  },
  {
    id: 'news',
    name: 'Industry News',
    description: 'Latest industry updates and platform changes',
    count: 0
  }
];

// Get all posts
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Get featured posts
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

// Get all categories
export function getAllCategories(): BlogCategory[] {
  return categories;
}

// Get posts by category
export function getPostsByCategory(categoryId: string): BlogPost[] {
  return blogPosts.filter(post => post.category === categoryId);
}

// Search posts
export function searchPosts(params: BlogSearchParams): BlogPost[] {
  let results = [...blogPosts];

  // Keyword search
  if (params.query) {
    const query = params.query.toLowerCase();
    results = results.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (params.category && params.category !== 'all') {
    results = results.filter(post => post.category === params.category);
  }

  // Tag filter
  if (params.tags && params.tags.length > 0) {
    results = results.filter(post =>
      params.tags!.some(tag => post.tags.includes(tag))
    );
  }

  // Sort
  switch (params.sort) {
    case 'oldest':
      results.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
      break;
    case 'popular':
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default: // newest
      results.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  return results;
}

// Get all tags
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

// Get related posts
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const related = blogPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;

      // Same category bonus
      if (post.category === currentPost.category) score += 3;

      // Common tags bonus
      const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      score += commonTags.length * 2;

      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return related;
}
