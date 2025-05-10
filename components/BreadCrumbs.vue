<template>
  <div class="breadcrumbs text-sm">
    <ul>
      <li><a>حساب کاربری</a></li>
      <li>
        <a>{{ props.item }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
let props = defineProps(['item'])
</script>
