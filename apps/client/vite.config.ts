import path, { resolve } from 'path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import icons from 'unplugin-icons/vite'
import iconsResolver from 'unplugin-icons/resolver'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import windiCss from 'vite-plugin-windicss'
import { VitePWA as pwa } from 'vite-plugin-pwa'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'ui': `${path.resolve(__dirname, '../../packages/ui')}/`
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    pages({
      extensions: ['vue']
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    layouts(),

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
        }),
        (name) => {
          // where `name` is always CapitalCase
          if (name.startsWith('N'))
            return { importName: name, path: 'ui' }
        }
      ]

      // dts: 'src/components.d.ts'
    }),

    // https://github.com/antfu/unplugin-icons
    icons({
      autoInstall: true
    }),

    // https://github.com/antfu/vite-plugin-windicss
    windiCss(),

    // https://github.com/antfu/vite-plugin-pwa
    pwa({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')]
    }),

    // https://github.com/antfu/vite-plugin-inspect
    inspect({
      // change this to enable inspect for debugging
      enabled: false
    })
  ],

  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd())
      ],
      strict: false
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
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi']
    }
  }
})
