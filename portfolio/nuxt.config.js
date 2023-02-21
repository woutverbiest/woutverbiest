export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: '/woutverbiest/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "/reset.css" },
      { rel: "stylesheet", type: "text/css", href: "/style.css" },
    ],
  },

  script:[
    {src: '/anime.min.js'}
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-animejs'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCu3DKJqL5nWtbH7fYmJC5IvV0WRE2Clbk",
          authDomain: "woutverbiest-portfolio.firebaseapp.com",
          projectId: "woutverbiest-portfolio",
          storageBucket: "woutverbiest-portfolio.appspot.com",
          messagingSenderId: "771950192576",
          appId: "1:771950192576:web:4c83c897c4101d5c20ca25",
          measurementId: "G-2F9FNSQG7Z",
        },
        services: {
          firestore: true,
        },
        firestore: {
          memoryOnly: false, // default
          chunkName:
            process.env.NODE_ENV !== "production" ? "firebase-auth" : "[id]", // default
          enablePersistence: true,
          emulatorPort: 8080,
          emulatorHost: "localhost",
          settings: {},
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
