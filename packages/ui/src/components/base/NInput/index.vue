<template>
  <input v-model="model" :class="className" />
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'NInput',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: ''
    },
    className: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  computed: {
    model: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
</script>