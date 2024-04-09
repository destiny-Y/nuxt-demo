// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 是否开启调试工具
  devtools: { enabled: true },
  // 应用模块(引入element-Plus)
  modules: ["@element-plus/nuxt", "nuxt-lodash", "@pinia/nuxt","@nuxtjs/eslint-module"]
})
