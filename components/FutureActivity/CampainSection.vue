<template>
  <section class="mb-20">
    <FutureActivityCampainCardBig></FutureActivityCampainCardBig>
    <div class="grid md:grid-cols-2 mt-4 gap-4">
      <FutureActivityCampainCards
        v-for="item in items"
        :key="item.title"
        :item="item"
      ></FutureActivityCampainCards>
    </div>
  </section>
</template>

<script setup>
let items = [
  {
    title: 'شاخص های BX آزاد شد: تجارت رایگان با کارمزد صفر!',
    img: 'https://images.contentstack.io/v3/assets/blt8ec5b78e9ea1d11d/blta5bc01c75a879168/67d19b93bb041a1d5dc437af/EN_2503-T50347_MT5_Indices_0-Fee_NoCTA_1600x900.png'
  },
  {
    title: 'BX Gold&FX: دروازه شما به بازارهای جهانی!',
    img: 'https://images.contentstack.io/v3/assets/blt8ec5b78e9ea1d11d/bltc1a9bca8f6a1aecd/67ef17f4446cbd969cbb0b35/EN_2412-T45403_MT5-CT_Gold&FX1600x900.png'
  }
]
</script>
