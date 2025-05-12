<template>
  <div class="bg-white rounded-xl p-3 hover:shadow-lg">
    <h4 class="text-xl md:text-2xl mb-3 font-[700]">{{ props.item.title }}</h4>
    <p class="text-gray-600 mb-5 line-clamp-2">
      {{ props.item.text }}
    </p>
    <NuxtLink
      to="/"
      class="w-10 h-10 rounded-full flex justify-center items-center text-primary bg-main text-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 9"
        class="text-xl"
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
</template>

<script setup>
let props = defineProps(['item'])
</script>
