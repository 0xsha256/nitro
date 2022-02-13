<script lang="ts">
import { defineComponent, PropType, h, computed } from 'vue'

export default defineComponent({
  name: 'NContainer',
  props: {
    tag: {
      type: String as PropType<string>,
      default: 'div'
    },
    fluid: {
      type: [Boolean, String] as PropType<boolean | string>,
      default: false,
      validator: (value: boolean | string): boolean => {
        return [true, false, 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
      }
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      return [
        'container',
        typeof props.fluid === 'boolean' ?
          props.fluid === true ?
            ''
            : 'mx-auto'
          : props.fluid + ':mx-auto'
      ]
    })
    return () => h('div', { class: style.value }, slots.default ? slots.default() : '')
  }
})
</script>