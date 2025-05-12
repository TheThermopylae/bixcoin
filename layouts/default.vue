<template>
  <div class="min-h-screen flex flex-col bg-main">
    <HeaderTheHeader />
    <main class="flex-1">
      <slot></slot>
    </main>
    <TheFooter />
  </div>
</template>
