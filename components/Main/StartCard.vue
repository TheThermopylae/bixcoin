<template>
  <div class="relative bg-white p-10 rounded-lg text-center flex flex-col justify-between items-center">
    <span
      class="absolute left-3 top-3 w-10 h-10 rounded-full bg-[#eee] flex justify-center items-center text-xl"
      >{{ props.index + 1 }}</span
    >
    <div class="flex justify-center mt-14">
      <img
        :src="props.item.img"
        alt=""
      />
    </div>
    <div>
      <h4 class="my-5 text-xl font-[700]">{{ props.item.title }}</h4>
      <p>{{ props.item.text }}</p>
    </div>
    <NuxtLink
      to="/"
      class="p-3 w-[175px] inline-block mt-5 btn-link-c"
      >{{ props.item.linkText }}</NuxtLink
    >
  </div>
</template>

<script setup>
let props = defineProps(['item', 'index'])
</script>
