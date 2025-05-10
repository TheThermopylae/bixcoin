<template>
  <section class="mt-20">
    <h2 class="text-center text-white text-xl md:text-4xl font-yekB">
      مزایای متاتریدر 5
    </h2>
    <p class="text-gray-500 mt-5 text-center">
      BX به معامله گران قدرت می دهد تا یک پلت فرم معاملاتی جامع را داشته باشند
      که تجارت چند دارایی را تسهیل می کند و قابلیت های نموداری پیشرفته، بینش های
      اقتصادی ارزشمند و موارد دیگر را ارائه می دهد. MT5 تجربه معاملاتی شما را با
      فناوری برتر، مدیریت سفارشات منعطف و ابزارهای تجزیه و تحلیل جامع بازار
      افزایش می دهد و اطمینان می دهد که هر معامله آگاهانه، موثر و کارآمد انجام
      می شود.
    </p>
    <div class="grid md:grid-cols-3 mt-10">
      <FutureActivityAdvantagesCard
        v-for="(item, index) in items"
        :key="item.title"
        :item="item"
        :hasBorder="index != items.length - 1"
      ></FutureActivityAdvantagesCard>
    </div>
  </section>
</template>

<script setup>
let items = ref([
  {
    title: 'بیش از 90 شاخص',
    text: 'برای اتخاذ تصمیمات تجاری آگاهانه از شاخص های پیشرفته استفاده کنید.',
    icon: 'https://www.bybit.com/future-activity/static/image/MT5/indicator-icon.svg'
  },
  {
    title: 'مشاور متخصص (EA)',
    text: 'معاملات خود را با EAهای قدرتمند و قابل تنظیم خودکار کنید.',
    icon: 'https://www.bybit.com/future-activity/static/image/MT5/expert-icon.svg'
  },
  {
    title: 'ترید در حال حرکت',
    text: 'در هر زمان، هر مکان، با هر وسیله ای معامله کنید تا فرصت های بی وقفه را به دست آورید.',
    icon: 'https://www.bybit.com/future-activity/static/image/MT5/device-icon.svg'
  }
])
</script>
