<template>
  <section class="flex justify-around relative w-10/12 m-auto my-5">
    <div
      class="w-20 h-20 rounded-full flex justify-center items-center z-[1] transition-all cursor-pointer"
      :class="{
        'bg-yellow-500 text-white': !props.stepTwo,
        'bg-gray-300 ': props.stepTwo
      }"
      @click="$emit('showStepOne')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="6" r="4" />
          <path
            d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
          />
        </g>
      </svg>
    </div>
    <div
      class="w-20 h-20 rounded-full flex justify-center items-center z-[1] transition-all cursor-pointer"
      :class="{
        'bg-yellow-500 text-white': props.stepTwo,
        'bg-gray-300 ': !props.stepTwo
      }"
      @click="$emit('showStepTwo')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5" />
          <path d="M8.5 6.755h7m-7 4h7m-7 4H12" />
        </g>
      </svg>
    </div>
    <div
      class="w-full h-1 border-b-2 border-dashed absolute top-1/2 -translate-y-1/2 z-0"
    ></div>
  </section>
</template>

<script setup>
let props = defineProps(['stepTwo'])
</script>
