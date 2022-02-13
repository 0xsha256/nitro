import { PropType } from 'vue'

export default {
  alignV: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  alignVSm: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  alignVMd: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  alignVLg: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  alignVXl: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  alignVXxl: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'start', 'end', 'center', 'baseline', 'stretch'].includes(value)
    }
  },
  alignH: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'center', 'start', 'end', 'around', 'between'].includes(value)
    }
  },
  alignHSm: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return [''].includes(value)
    }
  },
  alignHMd: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return [''].includes(value)
    }
  },
  alignHLg: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return [''].includes(value)
    }
  },
  alignHXl: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return [''].includes(value)
    }
  },
  alignHXxl: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return [''].includes(value)
    }
  },
  gap: {
    type: [Number, String] as PropType<number | string>,
    default: '4'
  },
  gapSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  gapMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  gapLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  gapXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  gapXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  cols: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  colsSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  colsMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  colsLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  colsXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  colsXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },

  rows: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowsSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowsMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowsLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowsXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowsXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  flow: {
    type: String as PropType<string>,
    default: 'col',
    validator: (value: string) => {
      return ['', 'col', 'row', 'row-dense', 'col-dense'].includes(value)
    }
  },
  flowSm: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'col', 'row', 'row-dense', 'col-dense'].includes(value)
    }
  },
  flowMd: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'col', 'row', 'row-dense', 'col-dense'].includes(value)
    }
  },
  flowLg: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'col', 'row', 'row-dense', 'col-dense'].includes(value)
    }
  },
  flowXl: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'col', 'row', 'row-dense', 'col-dense'].includes(value)
    }
  },
  flowXxl: {
    type: String as PropType<string>,
    default: '',
    validator: (value: string) => {
      return ['', 'col', 'row', 'row-dense', 'col-dense'].includes(value)
    }
  },
  start: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  startSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  startMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  startLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  startXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  startXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  end: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  endSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  endMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  endLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  endXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  endXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  }
}