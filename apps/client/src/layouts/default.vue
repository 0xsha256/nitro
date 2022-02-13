<template>
  <main>
    <n-nav-header position="sticky">
      <n-container class="px-4 md:px-0">
        <n-row flow="col" align-v="center">
          <n-col>
            <div class="text-xl">Nitro UI</div>
          </n-col>
          <n-col col="1">
            <div class="flex justify-end">
              <n-button
                :wave="true"
                :animate-push="true"
                shape="box"
                py="3"
                px="10"
                bg="dark-500"
                hover-bg="venetian-nights"
                text="Get started"
                @click="click"
              />
              <n-button
                class="ml-3 mr-3"
                :wave="true"
                :animate-push="true"
                shape="round"
                py="3"
                px="10"
                border-style="solid"
                border-w="2"
                border-color="dark-400 solid"
                bg="transparent"
                hover-bg="dark-500"
                color="dark-500"
                hover-color="light-100"
                text="Click"
                @click="click"
              />
              <n-button
                :wave="true"
                :animate-push="true"
                shape="round"
                width="12"
                height="12"
                text="N"
                @click="click"
              />
            </div>
          </n-col>
        </n-row>
      </n-container>
    </n-nav-header>
    <router-view />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    click(e: Event) {
      console.log('click', e)
    }
  }
})
</script>