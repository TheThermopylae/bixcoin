<template>
  <section class="mb-20">
    <h2 class="font-yekB text-white text-center mb-5 text-xl md:text-4xl">
      به راحتی در بازارهای جهانی حرکت کنید
    </h2>
    <div class="grid md:grid-cols-3">
      <FutureActivityNavigateCard
        v-for="(item, index) in items"
        :key="item.text"
        :hasBorder="index != items.length - 1"
        :item="item"
      ></FutureActivityNavigateCard>
    </div>
  </section>
</template>

<script setup>
let items = ref([
  {
    title: 'ارز دیجیتال',
    text: 'بی ایکس متاتریدر 5 کریپتوهای دائمی را با بهترین نقدینگی و حداقل اسپرد ارائه می‌دهد و به معامله‌گران اجازه می‌دهد تا از اهرم‌های مالی برای سرمایه‌گذاری در نوسانات قابل توجه قیمت استفاده کنند.',
    img: 'https://www.bybit.com/future-activity/static/image/MT5/crypto.png'
  },
  {
    title: 'فارکس',
    text: 'فارکس یک بازار جهانی با نقدینگی بالا برای تجارت ارز است که 24 ساعت شبانه روز در روزهای هفته فعالیت می کند. این پتانسیل سود قابل توجهی را از نوسانات ارز ارائه می دهد.',
    img: 'https://www.bybit.com/future-activity/static/image/MT5/forex.png'
  },
  {
    title: 'کالاها',
    text: 'قراردادهای تفاوت (CFD) به معامله گران این امکان را می دهد تا در مورد تغییرات قیمت دارایی هایی مانند طلا و نفت حدس و گمان بزنند و از اهرم برای تقویت سود بدون داشتن دارایی واقعی استفاده کنند.',
    img: 'https://www.bybit.com/future-activity/static/image/MT5/cfd.png'
  }
])
</script>
