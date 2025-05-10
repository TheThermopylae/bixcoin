<template>
  <article class="relative flex flex-col items-center text-center p-5">
    <div class="flex justify-center mb-3">
      <img :src="item.img" alt="icon" class="w-[150px] h-[120px]" />
    </div>
    <h4 class="text-xl font-bold mb-4">{{ item.title }}</h4>
    <p class="text-sm mb-5 text-gray-400">
      {{ item.text }}
    </p>
    <div
      v-if="item.id != 3"
      class="absolute bg-gradient-to-r from-gray-50/0 via-gray-500 to-gray-500/0 rounded-full bottom-0 h-[1px] w-full md:top-1/2 md:left-0 md:h-40 md:w-[1px] md:-translate-y-1/2 md:bg-gradient-to-b"
    ></div>
  </article>
</template>

<script setup>
let props = defineProps(['item'])
</script>
