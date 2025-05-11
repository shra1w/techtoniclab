export default function sitemap() {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/hire-from-us`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/aboutus`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/career`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/connect-with-us`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/corporate_grooming`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/data_analytics_course`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/terms-of-service`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/sap_course`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
    ]
  }