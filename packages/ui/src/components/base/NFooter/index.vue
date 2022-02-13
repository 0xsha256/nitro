<template>
  <footer class="bg-warm-day pt-20 pb-20">
    <div class="container mx-auto px-4">
      <h2 class="text-center mb-20">Nyttige lenker</h2>
      <div class="flex justify-center">
        <div class="self-center w-full md:w-100">
          <n-collapse
            v-for="(i, key) in menu"
            :key="key"
            v-model="selectedCollapse"
            v-model:on-updated="selectedCollapse"
            :key-id="key"
            :description="i.text"
          >
            <ul>
              <li v-for="(child, childKey) in i.children" :key="childKey">
                <router-link :to="child.link">{{ child.text }}</router-link>
              </li>
            </ul>
          </n-collapse>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    selectedCollapse: null as unknown as number | undefined
  }),
  computed: {
    menu() {
      return Array.from({ length: 4 }, (_, key) => {
        return {
          text: `Menu element ${key}`,
          children: Array.from({ length: 7 }, (_, childKey) => {
            return {
              text: `Link ${childKey}`,
              link: '/'
            }
          })
        }
      })
    }
  }
})
</script>