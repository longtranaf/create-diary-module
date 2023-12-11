export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt', 'nuxt-icon','@pinia-plugin-persistedstate/nuxt'],
  createDiaryModule: {},
  devtools: { enabled: true },
})
