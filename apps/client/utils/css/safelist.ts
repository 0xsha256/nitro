import colors from './colors'

function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

const mediaQueries = [
  '',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl'
]

const positions = [
  'start', 'end', 'center', 'baseline',
  'stretch'
]

const flow = [
  'col', 'row', 'row-dense', 'col-dense'
]

const classesWithNumberPostFix = [
  'p', 'px', 'py', 'pt', 'pb', 'pl',
  'pr', 'm', 'mx', 'my', 'mt', 'mb',
  'ml', 'mr', 'grid-cols', 'gap',
  'grid-rows', 'row-start', 'row-end',
  'w', 'h'
].map((className) =>
  range(20).map((num) => mediaQueries.map((size, key) =>
    `${key === 0 ? '' : `${size}:`}${className}-${num}`
  ))).toString().replace(/,/g, ' ')

const classesWithStringPostFix = [
  flow.map((i) => `grid-flow-${i}`).join(' '),
  'justify-start',
  'justify-center',
  'justify-end',
  'container',
  'mx-auto',
  positions.map((i) => `items-${i}`).join(' ')
].map((className) =>
  mediaQueries.map((size, key) =>
    `${key === 0 ? '' : `${size}:`}${className}`
  )).toString().replace(/,/g, ' ')

const allColors = [] as string[]
Object.entries(colors).map((i) => {
  if (typeof i[1] !== 'object') {
    i.map((el, key, array) => {
      if (!String(el).includes('#')) {
        allColors.push(String(el))
      }
    })
  } else {
    i.map((el, key, array) => {

      if (typeof el === 'object') {
        const name = array[key - 1]

        Object.keys(el).map((level) => {
          allColors.push(`${name}-${level}`)
        })
      }
    })
  }
})

const classesWithColorsPostFix = allColors.map((i) => {
  return [
    `hover:bg-${i}`,
    `hover:text-${i}`,
    `hover:border-${i}`,
    `bg-${i}`,
    `text-${i}`,
    `border-${i}`
  ].join(' ')
}).join(' ')

export default [
  classesWithNumberPostFix,
  classesWithStringPostFix,
  classesWithColorsPostFix
]