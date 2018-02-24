module.exports = {
  siteMetadata: {
    title: 'What\'s the cost of I66',
  },
  plugins: ['gatsby-plugin-offline', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass',
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
        theme_color: 'green',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-59137634-2',
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
};
