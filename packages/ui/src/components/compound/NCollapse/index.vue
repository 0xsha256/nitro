<template>
  <div class="d-inline-block border-b-1 border-gray-300 w-full pb-3">
    <div class="flex items-center justify-between fs-5 self-end text-dark-50 mt-5 text-start">
      <div class="d-block pr-3">{{ description }}</div>
      <Button
        border-class="border-2 border-dark-500"
        class-name="rounded-full w-12 h-12 bg-50 bg-green hover:fill-light-50"
        shape="none"
        @click="$emit('update:modelValue', keyId)"
      >
        <div
          :class="{ 'rotate-180 duration-300': keyId === modelValue }"
          class="flex items-center justify-center fill-inherit transition-transform"
        >
          <svg
            class="fill-inherit"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            stroke="inherit"
            width="16"
            height="16"
          >
            <path
              d="M12 19.5a2.3 2.3 0 0 1-1.729-.78L.46 7.568a1.847 1.847 0 0 1 2.773-2.439l8.579 9.752a.25.25 0 0 0 .376 0l8.579-9.752a1.847 1.847 0 1 1 2.773 2.439l-9.808 11.148A2.31 2.31 0 0 1 12 19.5z"
            />
          </svg>
        </div>
      </Button>
    </div>
    <n-collapse-transition>
      <div v-show="modelValue === keyId" class="pt-5">
        <slot />
      </div>
    </n-collapse-transition>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NCollapse',
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    keyId: {
      type: [String, Number],
      default: 0
    },
    description: {
      type: String,
      default: 'Lorem ipsum'
    }
  },
  emits: ['update:modelValue']
})
</script>