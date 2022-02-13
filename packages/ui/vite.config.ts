import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import icons from 'unplugin-icons/vite'
import iconsResolver from 'unplugin-icons/resolver'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import windiCss from 'vite-plugin-windicss'
import inspect from 'vite-plugin-inspect'
import autoExportComponents from './plugins/auto-export-components'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    }),
    autoExportComponents(),
    // https://github.com/antfu/unplugin-auto-import
    autoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core'
      ],
      dts: 'src/auto-imports.d.ts'
    }),

    // https://github.com/antfu/unplugin-vue-components
    components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        iconsResolver({
          prefix: false
          // enabledCollections: ['carbon']
        })
      ],

      dts: 'src/components.d.ts'
    }),

    // https://github.com/antfu/unplugin-icons
    icons({
      autoInstall: true
    }),

    // https://github.com/antfu/vite-plugin-windicss
    windiCss(),


    // https://github.com/antfu/vite-plugin-inspect
    inspect({
      // change this to enable inspect for debugging
      enabled: false
    })
  ],

  server: {
    fs: {
      strict: true
    }
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify'
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head'
    ],
    exclude: [
      'vue-demi'
    ]
  }

  // https://github.com/vitest-dev/vitest
  //test: {
  // include: ['test/**/*.test.ts'],
  /* environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi']
    }
  } */
})
