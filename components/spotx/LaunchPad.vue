<template>
  <section class="mb-10">
    <div
      class="xl:flex justify-between bg-[#f9f9f9] p-4 rounded-t-xl border items-center"
    >
      <div class="mb-5 xl:m-0">
        <h3 class="text-2xl font-yekB">لانچ پد</h3>
        <p class="text-gray-500 text-sm">
          دسترسی زودهنگام به توکن‌های پروژه‌های امیدوارکننده در BX را ایمن کنید.
          می توانید از MNT برای فروش توکن استفاده کنید
        </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 xl:flex gap-5 items-center">
        <div class="text-gray-500 text-sm">
          <span class="text-black font-yekSemiB block text-lg">482,524</span>
          مجموع شرکت کنندگان
        </div>
        <div class="text-gray-500 text-sm">
          <span class="text-black font-yekSemiB block text-lg"
            >$73,719,039</span
          >
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
    <div class="p-5 bg-white border border-t-0 rounded-b-xl">
      <div class="bg-main p-3 rounded-xl lg:flex justify-between gap-5">
        <div class="lg:w-1/3 flex flex-col justify-between ">
          <div class="flex items-center gap-3 border-b pb-3">
            <NuxtImg
              src="https://www.bybit.com/bycsi-root/app/assets/token/350169c43d3902940a04f529befb5293.png?"
              class="w-14"
              alt="icon"
            ></NuxtImg>
            <div>
              <h4 class="text-2xl font-yekSemiB">XTER</h4>
              <span class="text-gray-500 text-sm">XTER Launchpad</span>
            </div>
          </div>
          <span class="text-gray-500 block my-5 lg:m-0">کامل شده</span>
        </div>
        <div class="lg:w-2/3 grid lg:grid-cols-2 gap-3">
            <SpotxLaunchPadCard></SpotxLaunchPadCard>
            <SpotxLaunchPadCard></SpotxLaunchPadCard>
        </div>
      </div>
    </div>
  </section>
</template>
