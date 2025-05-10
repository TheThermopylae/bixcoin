<template>
  <section>
    <div class="relative md:w-80 mb-5">
      <input
        type="text"
        placeholder="جستجوی ارز"
        class="border rounded-lg p-3 bg-main w-full"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
      >
        <path
          fill="currentColor"
          d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
        />
      </svg>
    </div>
    <UserPanelCryptoTable></UserPanelCryptoTable>
  </section>
</template>
