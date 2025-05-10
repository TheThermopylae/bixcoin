<template>
  <section class="my-20">
    <h2 class="mb-5  font-[800]">محصولات بیشتر را کشف کنید</h2>
    <div class="grid lg:grid-cols-2 gap-5">
      <MainDiscoverBigCard
        v-for="item in itemsBig"
        :key="item.title"
        :item="item"
      ></MainDiscoverBigCard>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
      <MainDiscoverSmallCard
        v-for="item in itemsSmall"
        :key="item.title"
        :item="item"
      ></MainDiscoverSmallCard>
    </div>
  </section>
</template>

<script setup>
let itemsBig = ref([
  {
    title: 'کارت بای بیت',
    text: 'Up to 10% Cashback, 8% APR, VIP Privileges & More!',
    image:
      'https://www.bybit.com/common-static/fhs/bybit-home-new/spotlight/Card-1745f92e4ce488e1ecb5fa8f418091f1.png?quality=70&format=webp&resize=width/240'
  },
  {
    title: 'کسب درآمد بای بیت',
    text: 'دارایی های خود را با پیشنهادات قابل اعتماد و انعطاف پذیر رشد و مدیریت کنید.',
    image:
      'https://www.bybit.com/common-static/fhs/bybit-home-new/spotlight/MoneyBag-0501fee3f116e2ffdcd0620f4d5fd8be.png?quality=70&format=webp&resize=width/240'
  }
])

let itemsSmall = ref([
  {
    title: 'کپی تریدینگ',
    text: 'با کپی کردن از معامله گران برتر یا خودتان از معاملات پیشرو درآمد خود را افزایش دهید!'
  },
  {
    title: 'تریدینگ بات',
    text: 'معاملات خود را با Grid Bot، Futures Combo Bot، DCA Bot و موارد دیگر خودکار کنید!'
  },
  {
    title: 'ترید جی پی تی',
    text: 'با تجزیه و تحلیل داده های مبتنی بر هوش مصنوعی و بینش های بازار، هوشمندانه تر تجارت کنید.'
  },
  {
    title: 'بایبیت وب 3',
    text: 'در چشم انداز Web3 با قابلیت اطمینان و امنیت پیشرو در صنعت حرکت کنید.'
  }
])
</script>
