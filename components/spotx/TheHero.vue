<template>
  <section class="bg-gray-800">
    <div
      class="container m-auto py-10 md:flex flex-row-reverse justify-between items-center"
    >
      <NuxtImg
        src="/SpotX/banner.png"
        class="w-full md:w-1/2 lg:w-1/4 mb-10 md:m-0"
      ></NuxtImg>
      <div>
        <h1 class="font-yekB text-3xl lg:text-[56px] text-white">
          نقطه <span class="font-yekB text-primary">X</span>
        </h1>
        <p class="text-gray-400 text-xl lg:text-3xl font-yekSemiB mb-8 mt-5">
          از لیست های جدید در بای بیت اسپات به طرق مختلف بهره مند شوید
        </p>
        <div class="grid grid-cols-2 lg:flex gap-5">
          <div class="lg:border-l pl-5">
            <span class="text-white font-yekSemiB text-xl block"
              >23,310,396</span
            >
            <span class="text-gray-400">مجموع شرکت کنندگان</span>
          </div>
          <div class="lg:border-l pl-5">
            <span class="text-white font-yekSemiB text-xl block"
              >$4,415,752,804</span
            >
            <span class="text-gray-400">کل تعهد (USD)</span>
          </div>
          <div class="lg:border-l pl-5">
            <span class="text-white font-yekSemiB text-xl block"
              >$139,639,249</span
            >
            <span class="text-gray-400">مجموع جایزه (USD)</span>
          </div>
          <div>
            <span class="text-white font-yekSemiB text-xl block">491%</span>
            <div
              class="lg:tooltip"
              data-tip="میانگین درصد افزایش ارزش نسبت به قیمت فروش اولیه در هفته اول پس از راه اندازی توکن جدید."
            >
              <span class="text-gray-400 border-b border-dashed pb-0.5"
                >میانگین. رشد</span
              >
            </div>
          </div>
        </div>
        <NuxtLink
          to="/"
          class="text-primary mt-8 flex items-center gap-1 w-fit"
        >
          تاریخچه ارجاع و قوانین
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
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
  </section>
</template>
