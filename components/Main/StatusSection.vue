<template>
  <section class="bg-white container m-auto py-10 mb-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-0">
      <div>
        <span class="text-xl font-[700]">26,175,065,638</span>
        <p class="text-gray-600">حجم معاملات 24 ساعته (USD)</p>
      </div>
      <div>
        <span class="text-xl font-[700]">1,837</span>
        <p class="text-gray-600">رمزارزهای فهرست شده</p>
      </div>
      <div>
        <span class="text-xl font-[700]">68,329,190</span>
        <p class="text-gray-600">کاربران ثبت نام شده</p>
      </div>
      <div>
        <span class="text-xl font-[700]">160</span>
        <p class="text-gray-600">کشورهای پشتیبانی شده</p>
      </div>
    </div>
    <NuxtLink
      to="/"
      class="mt-6 flex items-center gap-1 bg-yellow-500 w-fit px-6 py-2 rounded-lg hover:bg-yellow-400"
      >ثبت نام کنید
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.78em"
        height="1em"
        viewBox="0 0 16 9"
      >
        <path
          fill="currentColor"
          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
        />
        <path
          fill="currentColor"
          d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
        />
      </svg>
    </NuxtLink>
  </section>
</template>
