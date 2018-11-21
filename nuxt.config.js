const pkg = require('./package')
const _ = require('lodash')
const axios = require('axios')

// SEE: https://nuxtjs.org/faq/github-pages
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/play-with-nextjs/'
  }
} : {}

module.exports = {
  ...routerBase,

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    routes: async () => {
      const response = await axios.get('https://api.tvmaze.com/shows?page=0')
      const shows = response.data
      let routes = _.map(shows, (show) => ({
        route: `/shows/${show.id}`,
        payload: show
      }))

      routes.push({
        route: '/',
        payload: shows
      })

      return routes
    }
  }
}
