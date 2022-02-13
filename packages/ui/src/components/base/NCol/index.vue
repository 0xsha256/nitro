<script lang="ts">
import { defineComponent, h, computed } from 'vue'
import props from './props'

export default defineComponent({
  name: 'NCol',
  props,
  setup(props, { slots }) {
    const style = computed(() => {
      return [
        props.col
          ? 'col-span-' + props.col
          : props.sm || props.md || props.lg || props.xl
            ? ''
            : '',
        props.sm ? 'sm:col-span-' + props.sm : '',
        props.md ? 'md:col-span-' + props.md : '',
        props.lg ? 'lg:col-span-' + props.lg : '',
        props.xl ? 'xl:col-span-' + props.xl : '',
        props.xxl ? '2xl:col-span-' + props.xxl : '',

        props.row ? 'row-span-' + props.row : '',
        props.rowSm ? 'sm:row-span-' + props.rowSm : '',
        props.rowMd ? 'md:row-span-' + props.rowMd : '',
        props.rowLg ? 'lg:row-span-' + props.rowLg : '',
        props.rowXl ? 'xl:row-span-' + props.rowXl : '',
        props.rowXxl ? '2xl:row-span-' + props.rowXxl : '',

        props.order ? 'order-' + props.order : '',
        props.orderSm ? 'sm:order-' + props.orderSm : '',
        props.orderMd ? 'md:order-' + props.orderMd : '',
        props.orderLg ? 'lg:order-' + props.orderLg : '',
        props.orderXl ? 'xl:order-' + props.orderXl : '',
        props.orderXxl ? '2xl:order-' + props.orderXxl : '',

        props.alignV ? 'self-' + props.alignV : '',
        props.alignVSm ? 'sm:self-' + props.alignVSm : '',
        props.alignVMd ? 'md:self-' + props.alignVMd : '',
        props.alignVLg ? 'lg:self-' + props.alignVLg : '',
        props.alignVXl ? 'xl:self-' + props.alignVXl : '',
        props.alignVXxl ? '2xl:self-' + props.alignVXxl : '',

        props.alignH ? 'justify-self-' + props.alignH : '',
        props.alignHSm ? 'sm:justify-self-' + props.alignHSm : '',
        props.alignHMd ? 'md:justify-self-' + props.alignHMd : '',
        props.alignHLg ? 'lg:justify-self-' + props.alignHLg : '',
        props.alignHXl ? 'xl:justify-self-' + props.alignHXl : '',
        props.alignHXxl ? '2xl:justify-self-' + props.alignHXxl : ''
      ]
    })
    return () => h('div', { class: style.value }, slots.default ? slots.default() : '')
  }
})
</script>