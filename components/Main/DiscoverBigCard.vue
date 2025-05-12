<template>
  <div
    class="group bg-white rounded-xl border-t border-primary flex justify-between items-center p-5 h-[250px] hover:shadow-md"
  >
    <div class="flex flex-col h-full justify-between">
      <div class="mt-5">
        <h4 class="text-3xl text-black mb-4 font-[700]">
          {{ props.item.title }}
        </h4>
        <p class="text-gray-600">
          {{ props.item.text }}
        </p>
      </div>
      <NuxtLink to="/" class="flex items-center text-primary text-lg"
        >جزییات
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="9"
          viewBox="0 0 16 9"
        >
          <path
            fill="currentColor"
            d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
          />
          <path
            fill="currentColor"
            d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
          />
        </svg>
      </NuxtLink>
    </div>
    <img
      :src="props.item.image"
      alt="card-image"
      class="w-1/4 transition-all duration-300 group-hover:scale-110"
    />
  </div>
</template>
<script setup>
let props = defineProps(['item'])
</script>
