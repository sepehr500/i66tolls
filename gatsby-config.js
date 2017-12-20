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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Should I take I66',
        description: 'An open source toll viewer app.',
        short_name: 'shoulditakei66',
        start_url: '/',
        background_color: '#308446',
        theme_color: '#308446;',
        display: 'minimal-ui',
        icons: [
          {
            src: './src/layouts/I66.png',
            sizes: '72x72 96x96 128x128 256x256',
          },
        ],
      },
    },
  ],
};
