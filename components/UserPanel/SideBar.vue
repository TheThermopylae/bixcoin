<template>
  <div class="hidden xl:block p-3 bg-white w-1/4 rounded-xl sticky top-5">
    <NuxtLink class="text-center text-3xl font-extrabold block" to="/"
      >BX</NuxtLink
    >
    <span class="text-gray-600">منو اصلی</span>
    <ul class="mt-2">
      <li>
        <NuxtLink to="/user-panel/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932m0 10.75h-3.875a1.94 1.94 0 0 0-1.942 1.933v3.875a1.94 1.94 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942v-3.875a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"
            />
          </svg>
          داشبورد
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user-panel/my-wallet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2m15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z"
            />
          </svg>
          کیف پول من
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user-panel/crypto-price">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 19v-1H6q-.425 0-.712-.288T5 17V7q0-.425.288-.712T6 6h1V5q0-.425.288-.712T8 4t.713.288T9 5v1h1q.425 0 .713.288T11 7v10q0 .425-.288.713T10 18H9v1q0 .425-.288.713T8 20t-.712-.288T7 19m0-3h2V8H7zm8 3v-4h-1q-.425 0-.712-.288T13 14V9q0-.425.288-.712T14 8h1V5q0-.425.288-.712T16 4t.713.288T17 5v3h1q.425 0 .713.288T19 9v5q0 .425-.288.713T18 15h-1v4q0 .425-.288.713T16 20t-.712-.288T15 19m0-6h2v-3h-2zm1-1.5"
            />
          </svg>
          ارز های دیجیتال
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user-panel/tickets/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zm6-2H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zm-4-8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"
            />
          </svg>
          تیکت های من
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  margin-bottom: 5px;
  font-size: 20px;
}
li:last-child{
  margin: 0;
}
ul li a {
  border-radius: 8px;
  color: black;
  padding: 10px;
  display: block;
  transition: all 150ms;
}
ul li a:hover {
  background-color: #eab308;
  color: white;
}
ul li .router-link-active {
  background-color: #eab308;
  color: white;
}
svg {
  display: inline-block;
  margin-left: 5px;
}
</style>
