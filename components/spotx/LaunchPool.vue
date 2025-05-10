<template>
  <section class="mb-10">
    <div
      class="flex justify-between bg-[#f9f9f9] p-4 rounded-t-xl border items-center"
    >
      <h3 class="text-2xl font-yekB">استخر پرتاب</h3>
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
    <SpotxLaunchPoolSection></SpotxLaunchPoolSection>
    <SpotxLaunchPoolSection></SpotxLaunchPoolSection>
  </section>
</template>
