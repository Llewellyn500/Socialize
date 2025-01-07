import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Socialize - Llewellyn Paintsil",
  description:
    "Discover Socialize, a seamless platform to manage and share your links effortlessly.",
  keywords:
    "Socialize, Linktree alternative, link management, social media links",
  author: "Llewellyn Paintsil",
  openGraph: {
    title: "Socialize - Llewellyn Paintsil",
    description:
      "Discover Socialize, a seamless platform to manage and share your links effortlessly.",
    url: "https://socialize-llewellyn.vercel.app/",
    siteName: "Socialize",
    images: [
      {
        url: "https://socialize-llewellyn.vercel.app/profile-image.png",
        width: 1000,
        height: 1000,
        alt: "Socialize OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socialize - Llewellyn Paintsil",
    description:
      "Discover Socialize, a seamless platform to manage and share your links effortlessly.",
    images: ["https://socialize-llewellyn.vercel.app/profile-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://socialize-llewellyn.vercel.app/" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Socialize - Llewellyn Paintsil",
              url: "https://socialize-llewellyn.vercel.app/",
              logo: "https://socialize-llewellyn.vercel.app/profile-image.png",
              sameAs: [
                "https://x.com/LlewellynAdont1",
                "https://www.instagram.com/llewellynpaint/",
              ],
            }),
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KXBW50QSCE`}
        />
        <Script strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-KXBW50QSCE', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
      </head>
      <body className="bg-background text-accent min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
