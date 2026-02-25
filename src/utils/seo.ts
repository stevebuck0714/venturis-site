import { Metadata } from 'next';

export interface SEOPageProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  publishedDate?: string;
  modifiedDate?: string;
  type?: 'article' | 'website' | 'product' | 'profile';
  section?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  noIndex = false,
  canonical,
  publishedDate,
  modifiedDate,
  type = 'website',
  section,
}: SEOPageProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://venturisfinancial.com';
  const fullTitle = title ? `${title} | Venturis` : 'Venturis - Intelligence for Private Markets';
  const metaDescription = description || 'Sophisticated intelligence and analytics for private markets, empowering investment teams with AI-driven portfolio construction and real-time decision-making tools.';
  // Use an existing public image as the Open Graph fallback
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/images/performance-graph.png`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

  // Combine base keywords with page-specific keywords
  const baseKeywords = [
    'private markets intelligence',
    'wealth management platform',
    'portfolio construction',
    'investment analytics',
    'private equity technology',
    'fintech platform',
    'investment management software',
    'alternative investment platform',
    'institutional asset management',
    'financial technology solutions',
  ];
  const allKeywords = [...baseKeywords, ...keywords];

  const metadata: Metadata = {
    title: fullTitle,
    description: metaDescription,
    keywords: allKeywords,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type,
      siteName: 'Venturis',
      title: fullTitle,
      description: metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || 'Venturis Private Markets Intelligence',
        },
      ],
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      section,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: '@venturis',
      site: '@venturis',
    },
  };

  if (canonicalUrl) {
    metadata.alternates = {
      canonical: canonicalUrl,
    };
  }

  return metadata;
}

export function generateArticleJsonLd({
  title,
  description,
  publishedDate,
  modifiedDate,
  image,
  url,
  keywords = [],
}: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
  keywords?: string[];
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://venturisfinancial.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? `${baseUrl}${image}` : `${baseUrl}/images/performance-graph.png`,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Venturis',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Venturis',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/venturis-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${url}`,
    },
    keywords: keywords.join(', '),
    inLanguage: 'en-US',
    articleSection: 'Private Markets',
    about: {
      '@type': 'Thing',
      name: 'Private Markets Intelligence',
    },
  };
}

export function generateBreadcrumbJsonLd(breadcrumbs: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://venturisfinancial.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.url}`,
    })),
  };
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceJsonLd({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://venturisfinancial.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${baseUrl}${url}`,
    image: image ? `${baseUrl}${image}` : `${baseUrl}/images/performance-graph.png`,
    provider: {
      '@type': 'Organization',
      name: 'Venturis',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: 'Financial Technology',
    category: 'Investment Management Software',
  };
}

// Helper function to extract keywords from content
export function extractKeywords(content: string, maxKeywords: number = 10): string[] {
  // Remove HTML tags and common words
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Common stop words to exclude
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
    'by', 'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after',
    'above', 'below', 'between', 'among', 'within', 'without', 'under', 'over',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might',
    'can', 'shall', 'must', 'this', 'that', 'these', 'those', 'i', 'you', 'he',
    'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your',
    'his', 'her', 'its', 'our', 'their'
  ]);

  // Extract words and count frequency
  const words = cleanContent.split(' ').filter(word => 
    word.length > 3 && !stopWords.has(word) && /^[a-z]+$/.test(word)
  );

  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

// Helper function to generate dynamic meta description from content
export function generateDescription(content: string, maxLength: number = 160): string {
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }

  // Find the last complete sentence within the limit
  const truncated = cleanContent.substring(0, maxLength);
  const lastSentenceEnd = Math.max(
    truncated.lastIndexOf('.'),
    truncated.lastIndexOf('!'),
    truncated.lastIndexOf('?')
  );

  if (lastSentenceEnd > maxLength * 0.7) {
    return cleanContent.substring(0, lastSentenceEnd + 1);
  }

  // If no good sentence break, truncate at word boundary
  const lastSpace = truncated.lastIndexOf(' ');
  return cleanContent.substring(0, lastSpace) + '...';
}
