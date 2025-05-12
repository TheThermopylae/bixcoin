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
            <label for="email-phone" class="text-sm">ایمیل / شماره تلفن</label>
            <input
              type="text"
              id="email-phone"
              class="block w-full mt-1.5 rounded-lg bg-main p-3"
              placeholder="ایمیل/شماره تلفن (بدون کد) را وارد کنید"
              v-model="identifier"
            />
          </div>
          <div class="flex items-cnter my-4 gap-2">
            <input
              type="checkbox"
              v-model="acceptRules"
              class="checkbox w-5 h-5 checkbox-warning"
              id="terms"
            />
            <label for="terms"
              >با کلیک بر روی "ایجاد حساب"، با شرایط خدمات و خط مشی رازداری
              موافقت می کنید</label
            >
          </div>
          <button
            class="bg-yellow-500 w-full rounded-lg p-2.5 hover:bg-yellow-400 h-12"
            v-if="!loading"
          >
            ارسال کد
          </button>
          <button
            class="bg-yellow-500 w-full rounded-lg p-2.5 hover:bg-yellow-400 h-12 centered"
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
let identifier = ref('')
let acceptRules = ref(false)
let loading = ref(false)

let emit = defineEmits(['showOtpEmit'])
let config = useRuntimeConfig()

async function showOtpFunc () {
  if (!identifier.value)
    push.warning({
      message: 'لطفا ایمیل یا شماره تلفن خود را وارد کنید'
    })
  else if (!acceptRules.value)
    push.warning('لطفا اول قوانین را مطالعه و سپس موافقت کنید')
  else {
    loading.value = true
    try {
      let data = await $fetch(`${config.public.API_BASE_URL}/auth/register`, {
        method: 'POST',
        body: { identifier: identifier.value }
      })

      push.info('کد تایید ارسال شده را وارد کنید')
      emit('showOtpEmit', identifier.value)
    } catch (err) {
      push.warning(err)
    } finally {
      loading.value = false
    }
  }
}
</script>
