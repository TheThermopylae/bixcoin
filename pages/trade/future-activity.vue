<template>
  <NuxtLayout name="dark-layout">
    <div class="container m-auto">
      <FutureActivityTheHero></FutureActivityTheHero>
      <FutureActivityRegisterBtn></FutureActivityRegisterBtn>
      <FutureActivityCampainSection></FutureActivityCampainSection>
      <FutureActivityNavigateMarketSec></FutureActivityNavigateMarketSec>
      <FutureActivityMetaPointsSection></FutureActivityMetaPointsSection>
      <FutureActivityTradingOverview></FutureActivityTradingOverview>
      <FutureActivityAdvantagesMt></FutureActivityAdvantagesMt>
      <FutureActivityStartSection></FutureActivityStartSection>
      <FutureActivityDevicesSection></FutureActivityDevicesSection>
      <FutureActivityFaqSection></FutureActivityFaqSection>
      <FutureActivitySocialsSection></FutureActivitySocialsSection>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})
useHead({
  title: 'Future Activity'
})
</script>
