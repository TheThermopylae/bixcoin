<template>
  <section class="mb-32">
    <h2 class="text-4xl text-white font-yekB text-center mb-10">
      نحوه اتصال به TradingView
    </h2>
    <div class="flex flex-col-reverse xl:flex-row items-center gap-5">
      <ToolsFutureActivityShowSteps :step="step"></ToolsFutureActivityShowSteps>
      <ToolsFutureActivityStepsSlider
        :items="items"
        @change-slide="getCurrentSlide"
      ></ToolsFutureActivityStepsSlider>
    </div>
    <div class="w-full h-[1px] bg-gradient-to-r from-black via-gray-300/50 to-black mt-10"></div>
  </section>
</template>

<script setup>
let items = ref([
  '/ToolsFutureActivity/step-1.png',
  '/ToolsFutureActivity/step-2.png',
  '/ToolsFutureActivity/step-3.png',
  '/ToolsFutureActivity/step-4.png'
])
let step = ref(0)

function getCurrentSlide (slide) {
  step.value = slide
}
</script>
