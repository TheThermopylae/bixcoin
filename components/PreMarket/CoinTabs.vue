<template>
  <div class="flex justify-between items-center mb-3">
    <div>
      <span
        @click="$emit('changeTab', 0)"
        class="ml-5 pb-2 cursor-pointer border-b-2 transition-all text-sm md:text-lg"
        :class="{
          'border-primary text-white': props.tab == 0,
          'border-black text-gray-400': props.tab != 0
        }"
        >کوین های موجود</span
      >
      <span
        @click="$emit('changeTab', 1)"
        class="pb-2 cursor-pointer border-b-2 transition-all text-sm md:text-lg"
        :class="{
          'border-primary text-white': props.tab == 1,
          'border-black text-gray-400': props.tab != 1
        }"
        >کوین های گذشته</span
      >
    </div>
    <NuxtLink
      to="/"
      class="text-primary border border-primary px-3 py-1.5 rounded text-sm md:text-lg"
    >
      سفارشات من
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="inline-block"
      >
        <path
          fill="currentColor"
          d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
        />
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup>
let props = defineProps(['tab'])
</script>
