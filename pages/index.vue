<template>
  <div>
    <MainHeroMobile></MainHeroMobile>
    <MainHeroBannerMd></MainHeroBannerMd>
    <div class="container m-auto">
      <MainCatchTrading></MainCatchTrading>
      <MainFastStart></MainFastStart>
      <MainDiscoverProduct></MainDiscoverProduct>
    </div>
    <div class="bg-white">
      <MainStatusSection></MainStatusSection>
    </div>
    <div class="container m-auto">
      <MainAppLinks></MainAppLinks>
      <MainFaqSection></MainFaqSection>
    </div>
    <MainCryptoJourney></MainCryptoJourney>
  </div>
</template>

<script setup>
useHead({
  title: 'صرافی BX'
})

let config = useRuntimeConfig()


</script>