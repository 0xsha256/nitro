<template>
  <n-container>
    <n-hero>
      <div class="d-block self-center text-center">
        <h1 class="text-light-50 mb-5">{{ 'Hero' }}</h1>
        <h2 class="text-light-50">{{ 'subtitle' }}</h2>
      </div>
    </n-hero>

    <div
      class="grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
    >
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500 grid place-content-center row-span-3">01</div>
      <div
        class="p-4 rounded-lg bg-fuchsia-300 grid place-content-center col-span-2 dark:bg-fuchsia-800 dark:text-fuchsia-400"
      >02</div>
      <div
        class="p-4 rounded-lg shadow-lg bg-fuchsia-500 grid place-content-center row-span-2 col-span-2"
      >03</div>
    </div>
    <br />
    <div
      class="grid grid-rows-4 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-pink rounded-lg"
    >
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">01</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">02</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">03</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">04</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">05</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">06</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">07</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">08</div>
      <div class="p-4 rounded-lg shadow-lg bg-pink-500">09</div>
    </div>

    <div
      class="grid grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold leading-6"
    >
      <div class="p-4 rounded-lg bg-stripes-sky"></div>
      <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-2 col-span-4">01</div>
      <div class="p-4 rounded-lg bg-stripes-sky"></div>
      <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-3">02</div>
      <div class="p-4 rounded-lg bg-stripes-sky"></div>
      <div class="p-4 rounded-lg bg-stripes-sky"></div>
      <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-end-7 col-span-2">03</div>
      <div class="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-7">04</div>
    </div>

    <div
      class="grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
    >
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">01</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">02</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">03</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">04</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">05</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">06</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">07</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">08</div>
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">09</div>
    </div>

    <div
      class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6"
    >
      <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">01</div>
      <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">02</div>
      <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">03</div>
      <div class="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">04</div>
      <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">05</div>
      <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">06</div>
      <div class="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">07</div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />

    <n-row gap="4" flow="col">
      <n-col row="3">
        <div class="bg-strawberry-dust p-20 rounded h-full">Col 1</div>
      </n-col>
      <n-col col="2">
        <div class="bg-creamy-orange p-20 rounded h-full">Col 2</div>
      </n-col>
      <n-col row="2" col="2">
        <div class="bg-sunset-cruise p-20 rounded h-full">Col 3</div>
      </n-col>
    </n-row>
  </n-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>