import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: false,

  plugins: [
    typography()
  ],
  theme: {
    extend: {
      colors: {
        /** Color namer: https://colornamer.robertcooper.me/
         * Color gen: https://tailwind-color-palette.netlify.app/
         */
        'strawberry-dust': '#fef1eb',
        'creamy-orange': '#fce8d1',
        'christmas-orange': '#d96d2c',
        'sunset-cruise': '#ffbf94',
        'young-green-onion': '#a4d24b',
        'red-potion': '#dd153c',
        'venetian-nights': '#7056ff',
        'cloud-day': '#dee7da'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600]
              }
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' }
          }
        }
      }
    }
  }
})
