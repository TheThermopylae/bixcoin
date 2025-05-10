<template>
  <div class="flex justify-between md:justify-center gap-10 text-sm md:text-2xl font-bold my-10">
    <div>
      <span
        class="transition-all duration-300 cursor-pointer"
        :class="{ 'text-gradiant': props.tab == 0 }"
        @click="$emit('changeTab', 0)"
        >ارز دیجیتال</span
      >
      <Transition>
        <div
          v-if="props.tab == 0"
          class="w-full h-[2px] bg-gradient-to-r from-red-400 to-orange-400 mt-2"
        ></div>
      </Transition>
    </div>
    <div>
      <span
        class="transition-all duration-300 cursor-pointer"
        :class="{ 'text-gradiant': props.tab == 1 }"
        @click="$emit('changeTab', 1)"
        >فارکس
      </span>
      <Transition>
        <div
          v-if="props.tab == 1"
          class="w-full h-[2px] bg-gradient-to-r from-red-400 to-orange-400 mt-2"
        ></div>
      </Transition>
    </div>
    <div>
      <span
        class="transition-all duration-300 cursor-pointer"
        :class="{ 'text-gradiant': props.tab == 2 }"
        @click="$emit('changeTab', 2)"
        >CFD (فلز، نفت و شاخص ها)</span
      >
      <Transition>
        <div
          v-if="props.tab == 2"
          class="w-full h-[2px] bg-gradient-to-r from-red-400 to-orange-400 mt-2"
        ></div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['tab'])
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
