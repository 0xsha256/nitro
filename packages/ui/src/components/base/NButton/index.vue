<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'NButton',
  props: {
    text: {
      type: String as PropType<string>,
      default: 'Button'
    },
    className: {
      type: String as PropType<string>,
      default: 'inline-block'
    },
    none: {
      type: String as PropType<string>,
      default: ''
    },
    shape: {
      type: String as PropType<string>,
      default: 'box',
      validator: (value: string) => {
        return ['', 'none', 'box', 'round'].includes(value)
      }
    },
    box: {
      type: String as PropType<string>,
      default: 'inline-block rounded bg-dark-500 text-light-100 hover:bg-venetian-nights px-3 py-3 px-10 py-3 animate-push border-none '
    },
    outline: {
      type: String as PropType<string>,
      default: 'inline-block rounded-full border-dark-400 solid bg-transparent text-dark-500 hover:bg-dark-500 hover:text-light-100 px-3 py-3 px-10 py-3 animate-push border-solid border-2'
    },
    circular: {
      type: String as PropType<string>,
      default: 'inline-block rounded-full bg-venetian-nights text-light-100 px-3 py-3 w-12 h-12 animate-push border-none'
    },
    waveConfig: {
      type: Object,
      default: () => {
        return {
          color: '#fff',
          initialOpacity: 0.5,
          easing: 'ease-in'
        }
      }
    },
    wave: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    spin: {
      type: Boolean as PropType<boolean>,
      default: false,
      validator: (value: boolean) => {
        return [false, true].includes(value)
      }
    },
    animatePush: {
      type: Boolean as PropType<boolean>,
      default: false,
      validator: (value: boolean) => {
        return [null, false, true].includes(value)
      }
    }
  },
  emits: ['update:click'],
  computed: {
    style() {
      return [
        this.className,
        (this as unknown as { [key: string]: string })[this.shape],
        this.animatePush ? 'animate-push' : ''
      ]
    }
  }
})
</script>
<template>
  <button
    v-wave="wave ? waveConfig : false"
    type="button"
    :class="style"
    :disabled="disabled"
    @click="$emit('update:click')"
  >
    <slot>
      <div class="inline-flex items-center">
        <svg
          v-if="spin"
          class="animate-spin mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <div>{{ text }}</div>
      </div>
    </slot>
  </button>
</template>