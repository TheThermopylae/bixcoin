<template>
  <swiper
    :breakpoints="{
      400: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 20 }
    }"
    :freeMode="true"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper mt-10 !pb-10"
  >
    <swiper-slide v-for="item in items" :key="item.title"
      ><FutureActivityStartCard :item="item"></FutureActivityStartCard
    ></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    let items = ref([
      {
        title: 'ثبت نام کنید',
        text: 'برای یک حساب کاربری رایگان در BX ثبت نام کنید و سرویس MT5 را فعال کنید.',
        img: 'https://www.bybit.com/future-activity/static/image/MT5/signUp-icon-active.png',
        link : '/'
      },
      {
        title: 'انتقال وجه',
        text: 'بدون زحمت حساب MT5 خود را تأمین مالی کنید - هیچ حداقل سپرده ای لازم نیست.',
        img: 'https://www.bybit.com/future-activity/static/image/MT5/transfer-icon.png'
      },
      {
        title: 'به MT5 وصل شوید',
        text: 'نرم افزار را از وب سایت ما در رایانه یا دستگاه تلفن همراه خود دانلود کنید.',
        img: 'https://www.bybit.com/future-activity/static/image/MT5/connect-icon.png'
      }
    ])

    return {
      modules: [FreeMode, Pagination],
      items
    }
  }
}
</script>

<style>
.swiper-pagination-bullet{
  background: gray;
}
.swiper-pagination-bullet-active{
  background: #F7A600;
}
</style>