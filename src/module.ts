import { defineNuxtModule, addPlugin, addImports, addComponent, createResolver } from '@nuxt/kit'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'create-diary-module',
    configKey: 'createDiaryModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    if(options.addPlugin) {
      const runtimeDir  = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
