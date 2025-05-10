<template>
  <section class="mb-10">
    <div
      class="xl:flex justify-between bg-[#f9f9f9] p-4 rounded-t-xl border items-center"
    >
      <div class="mb-5 xl:m-0">
        <h3 class="text-2xl font-yekB">توسط استارتر</h3>
        <p class="text-gray-500 text-sm">
          ByStarter دسترسی انحصاری به پروژه های پیشرفته Web3 را از طریق فروش
          توکن برای لیست سفید فراهم می کند
        </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 xl:flex gap-5 items-center">
        <div class="text-gray-500 text-sm">
          <span class="text-black font-yekSemiB block text-lg">482,524</span>
          مجموع شرکت کنندگان
        </div>
        <div class="text-gray-500 text-sm">
          <span class="text-black font-yekSemiB block text-lg">$73,719,039</span>
          کل تعهد (USD)
        </div>
        <div class="text-gray-500 text-sm">
          <span class="text-black font-yekSemiB block text-lg">337%</span>
          میانگین. رشد
        </div>
        <div class="text-gray-500 text-sm">
          <span class="text-black font-yekSemiB block text-lg">5</span>
          پروژه ها
        </div>
        <NuxtLink
          class="w-8 h-8 flex justify-center items-center border rounded-md bg-white"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <SpotxStarterCard></SpotxStarterCard>
  </section>
</template>
