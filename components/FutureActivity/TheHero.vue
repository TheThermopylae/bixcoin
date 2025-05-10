<template>
  <section
    class="py-10 lg:flex items-center justify-between text-center lg:text-right gap-3"
  >
    <div class="md:text-xl">
      <h6>پتانسیل تجاری خود را در بازارهای مالی آزاد کنید</h6>
      <h1 class="text-2xl md:text-4xl font-yekB text-gradiant my-3">
        ترید بی ایکس گلد و اف ایکس
      </h1>
      <div class="flex gap-3 justify-center lg:justify-start mb-1 textlg">
        <span>ارز دیجیتال</span>
        <span>|</span>
        <span>فارکس</span>
        <span>|</span>
        <span>CFD (فلز، نفت و شاخص ها)</span>
      </div>
      <p class="text-lg hidden lg:block">
        نقدینگی سطح بالا، کارمزدهای رقابتی و پشتیبانی اختصاصی 24/7 مشتری را
        تجربه کنید
      </p>
      <NuxtLink to="/register" class="btn-link-c my-5 w-fit hidden lg:block"
        >ثبت نام کنید</NuxtLink
      >
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-gradiant justify-center lg:justify-start mb-8 lg:m-0"
      >
        <img
          loading="lazy"
          src="https://www.bybit.com/future-activity/static/image/MT5/demo-trading-icon.svg"
          alt="copy"
        />
        دمو تریدینگ
      </NuxtLink>
    </div>
    <NuxtImg
      quality="50"
      src="/FutureActivity/banner-bg.png"
      alt="banner"
      class="lg:w-1/2"
    ></NuxtImg>
  </section>
</template>
