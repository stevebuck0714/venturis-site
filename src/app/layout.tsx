import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Venturis - Intelligence for Private Markets",
    template: "%s | Venturis"
  },
  description: "Venturis provides sophisticated intelligence and analytics for private markets, empowering investment teams, wealth advisors, and capital allocators with AI-driven portfolio construction, mandate compliance, and real-time decision-making tools.",
  keywords: [
    // Core Venturis Keywords
    "private markets intelligence",
    "wealth management platform",
    "portfolio construction",
    "investment analytics",
    "private equity technology",
    "fund management software",
    "commitment pacing",
    "mandate compliance",
    "AI wealth advisory",
    "private capital analytics",
    "institutional investment tools",
    "alternative investments",
    "fund of funds management",
    "investment reporting",
    "capital allocation",
    "private market data",
    
    // Industry & Competitor Keywords
    "fintech platform",
    "financial technology solutions",
    "wealthtech software",
    "robo advisor platform",
    "digital wealth management",
    "investment management software",
    "portfolio management system",
    "asset management technology",
    "private equity software",
    "venture capital tools",
    "hedge fund technology",
    "family office software",
    "institutional asset management",
    "quantitative investment platform",
    "risk management software",
    "compliance management system",
    "financial planning software",
    "investment research platform",
    "data analytics fintech",
    "automated portfolio rebalancing",
    
    // Competitor-Adjacent Terms
    "blackrock aladdin alternative",
    "charles river development competitor",
    "eFront alternative",
    "investran competitor",
    "preqin alternative",
    "pitchbook competitor",
    "burgiss alternative",
    "dynamo software competitor",
    "addepar alternative",
    "orion advisor tech competitor",
    "morningstar direct alternative",
    "bloomberg terminal alternative",
    "refinitiv workspace competitor",
    "factset alternative",
    "ss&c advent competitor",
    "canoe intelligence alternative",
    "chronograph alternative",
    "FIS investment solutions competitor",
    "investran alternative",
    "multifonds competitor",
    "MSCI barra alternative",
    "SEI wealth platform competitor",
    
    // Solution Categories
    "IBOR investment book of record",
    "ABOR accounting book of record",
    "trade order management system",
    "performance measurement system",
    "risk analytics platform",
    "regulatory reporting software",
    "client reporting portal",
    "ESG investment analytics",
    "alternative investment platform",
    "private markets data provider"
  ],
  authors: [{ name: "Venturis Team" }],
  creator: "Venturis",
  publisher: "Venturis Financial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://venturisfinancial.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Venturis',
    title: 'Venturis - Intelligence for Private Markets',
    description: 'Sophisticated intelligence and analytics for private markets, empowering investment teams with AI-driven portfolio construction and real-time decision-making tools.',
    url: '/',
    images: [
      {
        url: '/images/performance-graph.png',
        width: 1200,
        height: 630,
        alt: 'Venturis Private Markets Intelligence Platform',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venturis - Intelligence for Private Markets',
    description: 'Sophisticated intelligence and analytics for private markets, empowering investment teams with AI-driven portfolio construction and real-time decision-making tools.',
    images: ['/images/performance-graph.png'],
    creator: '@venturis',
    site: '@venturis',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
    yandex: process.env.YANDEX_VERIFICATION_ID,
    yahoo: process.env.YAHOO_VERIFICATION_ID,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION_ID || '',
    },
  },
  category: 'technology',
  classification: 'Financial Technology, Investment Management Software',
  other: {
    'application-name': 'Venturis',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Venturis',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Venturis',
    alternateName: 'Venturis Financial',
    url: 'https://venturisfinancial.com',
    logo: 'https://venturisfinancial.com/images/venturis-logo.png',
    description: 'Sophisticated intelligence and analytics for private markets, empowering investment teams with AI-driven portfolio construction and real-time decision-making tools.',
    foundingDate: '2024',
    industry: 'Financial Technology',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      'https://twitter.com/venturis',
      'https://linkedin.com/company/venturisfinancial',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@venturisfinancial.com',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Venturis',
    url: 'https://venturisfinancial.com',
    description: 'Intelligence for Private Markets - Sophisticated analytics and AI-driven tools for investment teams, wealth advisors, and capital allocators.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://venturisfinancial.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const softwareApplicationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Venturis Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    description: 'AI-powered platform for private markets intelligence, portfolio construction, and investment analytics.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0',
      description: 'Request demo for pricing information',
    },
    provider: {
      '@type': 'Organization',
      name: 'Venturis',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd),
          }}
        />
        {/* Google Analytics */}
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-3D4EMGJXED`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-3D4EMGJXED');
              `,
            }}
          />
        </>
        {/* Microsoft Clarity */}
        {process.env.MICROSOFT_CLARITY_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.MICROSOFT_CLARITY_ID}");
              `,
            }}
          />
        )}
      </head>
      <body className={`${inter.className} bg-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
