<template>
  <div class="container m-auto">
    <LeaderboardTitleSection></LeaderboardTitleSection>
    <LeaderboardShowLeaderboard></LeaderboardShowLeaderboard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dark-layout'
})

useHead({
  title: 'رتبه بندی'
})
</script>
