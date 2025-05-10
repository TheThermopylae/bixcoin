<template>
  <header
    class="bg-white px-5 py-3 rounded-xl flex justify-between items-center"
  >
    <div class="flex items-center gap-3">
      <UserPanelTheDrawer></UserPanelTheDrawer>
      <img src="/profile2.jpg" alt="profile" class="w-12 h-12 rounded-full" />
      <div>
        <span class="block">amir</span>
        <span style="direction: ltr; display: block">09905****80</span>
      </div>
    </div>
    <div class="flex gap-5">
      <NuxtLink to="/user-panel/notifications" class="flex gap-2 items-center transition-all" active-class="text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.4 7.4 0 0 1-1.308 3.754a1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528a7.4 7.4 0 0 1-1.308-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13zm-2.557 2.25a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.9 8.9 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.9 8.9 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
            clip-rule="evenodd"
          />
        </svg>
        <span class="hidden md:block">اطلاعیه ها</span>
      </NuxtLink>
      <NuxtLink to="/" class="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4.063L1.28 15.78A.75.75 0 0 1 0 15.25zm3-1.5A1.5 1.5 0 0 0 1.5 4v9.44l1.723-1.72l.22-.22H13a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="hidden md:block">پشتیبانی</span>
      </NuxtLink>
    </div>
  </header>
</template>
