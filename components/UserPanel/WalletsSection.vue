<template>
  <section class="my-5">
    <h1 class="font-extrabold text-3xl">کیف پول ها</h1>
    <div class="breadcrumbs text-sm text-gray-500">
      <ul>
        <li><a>حساب کاربری</a></li>
        <li><a>کیف پول ها</a></li>
      </ul>
    </div>
    <UserPanelWalletBanner></UserPanelWalletBanner>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <article class="bg-white rounded-xl p-5 w-full">
        <div class="flex items-center gap-2 border-b pb-4 mb-4">
          <img
            src="/profile2.jpg"
            alt="wallet-image"
            class="w-12 h-12 rounded-full"
          />
          <div>
            <h4>کیف پول تومانی</h4>
            <span>IRT</span>
          </div>
        </div>
        <span class="block text-gray-500 text-lg mb-2">موجودی</span>
        <span>0</span>
        <div class="flex justify-end gap-2">
          <NuxtLink
            to="/"
            class="border py-2 w-28 text-center rounded-lg text-gray-500"
            >واریز تومانی</NuxtLink
          >
          <NuxtLink
            to="/"
            class="border py-2 w-28 text-center rounded-lg text-gray-500"
            >برداشت تومانی</NuxtLink
          >
        </div>
      </article>
      <article class="bg-white rounded-xl p-5">
        <div class="flex items-center gap-2 border-b pb-4 mb-4">
          <img
            src="/profile2.jpg"
            alt="wallet-image"
            class="w-12 h-12 rounded-full"
          />
          <div>
            <h4>کیف پول لیر</h4>
            <span>TRY</span>
          </div>
        </div>
        <span class="block text-gray-500 text-lg mb-2">موجودی</span>
        <span>0</span>
        <div class="flex justify-end gap-2">
          <NuxtLink
            to="/"
            class="border py-2 w-28 text-center rounded-lg text-gray-500"
            >تبدیل</NuxtLink
          >
        </div>
      </article>
      <article class="bg-white rounded-xl p-5">
        <div class="flex items-center justify-between border-b pb-4 mb-4">
          <div class="flex items-center gap-2">
            <img
              src="/profile2.jpg"
              alt="wallet-image"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <h4>تتر</h4>
              <span>USDT</span>
            </div>
          </div>
          <span class="flex text-green-500"
            >1.99
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
                d="M12 20V4m0 0l6 6m-6-6l-6 6"
              />
            </svg>
          </span>
        </div>
        <span class="block text-gray-500 text-lg mb-2">موجودی</span>
        <span>0</span>
        <div class="flex justify-end gap-2">
          <NuxtLink
            to="/"
            class="border py-2 w-28 text-center rounded-lg text-gray-500"
            >خرید و فروش</NuxtLink
          >
          <NuxtLink
            to="/"
            class="border py-2 w-28 text-center rounded-lg text-gray-500"
            >واریز
          </NuxtLink>
          <NuxtLink
            to="/"
            class="border py-2 w-28 text-center rounded-lg text-gray-500"
            >برداشت
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
