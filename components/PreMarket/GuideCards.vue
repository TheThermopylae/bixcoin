<template>
  <section class="grid lg:grid-cols-3 mt-10 gap-5">
    <div
      class="border-b lg:border-l lg:border-b-0 border-dashed border-gray-500 lg:pl-5 pb-5 lg:pb-0 last:border-l-0"
      v-for="(item, index) in props.data"
      :key="index"
    >
      <img
        :src="item.img"
        alt="icon"
      />
      <p class="text-[#81858C] text-sm mt-5">
        {{ item.text }}
      </p>
    </div>
  </section>
</template>

<script setup>
let props = defineProps(['data'])
</script>
