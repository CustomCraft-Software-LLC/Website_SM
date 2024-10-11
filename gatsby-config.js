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
        resolve: "gatsby-plugin-image",
        options: {},
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
        resolve: "gatsby-plugin-google-analytics",
        options: {
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", // Replace with your tracking ID
        },
      },
      {
        resolve: "gatsby-plugin-gtag",
        options: {
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", // Replace with your tracking ID
          head: true,
        },
      },
      {
        resolve: "gatsby-plugin-offline",
        options: {},
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: "Your Business Name",
          short_name: "Business",
          start_url: "/",
          background_color: "#ffffff",
          display: "standalone",
          icon: "src/images/icon.png", // Path to your favicon
        },
      },
      {
        resolve: "gatsby-plugin-eslint",
        options: {
          test: /\.(js|jsx|ts|tsx)$/, // Apply ESLint to these file types
          exclude: /(node_module)/,
          stages: ["develop", "build"],
        },
      },
    ],
  };