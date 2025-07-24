<template>
  <AuthOtpForm v-if="showOtp" :identifier="identifierValue"></AuthOtpForm>
  <AuthLoginForm v-else @show-otp-emit="showOtpFunc"></AuthLoginForm>
</template>

<script setup>
let showOtp = ref(false)
let identifierValue = ref('')

function showOtpFunc (item) {
  showOtp.value = true
  identifierValue.value = item
}

definePageMeta({
  layout: false,
  middleware : 'is-logged-client'
})

useHead({
  title: 'ورود به حساب'
})
</script>
