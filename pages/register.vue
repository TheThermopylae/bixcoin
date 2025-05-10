<template>
  <div class="flex justify-between items-center min-h-screen">
    <AuthTheVideo></AuthTheVideo>
    <div class="m-auto p-2">
      <NuxtLink
        to="/"
        class="text-center block w-10 h-10 bg-yellow-500 rounded-full m-auto mb-5"
      ></NuxtLink>
      <form class="border rounded-lg w-[350px] md:w-[400px]">
        <div class="flex justify-between border-b p-5">
          <h1 class="text-xl font-extrabold">ساخت حساب</h1>
          <nuxtLink to="/login" class="flex items-center gap-2 text-yellow-500">
            ورود
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
          <div>
            <label for="email-phone" class="text-sm">ایمیل / شماره تلفن</label>
            <input
              type="text"
              id="email-phone"
              class="block w-full mt-1.5 rounded-lg bg-main p-3"
              placeholder="ایمیل/شماره تلفن (بدون کد) را وارد کنید"
            />
          </div>
          <details class="collapse">
            <summary
              class="collapse-title text-sm px-0 pb-0 -mb-4 font-medium"
              @click="rotate = !rotate"
            >
              <p class="flex items-center gap-1">
                کد معرف (اختیاری)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  class="transition-all"
                  :class="{ 'rotate-180': rotate }"
                >
                  <path
                    fill="currentColor"
                    d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"
                  />
                </svg>
              </p>
            </summary>
            <div class="collapse-content p-0 -mb-3">
              <input
                type="text"
                class="block w-full mt-1.5 rounded-lg bg-main p-3"
              />
            </div>
          </details>
          <div class="flex items-cnter my-4 gap-2">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox w-5 h-5 checkbox-warning"
              id="terms"
            />
            <label for="terms"
              >با کلیک بر روی "ایجاد حساب"، با شرایط خدمات و خط مشی رازداری
              موافقت می کنید</label
            >
          </div>
          <button
            class="bg-yellow-500 w-full rounded-lg p-2.5 hover:bg-yellow-400"
          >
            برای برنده شدن 5,050 دلار ثبت نام کنید
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'ساخت حساب'
})

let rotate = ref(false)
</script>
