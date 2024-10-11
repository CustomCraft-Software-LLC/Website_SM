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
      resolve: "gatsby-plugin-react-helmet", // Use this plugin for managing head tags, including SEO
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://yourbusiness.com",
        sitemap: "https://yourbusiness.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-image",
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
    "gatsby-plugin-offline", // Enables PWA offline functionality
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Your Business Name",
        short_name: "Business",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#317EFB", // Add a theme color for the browser toolbar
        display: "standalone",
        icon: "src/images/icon.png", // Path to your favicon
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.(js|jsx|ts|tsx)$/, // Apply ESLint to these file types
        exclude: /(node_modules|\.cache|public)/, // Exclude unnecessary directories
        stages: ["develop", "build"],
      },
    },
  ],
};