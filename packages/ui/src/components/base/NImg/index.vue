<template>
  <img :class="className" :src="url" :width="size" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NImg',
  props: {
    className: {
      type: String,
      default: 'h-auto'
    },
    url: {
      type: String,
      default: 'https://images.unsplash.com/photo-1599666505327-7758b44a9985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    size: {
      type: [Number, String],
      default: 500
    }
  }
})
</script>