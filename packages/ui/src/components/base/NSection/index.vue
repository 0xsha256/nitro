<template>
  <div class="container mx-auto px-4 mt-20 mb-20">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NSection'
})
</script>