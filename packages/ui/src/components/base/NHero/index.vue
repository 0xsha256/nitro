
<script lang="ts">
import { PropType } from 'vue'

export default defineComponent({
  props: {
    img: {
      type: String as PropType<string>,
      default: ''
    },
    className: {
      type: [String, Array] as PropType<string | string[]>,
      default: 'rounded mb-10 flex justify-center flex-wrap relative'
    },
    h: {
      type: String as PropType<string>,
      default: 'screen'
    }
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: [props.className, 'min-h-' + props.h],
      style: {
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }, slots.default ? slots.default() : '')
  }
})
</script>