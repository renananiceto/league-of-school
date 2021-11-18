module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "leagueOfschool",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckvs58c8g0nw001xk3ejcc40c/master",
    },
  },
],
  
};
