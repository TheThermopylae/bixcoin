<template>
  <div class="flex justify-between items-center min-h-screen">
    <AuthTheVideo></AuthTheVideo>
    <div class="m-auto p-2">
      <NuxtLink to="/" class="text-center block w-10 h-10 bg-yellow-500 rounded-full m-auto mb-5"></NuxtLink>
      <div class="border rounded-lg w-[350px] md:w-[400px]">
        <div class="flex justify-between border-b p-5">
          <h1 class="text-xl font-extrabold">ورود به حساب</h1>
          <nuxtLink
            to="/register"
            class="flex items-center gap-2 text-yellow-500"
          >
            ساخت حساب
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m15 3.086l7.414 7.414H2v-2h15.586l-4-4zM22 13.5v2H6.414l4 4L9 20.914L1.586 13.5z"
              />
            </svg>
          </nuxtLink>
        </div>
        <div class="p-5">
          <div role="tablist" class="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              class="tab"
              aria-label="ایمیل"
              checked="checked"
            />
            <div role="tabpanel" class="tab-content">
              <form>
                <input
                  type="email"
                  placeholder="ایمیل"
                  class="block mt-4 bg-main p-3 w-full rounded-lg"
                />
                <input
                  type="password"
                  placeholder="پسورد"
                  class="block my-4 bg-main p-3 w-full rounded-lg"
                />
                <NuxtLink to="/" class="text-yellow-500 block my-4"
                  >فراموشی رمز</NuxtLink
                >
                <button
                  class="w-full bg-yellow-500 rounded-lg p-3 hover:bg-yellow-400"
                >
                  ورود
                </button>
              </form>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              class="tab"
              aria-label="شماره تلفن"
            />
            <div role="tabpanel" class="tab-content">
              <form>
                <input
                  type="number"
                  placeholder="شماره تلفن"
                  class="block mt-4 bg-main p-2 w-full rounded-lg"
                />
                <input
                  type="password"
                  placeholder="پسورد"
                  class="block my-4 bg-main p-2 w-full rounded-lg"
                />
                <NuxtLink to="/" class="text-yellow-500 block my-4"
                  >فراموشی رمز</NuxtLink
                >
                <button
                  class="w-full bg-yellow-500 rounded-lg p-2 hover:bg-yellow-400"
                >
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'ورود به حساب'
})
</script>