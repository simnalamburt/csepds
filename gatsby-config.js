module.exports = {
  pathPrefix: "/csepds",
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass")
      }
    }
  ]
};
