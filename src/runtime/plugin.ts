import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!',nuxtApp)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
})
