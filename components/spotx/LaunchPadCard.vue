<template>
  <article class="p-3 rounded-xl bg-white">
    <div class="flex items-center gap-2 mb-3 pb-3 border-b">
      <NuxtImg
        src="https://static.bymj.io/spot/img/9b6628b609f611eebdc72a133fcf998d.svg"
        alt="icon"
        class="w-10"
      ></NuxtImg>
      <div>
        <h4 class="font-yekSemiB">Subscription in MNT</h4>
        <p class="text-sm text-gray-500">
          MNT را متعهد کنید که در تخصیص توکن مشترک شود.
        </p>
      </div>
    </div>
    <div class=" grid-cols-2 gap-3 grid xl  :grid-cols-3">
      <div class="text-[12px] text-gray-500">
        کل تخصیص (XTER)
        <span class="text-black font-yekSemiB block">3,750,000</span>
      </div>
      <div class="text-[12px] text-gray-500">
        کل مبلغ تعهد شده
        <span class="text-black font-yekSemiB block">79,309,468 MNT </span>
      </div>
      <div class="text-[12px] text-gray-500">
        مجموع شرکت کنندگان
        <span class="text-black font-yekSemiB block">18,916</span>
      </div>
    </div>
    <div class="mt-3 flex justify-between items-end lg:block xl:flex">
      <div class="lg:mb-2.5 xl:m-0">
        <span class="text-gray-500">قیمت</span>
        <span class="xl:text-2xl text-primary block">1 XTER = 0.0312 MNT</span>
      </div>
      <NuxtLink
        to="/"
        class="border rounded-lg border-primary text-primary p-2 hover:bg-primary hover:text-white transition-all block text-center"
        >مشاهده جزییات</NuxtLink
      >
    </div>
  </article>
</template>
