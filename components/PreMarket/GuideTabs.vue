<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex gap-4">
    <button
      @click="$emit('changeTab', 0)"
      class="p-3 rounded-lg text-lg font-yekSemiB transition"
      :class="{
        'bg-[#F7A6001F] text-[#D6850D]': props.tab == 0,
        'bg-[#1b2023] text-[#81858C]': props.tab != 0
      }"
    >
      خرید به عنوان سازنده
    </button>
    <button
      @click="$emit('changeTab', 1)"
      class="p-3 rounded-lg text-lg font-yekSemiB transition"
      :class="{
        'bg-[#F7A6001F] text-[#D6850D]': props.tab == 1,
        'bg-[#1b2023] text-[#81858C]': props.tab != 1
      }"
    >
      خرید به عنوان گیرنده
    </button>
    <button
      @click="$emit('changeTab', 2)"
      class="p-3 rounded-lg text-lg font-yekSemiB transition"
      :class="{
        'bg-[#F7A6001F] text-[#D6850D]': props.tab == 2,
        'bg-[#1b2023] text-[#81858C]': props.tab != 2
      }"
    >
      فروش به عنوان سازنده
    </button>
    <button
      @click="$emit('changeTab', 3)"
      class="p-3 rounded-lg text-lg font-yekSemiB transition"
      :class="{
        'bg-[#F7A6001F] text-[#D6850D]': props.tab == 3,
        'bg-[#1b2023] text-[#81858C]': props.tab != 3
      }"
    >
      فروش به صورت تحویل گیرنده
    </button>
  </div>
</template>

<script setup>
let props = defineProps(['tab'])
</script>
