<template>
  <section class="mb-32">
    <h2 class="title-border text-white text-xl mb-3">
      راهنمای معاملات قبل از بازار
    </h2>
    <PreMarketGuideTabs
      :tab="currentTab"
      @changeTab="changeTabFunc"
    ></PreMarketGuideTabs>
    <PreMarketGuideCards :data="data[currentTab]"></PreMarketGuideCards>
  </section>
</template>

<script setup>
let { currentTab, changeTabFunc } = useTab()

let data = ref([
  [
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/1.19203406.svg',
      text: 'ابتدا روی ایجاد سفارش کلیک کنید و تب خرید را انتخاب کنید. در مرحله بعد، مقدار و قیمت را برای ثبت سفارش وارد کنید. در آخر سفارش خود را تایید کرده و مبلغ پرداختی را ارائه دهید.'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/2.96c05336.svg',
      text: 'منتظر بمانید تا فروشنده با سفارش شما مطابقت داشته باشد. هنگامی که فروشنده سفارش شما را پذیرفت، به سادگی منتظر مرحله تحویل باشید تا توکن های شما را دریافت کند.'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/3.d44fbb9d.svg',
      text: 'در مرحله تحویل، توکن ها را از فروشنده دریافت خواهید کرد. در غیر این صورت، علاوه بر بازیابی مبلغ پرداختی خود، غرامت دریافت خواهید کرد.'
    }
  ],
  [
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/4.7b5502df.svg',
      text: 'یک سفارش موجود را پیدا کنید که نیازهای شما را برآورده کند'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/5.7b5dfa70.svg',
      text: 'سفارش فروش را بپذیرید، مقدار و قیمت را به طور کامل بررسی کنید. اطمینان حاصل کنید که دارایی کامل را برای خرید دارید و روی تأیید کلیک کنید. توکن ها را در مرحله تحویل دریافت خواهید کرد.'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/3.d44fbb9d.svg',
      text: 'در مرحله تحویل، توکن ها را از فروشنده دریافت خواهید کرد. در غیر این صورت، علاوه بر بازیابی مبلغ پرداختی خود، غرامت دریافت خواهید کرد.'
    }
  ],
  [
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/4.7b5502df.svg',
      text: 'ابتدا روی ساخت سفارش کلیک کنید و تب فروش را انتخاب کنید. در مرحله بعد، مقدار و قیمت را برای ثبت سفارش فروش وارد کنید. در آخر سفارش خود را تایید کرده و وثیقه مورد نیاز را ارائه دهید.'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/2.96c05336.svg',
      text: 'منتظر بمانید تا خریدار با سفارش شما مطابقت پیدا کند. هنگامی که خریدار سفارش شما را پذیرفت، باید برای تحویل توکن ها در مرحله تحویل آماده شوید.'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/6.baba4e55.svg',
      text: 'توجه: عدم تحویل کامل و به موقع ژتون ها منجر به از دست رفتن تمام وثیقه شما برای سفارش می شود.  '
    }
  ],
  [
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/1.19203406.svg',
      text: 'یک سفارش موجود را پیدا کنید که نیازهای شما را برآورده کند'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/5.7b5dfa70.svg',
      text: 'سفارش خرید را بپذیرید، مقدار و قیمت را به طور کامل بررسی کنید. مطمئن شوید که تمام دارایی ها را برای فروش دارید و روی تأیید کلیک کنید. سپس، bآماده تحویل توکن ها در مرحله تحویل باشید.'
    },
    {
      img: 'https://www.bybit.com/spot-fe-premarket/_next/static/media/6.baba4e55.svg',
      text: 'توجه: عدم تحویل کامل و به موقع ژتون ها منجر به از دست رفتن تمام وثیقه شما برای سفارش می شود.  '
    }
  ],
])
</script>
