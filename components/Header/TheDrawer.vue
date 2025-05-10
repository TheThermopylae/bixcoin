<template>
  <div class="drawer z-10">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <label for="my-drawer" class="drawer-button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          /></svg
      ></label>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="bg-bg-header text-white min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li class="mb-3">
          <div class="py-1.5 px-1 bg-gray-700 rounded flex items-center">
            <span
              class="bg-gray-600 py-1 px-6 cursor-pointer rounded text-white ml-2 inline-block w-1/2 text-center"
              >مبادله
            </span>
            <nuxtLink
              to="/"
              class="px-6 text-white inline-block text-center w-1/2"
              >وب 3</nuxtLink
            >
          </div>
        </li>
        <li class="mb-3">
          <ul class="menu rounded-box py-0">
            <li>
              <details>
                <summary class="">خرید رمز ارز</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </li>
        <li class="pr-6 mb-3"><NuxtLink to="">بازار</NuxtLink></li>
        <li class="mb-3">
          <ul class="menu rounded-box py-0">
            <li>
              <details>
                <summary class="">ترید</summary>
                <ul>
                  <li>
                    <NuxtLink to="/trade/future-activity"
                      >فعالیت آینده</NuxtLink
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </li>
        <li>
          <ul class="menu rounded-box py-0">
            <li>
              <details>
                <summary class="py0">ابزار ها</summary>
                <ul>
                  <li>
                    <NuxtLink to="/tools/trading-view"
                      >future activity</NuxtLink
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </li>
        <li class="absolute bottom-5 right-1/2 translate-x-1/2 w-full px-6">
          <div>
            <NuxtLink
              to="/register"
              class="bg-yellow-500 block p-3 rounded-lg text-center mb-3"
              >ساخت حساب</NuxtLink
            >
            <NuxtLink to="/login" class="block text-center">ورود</NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
