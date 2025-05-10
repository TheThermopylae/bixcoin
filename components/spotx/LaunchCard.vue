<template>
  <article
    class="border-b xl:border-b-0 xl:border-l last:border-none last:pb-0 last:mb-0 pb-4 mb-4 xl:px-4 xl:m-0 xl:pb-0 flex flex-col justify-between"
  >
    <div class="text-center">
      <h5 class="font-yekB">DOLO Pool</h5>
      <span class="text-gray-500">Stake DOLO, Earn DOLO</span>
    </div>
    <div
      v-if="props.show"
      class="from-orange-500 to-orange-600 text-white bg-gradient-to-l w-fit m-auto text-sm p-0.5 rounded-tl-xl rounded-br-xl"
    >
      قرض و سهام
    </div>
    <div
      class="w-14 h-14 bg-main rounded-full m-auto my-3 flex justify-center items-center gap-0.5"
    >
      <img
        src="https://www.bybit.com/bycsi-root/app/assets/token/541a9169e99950f9587f4e5e158a8b7f.png?"
        class="w-1/3"
        alt=""
      />
      <img
        src="https://www.bybit.com/bycsi-root/app/assets/token/541a9169e99950f9587f4e5e158a8b7f.png?"
        class="w-1/3"
        alt=""
      />
    </div>
    <div class="text-center">
      <span class="text-sm">Prize Pool (DOLO)</span>
      <span class="font-yekB text-lg block">800,000</span>
    </div>
    <div class="text-sm leading-6">
      <div class="flex justify-between">
        <span class="text-gray-500">APR</span>
        <span>800.00%</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-500">کل سهام</span>
        <span>1,864,647.2006 DOLO</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-500">مجموع شرکت کنندگان</span>
        <span>203</span>
      </div>
    </div>
    <NuxtLink
      class="bg-primary block text-center px-4 py-2 mt-3 rounded hover:bg-primary/80 transition-all"
      to="/"
      >حالا استک کنید</NuxtLink
    >
  </article>
</template>

<script setup>
let props = defineProps(['show'])
</script>
