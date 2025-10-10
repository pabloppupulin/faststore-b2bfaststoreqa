
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',
  
  plugins: ["@vtex/faststore-plugin-buyer-portal"],

  // Platform specific configs for API
  api: {
    storeId: "b2bfaststoreqa",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USA",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://b2bfaststoreqa.vtexfaststore.com",
  secureSubdomain: "https://b2bfaststoreqa.vtexfaststore.com/",
  checkoutUrl: "https://b2bfaststoreqa.vtexfaststore.com/checkout",
  loginUrl: "https://b2bfaststoreqa.vtexfaststore.com/api/io/login",
  accountUrl: "https://b2bfaststoreqa.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/electronics",
    search: "/s?q=orange",
    pdp: "/mouse/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/mouse/p",
      collection: "/electronics",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/mouse/p",
      collection: "/electronics",
      collection_filtered: "/electronics/?category-1=electronics&marca=faststore&facets=category-1%2Cmarca%27",
      search: "/s?q=orange",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 20,
    cypressVersion: 12,
    enableFaststoreMyAccount: true,
    refreshToken: true,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://b2bfaststoreqa.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
