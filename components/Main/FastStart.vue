<template>
  <section class="my-20">
    <h2 class="mb-5 font-[800]">در 30 ثانیه شروع کنید!</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      <MainStartCard
        v-for="(item, index) in items"
        :key="item.title"
        :item="item"
        :index="index"
      ></MainStartCard>
    </div>
  </section>
</template>

<script setup>
const items = ref([
  {
    img: '/CardImages/createAccont.avif',
    title: 'ساخت حساب',
    text: 'آدرس ایمیل خود را وارد کنید و صندوق ورودی خود را برای یک کد تأیید 6 رقمی بررسی کنید. برای تکمیل ثبت نام کافیست کد موجود در صفحه تایید را وارد کنید.',
    linkText: 'ثبت نام'
  },
  {
    img: '/CardImages/makeDeposit.avif',
    title: 'ایجاد کیف پول',
    text: 'حساب خود را به راحتی در وب یا برنامه Bybit تامین کنید.',
    linkText: 'اکنون واریز کنید'
  },
  {
    img: '/CardImages/startTrading.avif',
    title: 'شروع معامله',
    text: 'سفر خود را با جفت های Spot یا قراردادهای آتی مورد علاقه خود آغاز کنید!',
    linkText: 'اکنون معامله کنید'
  }
])
</script>
