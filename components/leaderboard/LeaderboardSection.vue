<template>
  <section class="mt-5 rounded-3xl p-10">
    <h2 class="text-xl md:text-2xl text-green-500 font-yekSemiB text-center">
      2025 هجدهمین نسخه هفتگی
    </h2>
    <div class="grid md:grid-cols-3 mt-20 gap-20 md:gap-2 lg:gap-5 xl:gap-10">
      <LeaderboardTopCard></LeaderboardTopCard>
      <LeaderboardTopCard></LeaderboardTopCard>
      <LeaderboardTopCard></LeaderboardTopCard>
    </div>
    <LeaderboardTable></LeaderboardTable>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  background: url('https://www.bybit.com/leaderboard/images/weekly_bg.png')
    #1b1b1b center/cover no-repeat;
}
</style>
