<template>
  <section class="bg-black text-white hidden md:block">
    <div class="w-3/4 m-auto py10 flex justify-between">
      <div class="my-10">
        <p class="text-3xl font-[800]">تجارت امن تر و کسب سود بزرگ!</p>
        <p class="text-3xl mt-2 mb-6 text-yellow-500 font-[800]">
          از نقدینگی بالا و سهم 1,000,000 USDT لذت ببرید!
        </p>
        <p class="mb-4">
          برای باز کردن قفل تا <span>5,050</span> USDT در جوایز خوش آمدگویی ثبت
          نام کنید
        </p>
        <div
          class="bg-bg-header w-fit rounded-lg border-2 px-2 py-1.5 border-gray-700 focus-within:border-yellow-500 flex"
        >
          <input
            type="text"
            class="bg-bg-header rounded-lg p-1 lg:w-80"
            placeholder="ایمیل/شماره تلفن"
          />
          <NuxtLink
            to="/user-panel"
            class="flex items-center bg-yellow-500 text-black rounded-xl text-sm p-3 hover:bg-yellow-300"
            >ثبت نام برای پاداش
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19z"
              />
            </svg>
          </NuxtLink>
        </div>
        <MainTheSocials></MainTheSocials>
        <NuxtLink to="/" class="mt-5 flex gap-2 items-center">
          اکنون تجارت نسخه ی نمایشی را امتحان کنید
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
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </NuxtLink>
      </div>
      <img
        src="/public/banner-bg-pc.avif"
        alt="banner-img"
        class="w-1/2 hidden md:block"
      />
    </div>
  </section>
</template>