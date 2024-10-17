module.exports = {
  siteMetadata: {
    title: "Your Business Name",
    description: "A brief description of your small business.",
    author: "Your Name",
    siteUrl: "https://yourbusiness.com",
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
    "gatsby-transformer-sharp", // Corrected the typo here
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        head: true,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Your Business Name",
        short_name: "Business",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
};