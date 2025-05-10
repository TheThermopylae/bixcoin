<template>
  <article>
    <div
      class="w-full h-[2px] bg-gradient-to-r from-red-400 to-orange-400"
    ></div>
    <h3 class="mt-4 mb-2 text-lg font-yekSemiB">{{ props.item.title }}</h3>
    <p class="text-gray-400 mb-8">
      {{ props.item.text }}
    </p>
  </article>
</template>

<script setup>
let props = defineProps(['item'])
</script>
