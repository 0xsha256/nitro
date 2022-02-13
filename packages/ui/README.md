# Nitro UI

A Vue 3 component library starter

### Features
- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 📦 Components auto importing
- 🎨 Windi CSS - next generation utility-first CSS framework
- 😃 Auto update of component export files
- 🦔 Critical CSS via critters
- ⚙️ Unit Testing with Vitest, E2E Testing with Cypress on GitHub Actions

### JIT - Just in time mode
Note that you still need to write purgeable HTML when using arbitrary values, and your classes need to exist as complete strings for Tailwind to detect them correctly.

- Don't use string concatenation to create class names
- Arbitrary values cannot be computed from dynamic values
- Don't use spaces in arbitrary values

- See [Just in time mode](https://v2.tailwindcss.com/docs/just-in-time-mode)

### Attributify mode
With WindiCSS you can write class names as attributes, so props for styling are not that necessary.

- See [Attributify Mode](https://windicss.org/posts/attributify.html)