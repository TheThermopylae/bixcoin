<template>
  <section class="text-center">
    <h2 class="text-white text-4xl font-yekSemiB mb-5">
      ترید خود را به سطح بعدی برسانید
    </h2>
    <div class="grid md:grid-cols-3">
      <ToolsFutureActivityNextLevelCard
        v-for="item in items"
        :item="item"
        :key="item.id"
      ></ToolsFutureActivityNextLevelCard>
    </div>
  </section>
</template>

<script setup>
let items = ref([
  {
    id: 1,
    img: '/ToolsFutureActivity/desc-trade-small.png',
    title: 'ترید مستقیم از TradingView',
    text: 'با نقدینگی درجه یک و پشتیبانی مشتری چند زبانه BX مستقیماً از نمودارهای TradingView، ارزهای دیجیتال را بخرید و بفروشید.'
  },
  {
    id: 2,
    img: '/ToolsFutureActivity/desc-trade-small.png',
    title: 'ترید همه چیز',
    text: 'از فهرست‌های پیگیری، هشدارها و اخبار زنده استفاده کنید که به طور یکپارچه در داشبورد نمودار و معاملات شما ادغام شده‌اند.'
  },
  {
    id: 3,
    img: '/ToolsFutureActivity/desc-trade-small.png',
    title: 'چت و یادگیری',
    text: 'در انجمن TradingView ایده ها و اسکریپت ها را تحقیق یا تولید کنید تا مطمئن شوید که هرگز به تنهایی معامله نمی کنید.'
  }
])
</script>
