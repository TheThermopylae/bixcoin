<template>
  <swiper
    @slideChange="handleSlideChange"
    :navigation="true"
    :space-between="30"
    :modules="[Navigation]"
    class="mySwiper w-full xl:w-1/2 rounded-xl mb-10"
  >
    <swiper-slide v-for="(item, idx) in items" :key="idx" class="rounded-xl">
      <nuxt-img :src="item" class="w-full" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const props = defineProps(['items'])
const emit = defineEmits(['changeSlide'])

function handleSlideChange (swiper) {
  emit('changeSlide', swiper.realIndex)
}
</script>
