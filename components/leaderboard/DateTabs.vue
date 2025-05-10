<template>
  <section>
    <button
      @click="$emit('changeTab', 0)"
      class="px-3 py-2 rounded-lg ml-4"
      :style="{
        background: props.tab == 0 ? '#F7A60029' : '#1E2023',
        color: props.tab == 0 ? '#F7A600' : '#ADB1B8'
      }"
    >
      هفتگی
    </button>
    <button
      @click="$emit('changeTab', 1)"
      class="px-3 py-2 rounded-lg ml-4"
      :style="{
        background: props.tab == 1 ? '#F7A60029' : '#1E2023',
        color: props.tab == 1 ? '#F7A600' : '#ADB1B8'
      }"
    >
      دو هفته
    </button>
    <button
      @click="$emit('changeTab', 2)"
      class="px-3 py-2 rounded-lg"
      :style="{
        background: props.tab == 2 ? '#F7A60029' : '#1E2023',
        color: props.tab == 2 ? '#F7A600' : '#ADB1B8'
      }"
    >
      ماهانه
    </button>
  </section>
</template>

<script setup>
let props = defineProps(['tab'])
</script>
