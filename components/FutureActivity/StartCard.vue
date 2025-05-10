<template>
  <div
    class="border border-gray-800 bg-[#16171A] p-3 rounded-xl h[250px] relative"
  >
    <div class="flex justify-center">
      <img :src="props.item.img" alt="start-icon" class="w-16" />
    </div>
    <h6 class="text-center font-yekSemiB my-5 text-lg">
      {{ props.item.title }}
    </h6>
    <p class="text-center text-gray-400 my-5">
      {{ props.item.text }}
    </p>
    <div
      class="m-auto bg-black flex justify-center items-center w-[140px] h-[40px] py-2 border border-gray-700 rounded-full"
      v-if="props.item.link"
    >
      <NuxtLink to="/" class="flex gap-1 text-gradiant font-bold">
        ثبت نام کنید
        <img
          src="https://www.bybit.com/future-activity/static/image/MT5/right-arrow-icon.svg"
          alt=""
          class="rotate-180"
        />
      </NuxtLink>
    </div>
    <div
      class="flex justify-center h-[40px] w-[40px] m-auto bg-black rounded-full border border-gray-700 "
      v-else
    >
      <img
        src="https://www.bybit.com/future-activity/static/image/MT5/right-arrow-icon.svg"
        alt=""
        class="rotate-180 w-1/2"
      />
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['item'])
</script>
