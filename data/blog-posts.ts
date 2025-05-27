export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  author: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    slug: "future-of-web-design-2024",
    excerpt: "Explore the emerging trends in web design that will shape the digital landscape in 2024 and beyond.",
    content: `
      <p>The web design landscape is constantly evolving, and 2024 is no exception. Here are the key trends that will shape the future of web design:</p>
      
      <h2>1. AI-Powered Design Tools</h2>
      <p>Artificial intelligence is revolutionizing how we create and optimize websites. From automated layout suggestions to intelligent content generation, AI tools are becoming indispensable for modern web designers. These tools can:</p>
      <ul>
        <li>Generate custom layouts based on content</li>
        <li>Suggest color schemes and typography</li>
        <li>Optimize images and assets automatically</li>
        <li>Create responsive designs with minimal effort</li>
      </ul>

      <h2>2. Micro-Interactions</h2>
      <p>Small, subtle animations and interactions that provide feedback and enhance user experience are becoming increasingly important. These micro-interactions make websites feel more responsive and engaging. Examples include:</p>
      <ul>
        <li>Button hover effects</li>
        <li>Form field animations</li>
        <li>Loading state indicators</li>
        <li>Scroll-triggered animations</li>
      </ul>

      <h2>3. Dark Mode Optimization</h2>
      <p>With more users preferring dark mode, optimizing websites for both light and dark themes has become essential. This includes careful consideration of:</p>
      <ul>
        <li>Contrast ratios for better readability</li>
        <li>Color psychology in dark environments</li>
        <li>Image and media optimization</li>
        <li>System-level integration</li>
      </ul>
    `,
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Design",
    author: "Velora Studio",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Why Your Business Needs a Custom Website",
    slug: "why-business-needs-custom-website",
    excerpt: "Discover the benefits of having a custom website and how it can help your business stand out in the digital world.",
    content: `
      <p>In today's digital-first world, having a custom website is no longer optional—it's essential. Here's why your business needs a custom website:</p>

      <h2>1. Brand Identity and Recognition</h2>
      <p>A custom website allows you to create a unique digital presence that perfectly aligns with your brand identity. This includes:</p>
      <ul>
        <li>Custom color schemes and typography</li>
        <li>Unique layouts and design elements</li>
        <li>Brand-specific imagery and graphics</li>
        <li>Consistent messaging and tone</li>
      </ul>

      <h2>2. Better User Experience</h2>
      <p>Custom websites are built with your specific users in mind, leading to:</p>
      <ul>
        <li>Intuitive navigation</li>
        <li>Faster loading times</li>
        <li>Mobile-optimized design</li>
        <li>Accessible content</li>
      </ul>

      <h2>3. Competitive Advantage</h2>
      <p>Stand out from competitors with unique features and functionality:</p>
      <ul>
        <li>Custom booking systems</li>
        <li>Product configurators</li>
        <li>Interactive elements</li>
        <li>Integration with existing tools</li>
      </ul>
    `,
    date: "2024-03-10",
    readTime: "4 min read",
    category: "Business",
    author: "Velora Studio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Impact of AI on Web Development",
    slug: "ai-impact-web-development",
    excerpt: "Learn how artificial intelligence is revolutionizing web development and what it means for your projects.",
    content: `
      <p>Artificial Intelligence is transforming web development in unprecedented ways. Here's how AI is changing the game:</p>

      <h2>1. Automated Code Generation</h2>
      <p>AI tools can now generate code based on natural language descriptions, making development faster and more efficient:</p>
      <ul>
        <li>Component generation</li>
        <li>API integration</li>
        <li>Database queries</li>
        <li>Test case creation</li>
      </ul>

      <h2>2. Enhanced Testing and Debugging</h2>
      <p>AI-powered testing tools can:</p>
      <ul>
        <li>Identify potential bugs before deployment</li>
        <li>Suggest performance optimizations</li>
        <li>Automate regression testing</li>
        <li>Generate test cases</li>
      </ul>

      <h2>3. Personalized User Experiences</h2>
      <p>AI enables dynamic content personalization:</p>
      <ul>
        <li>User behavior analysis</li>
        <li>Content recommendations</li>
        <li>Dynamic pricing</li>
        <li>Personalized interfaces</li>
      </ul>
    `,
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Development",
    author: "Velora Studio",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  }
] 