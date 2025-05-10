<template>
  <div class="relative">
    <div
      v-if="hasBorder"
      class="absolute bg-gradient-to-r from-gray-50/0 via-gray-500 to-gray-500/0 rounded-full bottom-0 h-[1px] w-full md:top-0 md:left-0 md:h-full md:w-[1px] md:bg-gradient-to-b"
    ></div>
    <article class="text-center md:px-4 pb-4 md:pb-0">
      <div class="flex justify-center">
        <NuxtImg
          :src="props.item.img"
          alt="img-card"
          quality="50"
          class="w-fll"
        ></NuxtImg>
      </div>
      <h3 class="font-yekSemiB text-lg mb-5">{{ props.item.title }}</h3>
      <p class="text-gray-400">
        {{ props.item.text }}
      </p>
    </article>
  </div>
</template>

<script setup>
let props = defineProps(['hasBorder', 'item'])
</script>
