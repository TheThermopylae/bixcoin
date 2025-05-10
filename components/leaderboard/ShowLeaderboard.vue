<template>
  <section class="pb-10">
    <LeaderboardDateTabs
      :tab="currentTab"
      @changeTab="changeTabFunc"
    ></LeaderboardDateTabs>
    <LeaderboardSection></LeaderboardSection>
  </section>
</template>

<script setup>
let { currentTab, changeTabFunc } = useTab()
</script>
