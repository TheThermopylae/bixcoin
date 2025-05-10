<template>
  <section class="my-5">
    <div class="flex items-center gap-2">
      <div
        class="w-8 h-8 bg-green-200 flex justify-center items-center rounded-full"
      >
        <div class="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
      </div>
      {{ today }}
    </div>
  </section>
</template>

<script setup>
let { today } = useDate()
</script>
