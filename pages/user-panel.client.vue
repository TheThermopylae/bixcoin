<template>
  <NuxtLayout name="user-panel">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  redirect : '/user-panel/dashboard'
})
useHead({
  titleTemplate: 'پنل کاربری BX | %s'
})
</script>
