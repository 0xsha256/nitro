import boxen from 'boxen'
import { memory } from '../../../utils/memory'
import pkg from '../../../../package.json'

export default () => {
  const message = [
    `Memory ${memory()}`,
    `Live at http://localhost:${process.env.SERVER_PORT}`
  ].toString().replace(/,/g, '\n\n')

  console.clear()
  console.log(boxen(message, {
    title: `Orbsaas server v${pkg.version}`,
    borderStyle: 'round',
    borderColor: 'cyan',
    padding: 1
  }))
}