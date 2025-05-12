<template>
  <AuthOtpForm v-if="showOtp" :identifier="identifierValue"></AuthOtpForm>
  <AuthRegisterForm v-else @show-otp-emit="showOtpFunc"></AuthRegisterForm>
</template>

<script setup>
let showOtp = ref(false)
let identifierValue = ref('')

function showOtpFunc (item) {
  console.log(item)
  showOtp.value = true
  identifierValue.value = item
}

definePageMeta({
  layout: false,
  middleware : 'is-logged-client'
})

useHead({
  title: 'ساخت حساب'
})
</script>
