<template>
  <section class="mt-12">
    <h2 class="text-center text-white text-xl md:text-4xl font-yekB">
      بررسی اجمالی ابزار معاملاتی
    </h2>
    <FutureActivityOverviewTabs
      :tab="tab"
      @changeTab="changeTabFunc"
    ></FutureActivityOverviewTabs>
    <FutureActivityOverviewCryptoTable
      v-if="tab == 0"
    ></FutureActivityOverviewCryptoTable>
    <FutureActivityOverviewForexTable
      v-if="tab == 1"
    ></FutureActivityOverviewForexTable>
    <FutureActivityOverviewCfdTable
      v-if="tab == 2"
    ></FutureActivityOverviewCfdTable>
  </section>
</template>

<script setup>
let tab = ref(0)

const changeTabFunc = item => {
  tab.value = item
}
</script>
