<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'NContainer',
  setup(_, { slots }) {
    return () => h('div', { class: 'container mx-auto' }, slots.default ? slots.default() : '')
  }
})
</script>