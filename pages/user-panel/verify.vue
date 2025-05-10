<template>
  <main class="lg:w-2/3 m-auto">
    <section class="p-5 rounded-xl bg-white leading-8">
      <h1 class="text-2xl font-extrabold">احراز هویت</h1>
      <p class="text-yellow-500 font-[600]">احراز هویت انجام نشده است .</p>
      <p>
        برای استفاده از امکانات سایت باید حداقل مرحله اول احراز هویت را گذرانده
        باشید .
      </p>
    </section>
    <UserPanelStepSection :stepTwo="showStepTwoState" @showStepOne="showStepTwoState = false" @showStepTwo="showStepTwoState = true"></UserPanelStepSection>
    <UserPanelStepTwo v-if="showStepTwoState"></UserPanelStepTwo>
    <UserPanelStepOneForm @showStepTwo="showStepTwoState = true" v-else></UserPanelStepOneForm>
  </main>
</template>

<script setup>
let showStepTwoState = ref(false)
</script>
