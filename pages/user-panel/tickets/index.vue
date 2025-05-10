<template>
  <main>
    <section class="flex justify-between items-center">
      <UserPanelPageTitle :text="'تیکت ها'">تیکت ها</UserPanelPageTitle>
      <NuxtLink to="/user-panel/tickets/create" class="bg-yellow-500 px-4 py-3 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="inline-block"
        >
          <path
            fill="currentColor"
            d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
          />
        </svg>
        تیکت جدید
      </NuxtLink>
    </section>
    <UserPanelTicketsTable></UserPanelTicketsTable>
  </main>
</template>
