<template>
  <button
    v-wave="wave ? waveConfig : false"
    type="button"
    :class="[
      className,
      (this as unknown as { [key: string]: string })[shape],
      borderColor ? 'border-' + borderColor : '',
      hoverBorder ? 'hover:border-' + hoverBorder : '',
      bg ? 'bg-' + bg : '',
      color ? 'text-' + color : '',
      hoverBg ? 'hover:bg-' + hoverBg : '',
      hoverColor ? 'hover:text-' + hoverColor : '',
      size ? 'px-' + size + ' py-' + size : '',
      px ? 'px-' + px : '',
      py ? 'py-' + py : '',
      width ? 'w-' + width : '',
      height ? 'h-' + height : '',
      animatePush ? 'animate-push' : '',
      borderStyle ? 'border-' + borderStyle : '',
      borderW ? 'border-' + borderW : ''
    ]"
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
      default: 'rounded'
    },
    round: {
      type: String as PropType<string>,
      default: 'rounded-full'
    },
    borderStyle: {
      type: String as PropType<string>,
      default: 'none',
      validator: (value: string) => {
        return ['', 'none', 'solid', 'dashed', 'dotted', 'double', 'hidden'].includes(value)
      }
    },
    borderW: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
    borderColor: {
      type: String as PropType<string>,
      default: ''
    },
    hoverBorder: {
      type: String as PropType<string>,
      default: ''
    },
    bg: {
      type: String as PropType<string>,
      default: 'venetian-nights'
    },
    color: {
      type: String as PropType<string>,
      default: 'light-100'
    },
    hoverBg: {
      type: String as PropType<string>,
      default: ''
    },
    hoverColor: {
      type: String as PropType<string>,
      default: ''
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
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 3
    },
    width: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
    height: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
    px: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
    py: {
      type: [String, Number] as PropType<string | number>,
      default: ''
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
        this.borderColor ? 'border-' + this.borderColor : '',
        this.hoverBorder ? 'hover:border-' + this.hoverBorder : '',
        this.bg ? 'bg-' + this.bg : '',
        this.color ? 'text-' + this.color : '',
        this.hoverBg ? 'hover:bg-' + this.hoverBg : '',
        this.hoverColor ? 'hover:text-' + this.hoverColor : '',
        this.size ? 'px-' + this.size + ' py-' + this.size : '',
        this.px ? 'px-' + this.px : '',
        this.py ? 'py-' + this.py : '',
        this.width ? 'w-' + this.width : '',
        this.height ? 'h-' + this.height : '',
        this.animatePush ? 'animate-push' : '',
        this.borderStyle ? 'border-' + this.borderStyle : '',
        this.borderW ? 'border-' + this.borderW : ''
      ]
    }
  }
})
</script>