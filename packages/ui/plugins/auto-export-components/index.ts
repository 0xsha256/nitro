import { Plugin } from 'vite'
import { basename, resolve } from 'path'
import glob from 'glob'
import { createWriteStream, unlinkSync, existsSync } from 'fs'
import chokidar from 'chokidar'

export default (): Plugin => {
  return {
    name: 'vite:auto-export-components',
    configResolved(ctx) {

      const writeExportFile = () => {
        const components = glob.sync(resolve(ctx.root, './src/components/**/*.vue'))
        const filePath = resolve(ctx.root, './src/components/index.ts')
        const exists = existsSync(filePath)

        exists ? unlinkSync(filePath) : ''
        const file = createWriteStream(filePath, {
          flags: 'a' // 'a' means appending (old data will be preserved)
        })

        file.write('/** Auto generated file */\n')

        components.forEach((i) => {
          const name = basename(i.replace('/index.vue', ''))
          const path = '.' + i.split(/components/g).splice(-1).toString()
          const statement = `export { default as ${name.trim().replace(/ /g, '')} } from '${path}'\n`

          file.write(statement)
        })
      }
      writeExportFile()
      /**
      * Watches any files in any given directory path and 
      * updates the respective .md file it belongs to.
      * @param event: "add" | "addDir" | "change" | "unlink" | "unlinkDir"
      */
      chokidar.watch(resolve(ctx.root, './src/components/**'), { ignoreInitial: true }).on('all', (event, path) => {
        if (event !== 'change') writeExportFile()
      })
    }
  }
}