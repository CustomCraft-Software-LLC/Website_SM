module.exports = {
    siteMetadata: {
      title: "Your Business Name",
      description: "A brief description of your small business.",
      author: "Your Name",
      siteUrl: "https://yourbusiness.com", // Change this to your actual website URL
    },
    plugins: [
      {
        resolve: "gatsby-plugin-sitemap",
        options: {
          output: "/sitemap.xml",
        },
      },
      {
        resolve: "gatsby-plugin-react-helmet",
        options: {
          headComponents: [],
        },
      },
      {
        resolve: "gatsby-plugin-seo",
        options: {
          siteName: "Your Business Name",
          defaultSiteImage: "/images/default.jpg", // Provide a default image
          siteUrl: "https://yourbusiness.com", // Change this to your actual website URL
          globalSchema: `{
            "@type": "WebSite",
            "@id": "https://yourbusiness.com/#website",
            "url": "https://yourbusiness.com/",
            "name": "Your Business Name",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourbusiness.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }`
        },
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: "https://yourbusiness.com",
          sitemap: "https://yourbusiness.com/sitemap.xml",
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      {
        resolve: "gatsby-plugin-schema-snapshot", // Optional: For better structured data
        options: {
          // Add structured data options if needed
        },
      },
      "gatsby-plugin-sass", // If you want to use Sass for styling
      {
        resolve: "gatsby-plugin-image", // For optimized images
        options: {
          // Add options if needed
        },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-plugin-google-analytics", // Optional: For tracking
        options: {
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", // Replace with your tracking ID
        },
      },
      {
        resolve: "gatsby-plugin-gtag", // Optional: For Google Analytics
        options: {
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", // Replace with your tracking ID
          head: true, // Include script in the head
        },
      },
    ],
  };