<template>
  <article
    class="rounded-xl bg-black p-4 md:flex justify-between items-center border-2 border-primary gap-3 relative"
  >
    <NuxtImg
      src="https://images.contentstack.io/v3/assets/blt8ec5b78e9ea1d11d/blt4b0cfd65999d2540/67efab158d0b995d10e0f70e/EN_Announcement_1600x900_(7).png"
      class="md:w-1/3 rounded-xl mb-3 md:m-0"
      quality="50"
    ></NuxtImg>
    <div class="flex flex-col justify-between gap-3">
      <h3 class="md:text-3xl font-yekB">
        اطلاعیه مهم: به‌روزرسانی‌های ساعت تابستانی (DST) برای جلسات معاملاتی
      </h3>
      <div>
        <p class="text-[#81858C]">
          لطفاً توجه داشته باشید که با توجه به تغییرات آتی ساعت تابستانی (DST)
          در اتحادیه اروپا، بریتانیا و
        </p>
        <p class="text-[#81858C]">
          رویداد به پایان میرسد در : 10 روز و 6 ساعت و 28 دقیقه
        </p>
      </div>
      <NuxtLink
        to="/"
        class="border border-primary rounded-md px-4 py-1.5 text-primary w-fit"
        >ملحق شوید</NuxtLink
      >
    </div>
    <span
      class="bg-green-500/30 text-green-500 absolute bottom-4 left-4 px-1 py-0.5 rounded"
      >در جریان</span
    >
  </article>
</template>
