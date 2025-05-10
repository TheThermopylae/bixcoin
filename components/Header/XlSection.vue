<template>
  <div class="items-center gap-5 flex">
    <NuxtLink to="/">
      <img src="/public/logo.svg" alt="logo" class="w-[72px] hidden xl:block" />
    </NuxtLink>
    <div class="flex items-center gap8 border-l pl-5">
      <div class="py-2 px-1 bg-gray-700 rounded hidden xl:block">
        <span
          class="bg-gray-600 py-1 px-6 cursor-pointer rounded text-white ml-2"
          >مبادله
        </span>
        <nuxtLink to="/" class="px-6 text-white">وب 3</nuxtLink>
      </div>
    </div>
    <div class="hidden xl:flex gap-5">
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">ترید</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><NuxtLink to="/trade/future-activity">فعالیت آینده</NuxtLink></li>
          <li><NuxtLink to="/trade/spotx">نقطه ایکس</NuxtLink></li>
          <li><NuxtLink to="/trade/pre-market">پیش بازار</NuxtLink></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">ابزارها</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><NuxtLink to="/tools/trading-view">تریدینگ ویو</NuxtLink></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="m-1">خرید ارز</div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-bg-header rounde-box z-[1] w-52 p-2 shadow text-white"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>

    <div class="relative hidden xl:block">
      <input
        type="search"
        class="bg-[#232325] rounded-full px-2 py-1 border border-[#232325] hover:border-yellow-500 focus:border-yellow-500 transition-all text-gray-200 w-32 placeholder:text-sm"
        placeholder="SOL/USDT"
        id="search-inp"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 24 24"
        class="absolute left-1 top-1/2 -translate-y-1/2 text-gray-200"
      >
        <path
          fill="currentColor"
          d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
        />
      </svg>
    </div>
  </div>
  <div class="hidden md:flex items-center gap-5">
    <NuxtLink to="/login">ورود</NuxtLink>
    <NuxtLink
      to="/register"
      class="bg-yellow-500 text-black p-2 rounded w-32 text-center"
      >ساخت حساب</NuxtLink
    >
    <img src="/public/logo.svg" alt="logo" class="w-[72px] xl:hidden" />
  </div>
</template>
