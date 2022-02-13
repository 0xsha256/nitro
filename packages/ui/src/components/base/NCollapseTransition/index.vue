<template>
  <transition
    :name="transitionName"
    @before-appear="beforeAppear"
    @appear="appear"
    @after-appear="afterAppear"
    @appear-cancelled="appearCancelled"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
/** 
 * Typescript version of https://github.com/ivanvermeyen/vue-collapse-transition
*/
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'NCollapseTransition',
  props: {
    transitionName: {
      type: String as PropType<string>,
      required: false,
      default: 'collapse'
    },
    dimension: {
      type: String as PropType<string>,
      required: false,
      default: 'height',
      validator: (value: string) => {
        return ['height', 'width'].includes(value)
      }
    },
    duration: {
      type: Number as PropType<number>,
      required: false,
      default: 300
    },
    easing: {
      type: String as PropType<string>,
      required: false,
      default: 'ease-in-out'
    }
  },
  emits: ['after-enter', 'enter-cancelled', 'before-leave', 'before-appear', 'appear', 'after-appear', 'appear-cancelled', 'before-enter', 'enter', 'leave', 'leave-cancelled', 'after-leave'],
  data() {
    return {
      cachedStyles: null as any
    }
  },
  computed: {
    transition() {
      let transitions = [] as string[]
      Object.keys(this.cachedStyles).forEach((key) => {
        transitions.push(`${this.convertToCssProperty(key)} ${this.duration}ms ${this.easing}`)
      })
      return transitions.join(', ')
    }
  },
  watch: {
    dimension() {
      this.clearCachedDimensions()
    }
  },
  methods: {
    beforeAppear(el: Element) {
      // Emit the event to the parent
      this.$emit('before-appear', el)
    },
    appear(el: Element) {
      // Emit the event to the parent
      this.$emit('appear', el)
    },
    afterAppear(el: Element) {
      // Emit the event to the parent
      this.$emit('after-appear', el)
    },
    appearCancelled(el: Element) {
      // Emit the event to the parent
      this.$emit('appear-cancelled', el)
    },
    beforeEnter(el: Element) {
      // Emit the event to the parent
      this.$emit('before-enter', el)
    },
    enter(element: Element, done: string | Function) {
      const el = element as HTMLElement
      // Because width and height may be 'auto',
      // first detect and cache the dimensions
      this.detectAndCacheDimensions(el)
      // The order of applying styles is important:
      // - 1. Set styles for state before transition
      // - 2. Force repaint
      // - 3. Add transition style
      // - 4. Set styles for state after transition
      // If the order is not right and you open any 2nd level submenu
      // for the first time, the transition will not work.
      this.setClosedDimensions(el)
      this.hideOverflow(el)
      this.forceRepaint(el)
      this.setTransition(el)
      this.setOpenedDimensions(el)
      // Emit the event to the parent
      this.$emit('enter', el, done)
      // Call done() when the transition ends
      // to trigger the @after-enter event.
      setTimeout(done, this.duration)
    },
    afterEnter(element: Element) {
      const el = element as HTMLElement
      // Clean up inline styles
      this.unsetOverflow(el)
      this.unsetTransition(el)
      this.unsetDimensions(el)
      this.clearCachedDimensions()
      // Emit the event to the parent
      this.$emit('after-enter', el)
    },
    enterCancelled(el: Element) {
      // Emit the event to the parent
      this.$emit('enter-cancelled', el)
    },
    beforeLeave(element: Element) {
      const el = element as HTMLElement
      // Emit the event to the parent
      this.$emit('before-leave', el)
    },
    leave(element: Element, done: unknown) {
      const el = element as HTMLElement
      // For some reason, @leave triggered when starting
      // from open state on page load. So for safety,
      // check if the dimensions have been cached.
      this.detectAndCacheDimensions(el)
      // The order of applying styles is less important
      // than in the enter phase, as long as we repaint
      // before setting the closed dimensions.
      // But it is probably best to use the same
      // order as the enter phase.
      this.setOpenedDimensions(el)
      this.hideOverflow(el)
      this.forceRepaint(el)
      this.setTransition(el)
      this.setClosedDimensions(el)
      // Emit the event to the parent
      this.$emit('leave', el, done)
      // Call done() when the transition ends
      // to trigger the @after-leave event.
      // This will also cause v-show
      // to reapply 'display: none'.
      setTimeout(done as string, this.duration)
    },
    afterLeave(element: Element) {
      const el = element as HTMLElement
      // Clean up inline styles
      this.unsetOverflow(el)
      this.unsetTransition(el)
      this.unsetDimensions(el)
      this.clearCachedDimensions()
      // Emit the event to the parent
      this.$emit('after-leave', el)
    },
    leaveCancelled(el: Element) {
      // Emit the event to the parent
      this.$emit('leave-cancelled', el)
    },
    detectAndCacheDimensions(el: HTMLElement) {
      // Cache actual dimensions
      // only once to void invalid values when
      // triggering during a transition
      if (this.cachedStyles) return
      const visibility = el.style.visibility
      const display = el.style.display
      // Trick to get the width and
      // height of a hidden element
      el.style.visibility = 'hidden'
      el.style.display = ''
      this.cachedStyles = this.detectRelevantDimensions(el)
      // Restore any original styling
      el.style.visibility = visibility
      el.style.display = display
    },
    clearCachedDimensions() {
      this.cachedStyles = null
    },
    detectRelevantDimensions(el: HTMLElement) {
      // These properties will be transitioned
      if (this.dimension === 'height') {
        return {
          'height': el.offsetHeight + 'px',
          'paddingTop': el.style.paddingTop || this.getCssValue(el, 'padding-top'),
          'paddingBottom': el.style.paddingBottom || this.getCssValue(el, 'padding-bottom')
        }
      }
      if (this.dimension === 'width') {
        return {
          'width': el.offsetWidth + 'px',
          'paddingLeft': el.style.paddingLeft || this.getCssValue(el, 'padding-left'),
          'paddingRight': el.style.paddingRight || this.getCssValue(el, 'padding-right')
        }
      }
      return {}
    },
    setTransition(el: HTMLElement) {
      el.style.transition = this.transition
    },
    unsetTransition(el: HTMLElement) {
      el.style.transition = ''
    },
    hideOverflow(el: HTMLElement) {
      el.style.overflow = 'hidden'
    },
    unsetOverflow(el: HTMLElement) {
      el.style.overflow = ''
    },
    setClosedDimensions(el: HTMLElement) {
      Object.keys(this.cachedStyles).forEach((key) => {
        el.style[(key as unknown as number)] = '0'
      })
    },
    setOpenedDimensions(el: HTMLElement) {
      Object.keys(this.cachedStyles).forEach((key) => {
        el.style[(key as unknown as number)] = this.cachedStyles[key]
      })
    },
    unsetDimensions(el: HTMLElement) {
      Object.keys(this.cachedStyles).forEach((key) => {
        el.style[(key as unknown as number)] = ''
      })
    },
    forceRepaint(el: Element) {
      // Force repaint to make sure the animation is triggered correctly.
      // Thanks: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
      getComputedStyle(el)[this.dimension as unknown as number]
    },
    getCssValue(el: Element, style: string) {
      return getComputedStyle(el, null).getPropertyValue(style)
    },
    convertToCssProperty(style: string) {
      // Example: convert 'paddingTop' to 'padding-top'
      // Thanks: https://gist.github.com/tan-yuki/3450323
      const upperChars = style.match(/([A-Z])/g)
      if (!upperChars) {
        return style
      }
      for (let i = 0, n = upperChars.length; i < n; i++) {
        style = style.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase())
      }
      if (style.slice(0, 1) === '-') {
        style = style.slice(1)
      }
      return style
    }
  }
})
</script>