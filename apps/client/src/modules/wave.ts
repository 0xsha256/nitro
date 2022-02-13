
import VWave from 'v-wave'

// Setup Pinia
// https://pinia.esm.dev/
export const install = (ctx: { app: { use: (x: unknown) => typeof x } }) => {
  ctx.app.use(VWave)
}