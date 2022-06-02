import colors from 'vuetify/es5/util/colors'

export default {

  axios: {
    baseURL: process.env.API_URL,
  },

  // 環境変数
  privateRuntimeConfig: {
    apiURL: process.env.API_URL,
    apiSecret: process.env.API_SECRET
  },
  publicRuntimeConfig: {
    apiURL: process.env.NODE_ENV !== 'production' ? process.env.API_URL : '',
    apiSecret: process.env.NODE_ENV !== 'production' ? process.env.API_SECRET : ''
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/blogs/page/:p',
        component: resolve(__dirname, 'pages/blogs/index.vue'),
        name: 'page',
      })
      routes.push({
        path: '/works/:p',
        component: resolve(__dirname, 'pages/works/index.vue'),
        name: '',
      })
      routes.push({
        path: '/members/:p',
        component: resolve(__dirname, 'pages/members/index.vue'),
        name: '',
      })
    },
  },

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_SECRET,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  generate: {
    fallback: true, // 不明なパスへのアクセス時もNuxtコンポーネントで解決
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 1000日後に会社化する谷中研究所',
    title: '1000日後に会社化する谷中研究所',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-microcms-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.lighten2,
          accent: colors.grey.lighten3,
          secondary: colors.amber.lighten3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
