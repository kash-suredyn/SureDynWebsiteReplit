import { Link } from "wouter";
import { useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CTASection from "@/components/common/CTASection";
import SEOBreadcrumb from "@/components/common/SEOBreadcrumb";
import { SEOManager } from "@/lib/seoUtils";

export default function Blog() {
  useEffect(() => {
    document.title = "Microsoft Dynamics 365 Business Central Blog | Expert Implementation & Migration Insights | SureDyn";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on Microsoft Dynamics 365 Business Central implementation, QuickBooks migration, ERP best practices, and business optimization strategies from SureDyn\'s certified consultants.');
    }

    // SEO optimizations
    SEOManager.setPageSEO({
      title: 'Microsoft Dynamics 365 Business Central Blog | Expert Implementation & Migration Insights | SureDyn',
      description: 'Expert insights on Microsoft Dynamics 365 Business Central implementation, QuickBooks migration, ERP best practices, and business optimization strategies from SureDyn\'s certified consultants.',
      keywords: 'Microsoft Dynamics 365 Business Central blog, ERP implementation insights, QuickBooks migration guide, business central best practices, ERP consulting blog, business optimization tips',
      canonical: 'https://suredyn.com/blog'
    });

    // Add Blog structured data
    const blogData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "SureDyn Business Solutions Blog",
      "description": "Expert insights on Microsoft Dynamics 365 Business Central implementation and migration",
      "url": "https://suredyn.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "SureDyn Business Solutions",
        "url": "https://suredyn.com"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-blog-schema', 'true');
    script.textContent = JSON.stringify(blogData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-blog-schema="true"]');
      if (existingScript) existingScript.remove();
    };
  }, []);
  const featuredPost = {
    title: "New Jersey Manufacturing's Digital Revolution: How Local Companies Thrive with Business Central",
    excerpt: "From Camden's chemical plants to Newark's logistics hubs—discover how 200+ New Jersey manufacturers use Business Central to compete globally while maintaining their Garden State competitive edge.",
    author: "Michael Chen, NJ Manufacturing Consultant",
    date: "January 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "New Jersey Manufacturing",
    slug: "nj-manufacturing-digital-revolution-2025"
  };

  const blogPosts = [
    {
      title: "QuickBooks Migration Disasters: What 150+ New Jersey Businesses Taught Us",
      excerpt: "Real migration stories from Montclair to Newark—the most common problems businesses face and proven solutions for 2025 transitions.",
      author: "Sarah Johnson, Migration Specialist", 
      date: "January 12, 2025",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "QuickBooks Migration",
      slug: "nj-quickbooks-migration-lessons-2025"
    },
    {
      title: "Port Newark to Global Markets: Supply Chain Mastery with Business Central",
      excerpt: "How New Jersey companies leverage port proximity and Business Central's logistics capabilities to serve NYC, Philadelphia, and international markets.",
      author: "David Martinez, Supply Chain Expert",
      date: "January 10, 2025", 
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Supply Chain",
      slug: "port-newark-supply-chain-bc-2025"
    },
    {
      title: "Pharmaceutical Compliance Made Simple: J&J and Merck's ERP Approach",
      excerpt: "How New Jersey's pharmaceutical giants ensure FDA compliance with automated Business Central workflows—lessons for smaller pharma companies.",
      author: "Dr. Lisa Chen, Compliance Consultant",
      date: "January 8, 2025",
      readTime: "13 min read", 
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Pharmaceutical",
      slug: "pharma-compliance-nj-business-central-2025"
    },
    {
      title: "Montclair to Manhattan: Serving NYC Markets with Real-Time ERP",
      excerpt: "Case study: How a Montclair distribution company uses Business Central to serve demanding NYC customers with 2-hour delivery windows.",
      author: "Emily Rodriguez, Operations Consultant",
      date: "January 5, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Case Studies",
      slug: "montclair-to-manhattan-nyc-markets-2025"
    },
    {
      title: "Chemical Industry Scaling: Camden to Global with Business Central",
      excerpt: "How a Camden chemical manufacturer grew from local supplier to international player using Business Central's multi-currency and compliance features.",
      author: "James Wilson, Chemical Industry Expert",
      date: "January 3, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Chemical Industry",
      slug: "chemical-industry-scaling-camden-global-2025"
    },
    {
      title: "New Jersey Tax Complexity: Automated Compliance Solutions",
      excerpt: "Navigate NJ's complex tax structure with Business Central—from Newark's urban enterprise zones to suburban rates.",
      author: "Patricia Kim, Tax Technology Specialist",
      date: "December 30, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Tax & Compliance",
      slug: "nj-tax-complexity-automated-compliance-2025"
    }
  ];

  const categories = [
    "All Posts",
    "Implementation",
    "Migration",
    "Manufacturing",
    "Business Intelligence",
    "Best Practices",
    "Cloud Solutions",
    "Finance & Operations"
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-suredyn-orange/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOBreadcrumb />
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SureDyn
              <span className="text-suredyn-orange block">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert insights, best practices, and industry knowledge for Microsoft Dynamics 365 implementations and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe to Updates
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-suredyn-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{featuredPost.readTime}</div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button className="mt-6 bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                      Read Full Article
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    index === 0
                      ? "bg-suredyn-orange text-white"
                      : "bg-white text-gray-600 hover:bg-suredyn-orange hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-suredyn-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link href={`/blog/${post.slug}`}>
                        <button className="text-suredyn-orange hover:text-suredyn-orange-dark font-medium text-sm transition-colors duration-200">
                          Read More →
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <button className="bg-suredyn-orange hover:bg-suredyn-orange-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Load More Articles
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Apply These Insights?"
        subtitle="Our expert consultants can help you implement the strategies and best practices discussed in our blog to drive real business transformation"
        primaryButtonText="Schedule Strategy Session"
        backgroundColor="orange-pale"
      />

      {/* Newsletter Signup */}
      <section className="py-16 bg-suredyn-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert tips, industry insights, and implementation best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white hover:bg-gray-100 text-suredyn-orange px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">No spam. Unsubscribe anytime.</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}