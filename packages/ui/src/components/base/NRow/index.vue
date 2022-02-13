<script lang="ts">
import { defineComponent, h } from 'vue'
import props from './props'

export default defineComponent({
  name: 'NRow',
  props,
  setup(props, { slots }) {
    const style = computed(() => {
      return [
        'grid',
        props.flow ? 'grid-flow-' + props.flow : '',
        props.flowSm ? 'sm:grid-flow-' + props.flowSm : '',
        props.flowMd ? 'md:grid-flow-' + props.flowMd : '',
        props.flowLg ? 'lg:grid-flow-' + props.flowLg : '',
        props.flowXl ? 'xl:grid-flow-' + props.flowXl : '',
        props.flowXxl ? '2xl:grid-flow-' + props.flowXxl : '',

        props.alignV ? 'items-' + props.alignV : '',
        props.alignVSm ? 'sm:items-' + props.alignVSm : '',
        props.alignVMd ? 'md:items-' + props.alignVMd : '',
        props.alignVLg ? 'lg:items-' + props.alignVLg : '',
        props.alignVXl ? 'xl:items-' + props.alignVXl : '',
        props.alignVXxl ? '2xl:items-' + props.alignVXxl : '',

        props.alignH ? 'justify-' + props.alignH : '',
        props.alignHSm ? 'sm:justify-' + props.alignHSm : '',
        props.alignHMd ? 'md:justify-' + props.alignHMd : '',
        props.alignHLg ? 'lg:justify-' + props.alignHLg : '',
        props.alignHXl ? 'xl:justify-' + props.alignHXl : '',
        props.alignHXxl ? '2xl:justify-' + props.alignHXxl : '',

        props.gap ? 'gap-' + props.gap : '',
        props.gapSm ? 'sm:gap-' + props.gapSm : '',
        props.gapMd ? 'md:gap-' + props.gapMd : '',
        props.gapLg ? 'lg:gap-' + props.gapLg : '',
        props.gapXl ? 'xl:gap-' + props.gapXl : '',
        props.gapXxl ? '2xl:gap-' + props.gapXxl : '',

        props.cols ? 'grid-cols-' + props.cols : '',
        props.colsSm ? 'sm:grid-cols-' + props.colsSm : '',
        props.colsMd ? 'md:grid-cols-' + props.colsMd : '',
        props.colsLg ? 'lg:grid-cols-' + props.colsLg : '',
        props.colsXl ? 'xl:grid-cols-' + props.colsXl : '',
        props.colsXxl ? '2xl:grid-cols-' + props.colsXxl : '',

        props.rows ? 'grid-rows-' + props.rows : '',
        props.rowsSm ? 'sm:grid-rows-' + props.rowsSm : '',
        props.rowsMd ? 'md:grid-rows-' + props.rowsMd : '',
        props.rowsLg ? 'lg:grid-rows-' + props.rowsLg : '',
        props.rowsXl ? 'xl:grid-rows-' + props.rowsXl : '',
        props.rowsXxl ? '2xl:grid-rows-' + props.rowsXxl : '',

        props.start ? 'row-start-' + props.start : '',
        props.startSm ? 'sm:row-start-' + props.startSm : '',
        props.startMd ? 'md:row-start-' + props.startMd : '',
        props.startLg ? 'lg:row-start-' + props.startLg : '',
        props.startXl ? 'xl:row-start-' + props.startXl : '',
        props.startXxl ? '2xl:row-start-' + props.startXxl : '',

        props.end ? 'row-end-' + props.end : '',
        props.endSm ? 'sm:row-end-' + props.endSm : '',
        props.endMd ? 'md:row-end-' + props.endMd : '',
        props.endLg ? 'lg:row-end-' + props.endLg : '',
        props.endXl ? 'xl:row-end-' + props.endXl : '',
        props.endXxl ? '2xl:row-end-' + props.endXxl : ''
      ]
    })
    return () => h('div', {
      class: style.value
    }, slots.default ? slots.default() : ''
    )
  }
})
</script>