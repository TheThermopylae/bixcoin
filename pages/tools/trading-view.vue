<template>
  <div class="container m-auto">
    <ToolsFutureActivityTheHero></ToolsFutureActivityTheHero>
    <NuxtImg src="/ToolsFutureActivity/trading-screen.png" class="w-full mb-20"></NuxtImg>
    <ToolsFutureActivityNextLevel></ToolsFutureActivityNextLevel>
    <ToolsFutureActivityStepsSection></ToolsFutureActivityStepsSection>
    <ToolsFutureActivityTradingViewFeature></ToolsFutureActivityTradingViewFeature>
    <ToolsFutureActivityDesktopApp></ToolsFutureActivityDesktopApp>
    <ToolsFutureActivityFaqSection></ToolsFutureActivityFaqSection>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dark-layout",
});

useHead({
  title: "Future Activity",
});
</script>
