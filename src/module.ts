import { defineNuxtModule, addPlugin, addComponent, addImports,createResolver } from '@nuxt/kit'
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
      const runtimeDir  = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    addComponent({
      name: 'DiaryCreate', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/DiaryCreate.vue')
    })
    addImports({
      name: 'onLoginSuccess', // name of the composable to be used
      as: 'onLoginSuccess',
      from: resolver.resolve('runtime/listener/onLoginSuccess') // path of composable
    })
  }
})
