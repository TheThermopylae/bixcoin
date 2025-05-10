<template>
  <section class="mb-10">
    <PreMarketCoinTabs
      :tab="currentTab"
      @changeTab="changeTabFunc"
    ></PreMarketCoinTabs>
    <div class="flex justify-center items-center border-t border-[#25282C]">
      <div class="">
        <img
          src="https://www.bybit.com/bycsi-root/bybit/deadpool/image-18fa532793874e8d892a4759aabe4ccb.svg?format=webp&quality=80"
          alt=""
        />
        <p>هیچ سابقه ای یافت نشد</p>
      </div>
    </div>
  </section>
</template>

<script setup>
let { currentTab, changeTabFunc } = useTab()
</script>
