<template>
  <article class="mb-5 border-b pb-5 last:border-none last:mb-0 last:pb-0 relative">
    <div
      class="flex gap-1 items-center bg-green-500/20 text-green-500 absolute left-0 top-0 text-[12px] rounded-xl p-1 pr-1"
    >
      درحال انجام
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M11 8v5h5" />
        </g>
      </svg>
    </div>
    <div class="lg:flex justify-between items-center">
      <div class="lg:flex items-center gap-4">
        <div
          class="w-[120px] h-[120px] rounded-xl flex justify-center items-center bg-main mb-3 lg:m-0"
        >
          <NuxtImg
            src="https://www.bybit.com/bycsi-root/app/assets/token/0b7f6ebf437ae3aad46f8b043dfaa6e6.png?"
            alt="icon"
            class="w-1/2"
          ></NuxtImg>
        </div>
        <div class="">
          <p class="font-yekB text-xl mb-4">
            برای کسب درآمد، INIT را سپرده گذاری/معامله کنید
          </p>
          <div class="md:flex gap-5">
            <div class="text-gray-500 border-b pb-2 mb-2 md:border-l pl-5 md:border-b-0">
              مجموع جایزه (INIT)
              <span class="text-black font-yekSemiB block">2,400,000</span>
            </div>
            <div class="text-gray-500 border-b pb-2 mb-2 md:border-l pl-5 md:border-b-0">
              مجموع شرکت کنندگان
              <span class="text-black font-yekSemiB block">6,834</span>
            </div>
            <div class="text-gray-500">
              کار ترید به پایان می رسد:
              <span class="text-black font-yekSemiB block"
                >13 D 15 H 35 M 4 S</span
              >
            </div>
          </div>
        </div>
      </div>
      <NuxtLink class="btn-link-c flex items-center gap-2 mt-5 lg:m-0" to="/">
        ملحق شوید
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
            d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5"
          />
        </svg>
      </NuxtLink>
    </div>
    <div
      class="mt-5 border rounded-xl p-4 bg-main md:flex justify-between items-center"
    >
      <div class="flex gap-1 items-center">
        <NuxtImg
          src="https://www.bybit.com/bycsi-root/bybit/deadpool/image-72ba837f20764ef7976e23bd5544f905.png?"
        ></NuxtImg>
        <p class="text-sm">دوستان خود را معرفی کنید و با هم کسب درآمد کنید!</p>
      </div>
      <NuxtLink
        to="/register"
        class="flex items-center text-gray-500 gap-1.5 mt-2 md:m-0"
      >
        اشتراک
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
          />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
