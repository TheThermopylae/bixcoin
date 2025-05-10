<template>
  <div>
    <div class="flex gap-2 mb-5">
      <span
        class="w-12 h-12 border rounded-full flex justify-center items-center text-primary text-3xl border-gray-500"
        >1</span
      >
      <div class="text-lg">
        <h4 class="font-yekSemiB">ایجاد حساب</h4>
        <p class="text-sm text-gray-400">
          در BX ثبت نام کنید و یک پروفایل کاربری TradingView رایگان ایجاد کنید.
        </p>
        <NuxtLink
          v-if="props.step == 0"
          to="/register"
          class="px-5 py-2 rounded-lg bg-primary text-black mt-3 block w-fit"
          >ثبت نام</NuxtLink
        >
      </div>
    </div>
    <div class="flex gap-2 mb-5">
      <span
        class="w-12 h-12 border rounded-full flex justify-center items-center text-primary text-3xl border-gray-500"
        >2</span
      >
      <div class="text-lg">
        <h4 class="font-yekSemiB">بی ایکس در TradingView</h4>
        <p class="text-sm text-gray-400">
          نمایه BX را در TradingView پیدا کنید و روی "Trade" کلیک کنید.
        </p>
        <NuxtLink
          v-if="props.step == 1"
          to="/register"
          class="px-5 py-2 rounded-lg bg-primary text-black mt-3 block w-fit"
          >اکنون ترید کنید</NuxtLink
        >
      </div>
    </div>
    <div class="flex gap-2 mb-5">
      <span
        class="w-12 h-12 border rounded-full flex justify-center items-center text-primary text-3xl border-gray-500"
        >3</span
      >
      <div class="text-lg">
        <h4 class="font-yekSemiB">حساب های خود را متصل کنید</h4>
        <p class="text-sm text-gray-400">
          اعتبار حساب BX خود را در پانل ورود وارد کنید تا با حساب TradingView
          خود ارتباط برقرار کنید.
        </p>
        <NuxtLink
          v-if="props.step == 2"
          to="/register"
          class="px-5 py-2 rounded-lg bg-primary text-black mt-3 block w-fit"
          >اتصال</NuxtLink
        >
      </div>
    </div>
    <div class="flex gap-2">
      <span
        class="w-12 h-12 border rounded-full flex justify-center items-center text-primary text-3xl border-gray-500"
        >4</span
      >
      <div class="text-lg">
        <h4 class="font-yekSemiB">BX را به موارد دلخواه اضافه کنید</h4>
        <p class="text-sm text-gray-400">
          در پنل معاملاتی، BX را به عنوان کارگزار مورد علاقه خود ذخیره کنید تا
          اتصالات آینده را تسریع کنید.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(['step'])
</script>

<style>
.swiper-button-prev ,.swiper-button-next{
  color: #F7A600 !important;
}
</style>
