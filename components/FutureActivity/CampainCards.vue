<template>
  <article class="border-2 border-primary rounded-xl p-3 flex gap-2 relative">
    <NuxtImg :src="props.item.img" class="w-1/3" quality="50"></NuxtImg>
    <div class="">
      <span class="bg-green-500/30 text-green-500 px-1 py-0.5 rounded"
        >در جریان</span
      >
      <h3 class="mt-2 mb-1 font-yekSemiB">
        {{ props.item.title }}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="text-primary"
      >
        <path
          fill="currentColor"
          d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0"
        />
      </svg>
    </div>
  </article>
</template>

<script setup>
let props = defineProps(['item'])
</script>
