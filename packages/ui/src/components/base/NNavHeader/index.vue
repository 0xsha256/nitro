<script lang="ts">
import { defineComponent, PropType, onBeforeUnmount, h, ref, onMounted, computed } from 'vue'

export default defineComponent({
  name: 'NHeader',
  props: {
    className: {
      type: String as PropType<string>,
      default: 'z-10 top-0 w-full pb-5 pt-5 duration-300 transform transition-transform'
    },
    position: {
      type: String as PropType<string>,
      default: 'sticky',
      validator: (value: string) => {
        return ['', 'relative', 'fixed', 'sticky', 'absolute'].includes(value)
      }
    },
    bg: {
      type: String as PropType<string>,
      default: 'bg-light-100'
    },
    bgOnScroll: {
      type: String as PropType<string>,
      default: 'bg-light-100'
    },
    limitPosition: {
      type: Number as PropType<number>,
      default: 500
    },
    lastPosition: {
      type: Number as PropType<number>,
      default: 0
    }
  },
  setup(props, { slots }) {
    const limitPosition = ref(props.limitPosition || 500)
    const scrolled = ref(false)
    const lastPosition = ref(props.lastPosition || 0)

    const handleScroll = () => {
      if (lastPosition.value < window.scrollY && limitPosition.value < window.scrollY) {
        scrolled.value = true
      }

      if (lastPosition.value > window.scrollY) {
        scrolled.value = false
      }

      lastPosition.value = window.scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const style = computed(() => {
      return [
        props.className,
        props.position,
        15 < lastPosition.value ? props.bgOnScroll : props.bg,
        scrolled.value ? '-translate-y-full' : 'translate-y-0'
      ]
    })

    return () => h('div', {
      class: style.value
    }, slots.default ? slots.default() : '')

  }
})
</script>