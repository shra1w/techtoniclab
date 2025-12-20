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
    default: "IT Courses In Nagpur | Techtonic Lab", // Main Focus Keyword
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
