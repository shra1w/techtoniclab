import { Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const montserrat = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "IT Courses in Nagpur | SAP, Data Science & Data Analytics | Techtonic-Lab ", // Main Focus Keyword
    template: "%s | IT Courses In Nagpur"
  },
  description: "IT Courses in Nagpur at Techtonic Lab with hands-on training in SAP, Data Science & Data Analyst courses for real-world job success.",
  keywords: ["IT Courses in Nagpur", "SAP Course Nagpur", "Data Science Course Nagpur", "Data Analyst Classes Nagpur", "IT Training Institute"],
  openGraph: {
    title: "IT Courses In Nagpur | Techtonic Lab",
    description: "IT Courses in Nagpur at Techtonic Lab with hands-on training in SAP, Data Science & Data Analyst courses for real-world job success.",
    url: "https://techtoniccorporate.com/", // Assuming this is your domain based on context
    siteName: "Techtonic Lab",
    locale: "en_IN",
    type: "website",
  },
  verification: {
    google: "BM7840HXw0KZNN-AzDAoNhGrqXtiWzCku096rHFmNUw",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Techtonic Lab",
  "alternateName": "Techtonic Corporate",
  "url": "https://techtoniccorporate.com",
  "logo": "https://techtoniccorporate.com/images/logo.png",
  "image": "https://techtoniccorporate.com/images/techtonic-lab.jpg",
  "description": "Techtonic Lab is an IT training institute in Nagpur offering practical, placement-focused courses in SAP, Data Analytics, and Data Science.",
  "telephone": "+918766069947",
  "email": "info@techtoniccorporate.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Second Floor, Plot No.10, SAI NIT-JIT PLAZA, Beltarodi Rd, nr. GULMOHAR RESTAURANT",
    "addressLocality": "Manish Nagar, Somalwada",
    "addressRegion": "Maharashtra",
    "postalCode": "440037",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.0839302",
    "longitude": "79.0799193"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "11:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/techtonic_lab/"
  ],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "areaServed": {
    "@type": "City",
    "name": "Nagpur"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ER3407LB59"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ER3407LB59');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u6gxnvln1k");
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}