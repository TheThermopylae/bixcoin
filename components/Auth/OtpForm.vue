<template>
  <div class="flex justify-between items-center min-h-screen">
    <AuthTheVideo></AuthTheVideo>
    <div class="m-auto p-2">
      <NuxtLink
        to="/"
        class="text-center block w-10 h-10 bg-yellow-500 rounded-full m-auto mb-5"
      ></NuxtLink>
      <form
        class="border rounded-lg w-[350px] md:w-[400px]"
        @submit.prevent="showOtpFunc"
      >
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
            <label for="email-phone" class="text-sm">کد تایید</label>
            <input
              type="text"
              id="email-phone"
              class="block w-full mt-1.5 rounded-lg bg-main p-3"
              placeholder="کد پیامک شده را وارد کنید"
              v-model="otp"
            />
          </div>
          <button
            class="bg-yellow-500 w-full rounded-lg p-2.5 hover:bg-yellow-400 h-12 mt-4"
            v-if="!loading"
          >
            ثبت نام
          </button>
          <button
            class="bg-yellow-500 w-full rounded-lg p-2.5 hover:bg-yellow-400 h-12 mt-4 centered"
            v-else
          >
            <LoadingSpinner></LoadingSpinner>
          </button>
        </div>
      </form>
    </div>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </div>
</template>

<script setup>
let props = defineProps(['identifier'])
let otp = ref('')
let loading = ref(false)

async function showOtpFunc () {
  if (!otp.value) push.warning('لطفا کد تایید را وارد کنید')
  else {
    loading.value = true
    try {
      let data = await $fetch(`/api/auth/otp`, {
        method: 'POST',
        body: { identifier: props.identifier, otp: otp.value }
      })

      push.success(data)
      return navigateTo('/')
    } catch (err) {
      push.warning(err)
    } finally {
      loading.value = false
    }
  }
}
</script>
