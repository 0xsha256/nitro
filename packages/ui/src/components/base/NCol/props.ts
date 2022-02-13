import { PropType } from 'vue'

export default {
  col: {
    type: [Number, Boolean, String],
    default: null,
    validator: (value: number | string) => {
      return [...Array(12)]
        .map((_, i) => {
          return Number(i) + 1 * 1
        })
        .includes(value ? parseInt(value.toString()) : 6)
    },
    required: false
  },
  sm: {
    type: [Number, String] as PropType<number | string>,
    default: null,
    validator: (value: number | string) => {
      return [...Array(12)]
        .map((_, i) => {
          return Number(i) + 1 * 1
        })
        .includes(value ? parseInt(value.toString()) : 6)
    },
    required: false
  },
  md: {
    type: [Number, String] as PropType<number | string>,
    default: null,
    validator: (value: number | string) => {
      return [...Array(12)]
        .map((_, i) => {
          return Number(i) + 1 * 1
        })
        .includes(value ? parseInt(value.toString()) : 6)
    },
    required: false
  },
  lg: {
    type: [Number, String] as PropType<number | string>,
    default: null,
    validator: (value: number | string) => {
      return [...Array(12)]
        .map((_, i) => {
          return Number(i) + 1 * 1
        })
        .includes(value ? parseInt(value.toString()) : 6)
    },
    required: false
  },
  xl: {
    type: [Number, String] as PropType<number | string>,
    default: null,
    validator: (value: number | string) => {
      return [...Array(12)]
        .map((_, i) => {
          return Number(i) + 1 * 1
        })
        .includes(value ? Number(value.toString()) : 6)
    },
    required: false
  },
  xxl: {
    type: [Number, String] as PropType<number | string>,
    default: null,
    validator: (value: number | string) => {
      return [...Array(12)]
        .map((_, i) => {
          return Number(i) + 1 * 1
        })
        .includes(value ? Number(value.toString()) : 6)
    },
    required: false
  },
  row: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  rowXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  order: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  orderSm: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  orderMd: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  orderLg: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  orderXl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  orderXxl: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
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
  }
}