<template>
  <article
    class="bg-white border border-t-0 rounded-b-xl p-5 lg:flex justify-between items-center"
  >
    <div class="lg:flex lg:w-3/4 xl:w-10/12 gap-3">
      <div
        class="w-[120px] h-[120px] lg:w-4/5 xl:w-1/3 rounded-xl flex justify-center items-center bg-main mb-3 lg:m-0"
      >
        <NuxtImg
          src="https://www.bybit.com/bycsi-root/app/assets/token/59cf762dd85dd240d031650dc8bb13bf.png?"
          alt="icon"
          class="w-1/2"
        ></NuxtImg>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h4 class="text-3xl font-yekB">ZK</h4>
          <span class="bg-green-500/20 text-green-500 p-1 rounded text-[10px]"
            >فروش عمومی</span
          >
        </div>
        <p class="text-gray-500 text-sm">
          ZKsync از معماری ZK Rollup برای افزایش مقیاس پذیری و حفظ حریم خصوصی
          اتریوم استفاده می کند. این تراکنش‌های کم‌هزینه برای توکن‌های ETH و
          ERC20 را با انجام محاسبات خارج از زنجیره و در عین حال حفظ تضمین‌های
          امنیتی قوی در زنجیره اصلی تسهیل می‌کند. این رویکرد کارایی و یکپارچگی
          بالایی را تضمین می کند و ZKsync را به یک راه حل اساسی برای اکوسیستم
          اتریوم تبدیل می کند.
        </p>
        <div
          class="my-4 lg:mb-0 md:flex justify-between lg:justify-start gap-7"
        >
          <div class="text-gray-500 text-sm mb-2 md:m-0">
            عرضه کل
            <span class="font-yekSemiB block text-black xl:text-xl"
              >14,700,000</span
            >
          </div>
          <div class="text-gray-500 text-sm mb-2 md:m-0">
            کل سرمایه گذاری
            <span class="font-yekSemiB block text-black xl:text-xl"
              >$7,924,000
            </span>
          </div>
          <div class="text-gray-500 text-sm mb-2 md:m-0">
            مجموع شرکت کنندگان
            <span class="font-yekSemiB block text-black xl:text-xl">79,240</span>
          </div>
          <div class="text-gray-500 text-sm">
            مدت قفل
            <span class="font-yekSemiB block text-black xl:text-xl"
              >بدون دوره قفل</span
            >
          </div>
        </div>
      </div>
    </div>
    <NuxtLink
      to="/"
      class="flex justify-center items-center gap-2 border border-primary rounded-md p-2 text-primary hover:bg-primary hover:text-white transition-all"
    >
      مشاهده جزییات
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2"
        />
      </svg>
    </NuxtLink>
  </article>
</template>
