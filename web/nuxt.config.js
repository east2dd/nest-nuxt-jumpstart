require('dotenv').config()

export default {
  srcDir: 'app/',
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/tailwind.css',
    '~/plugins/theme/scss/app.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/theme.js',
    '~/plugins/axios',
    '~/plugins/api'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    // '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/schemes/local.html#usage
    '@nuxtjs/auth',
    //'@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000/api'
  },
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/local.html#options
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/v1/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/v1/users/me', method: 'get', propertyName: false }
        }
      }
    },
    redirect: {
      login: '/account/login',
      logout: '/account/login',
      home: '/apartments'
    }
  },
  /*
   ** Router configuration
   */
  router: {
    mode: 'history',
    middleware: ['auth', 'access-guard']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  ignore: ['**/*.test.*', '**/*.spec.*'],
  env: {
    API_URL: process.env.API_URL,
    GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY
  }
}
