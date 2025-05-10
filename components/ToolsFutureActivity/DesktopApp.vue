<template>
  <section class="mb-20">
    <div class="flex flex-col-reverse xl:flex-row gap-5">
      <div class="xl:w-1/2">
        <div>
          <h3 class="text-5xl font-yekB">برنامه دسکتاپ TradingView</h3>
          <p class="text-gray-400 text-justify my-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quasi
            facilis, perferendis cumque iste iure.
          </p>
        </div>
        <ul class="list-disc text-gray-400">
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, modi?</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, modi?</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, modi?</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, modi?</li>
        </ul>
        <div class="mt-5">
          <span>دانلود برای</span>
          <div class="flex gap-5 mt-3">
            <NuxtLink
              to="/"
              class="p-3 rounded-xl bg-gray-900 border border-gray-400/50 w-40"
              >Windows</NuxtLink
            >
            <NuxtLink
              to="/"
              class="p-3 rounded-xl bg-gray-900 border border-gray-400/50 w-40"
              >Mac</NuxtLink
            >
            <NuxtLink
              to="/"
              class="p-3 rounded-xl bg-gray-900 border border-gray-400/50 w-40"
              >Linux</NuxtLink
            >
          </div>
        </div>
      </div>
      <img
        src="/public/ToolsFutureActivity/desktop.png"
        alt="desktop-img"
        class="xl:w-1/2"
      />
    </div>
    <div
      class="w-full h-[1px] bg-gradient-to-r from-black via-gray-500/50 to-black mt-10"
    ></div>
  </section>
</template>
