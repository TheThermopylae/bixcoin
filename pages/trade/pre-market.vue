<template>
  <div class="container m-auto">
    <PreMarketTheHero></PreMarketTheHero>
    <PreMarketCoinsSection></PreMarketCoinsSection>
    <PreMarketGuide></PreMarketGuide>
    <PreMarketFaqSection></PreMarketFaqSection>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dark-layout'
})

useHead({
  title: 'Pre Market'
})
</script>
