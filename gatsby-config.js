module.exports = {
  siteMetadata: {
    title: 'What\'s the cost of I66',
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/layouts/I66.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    }],
};
