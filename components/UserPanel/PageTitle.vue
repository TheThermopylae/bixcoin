<template>
  <div class="my-5">
    <h1 class="text-3xl font-semibold"><slot></slot></h1>
    <BreadCrumbs :item="props.text"></BreadCrumbs>
  </div>
</template>

<script setup>
let props = defineProps(['text'])
</script>