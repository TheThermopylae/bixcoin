<template>
  <div class="bg-white pt-7 p-5 border border-t-0 last:rounded-b-xl relative">
    <div
      class="flex gap-1 items-center bg-green-500/20 text-green-500 absolute left-0 top-0 text-[12px] rounded-br-xl p-0.5 pr-1"
    >
      درحال انجام
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M11 8v5h5" />
        </g>
      </svg>
    </div>
    <div class="lg:flex justify-between gap-5">
      <div class="lg:w-1/3">
        <div class="flex items-center gap-2 font-yekB text-xl">
          <NuxtImg
            src="https://www.bybit.com/bycsi-root/app/assets/token/541a9169e99950f9587f4e5e158a8b7f.png?"
            class="w-10 h-10 rounded-full"
            alt="icon"
          >
          </NuxtImg>
          DOLO
        </div>
        <p class="text-gray-500 mt-2 mb-5">
          Dolomite is a decentralized money market and trading protocol that
          offers capital-efficient lending, borrowing, and trading solutions.
          Unlike
        </p>
        <div class="mb-8">
          <h4>Prize Pool (DOLO)</h4>
          <span class="font-yekB text-xl">4,000,000</span>
        </div>
        <div class="mb-8">
          <h4>Prize Pool (DOLO)</h4>
          <span class="font-yekB text-xl">4,000,000</span>
        </div>
        <div class="text-sm">
          <p class="text-gray-500">استک به پایان می رسد در :</p>
          <span>06 D 20 H 03 M 35 S</span>
          <p class="text-gray-500">
            دوره استک
            <span class="text-black">04-24 13:00 ~05-01 13:00 UTC</span>
          </p>
        </div>
      </div>
      <div
        class="lg:w-2/3 border rounded-xl md:grid grid-cols-2 xl:grid-cols-3 lg:gap-5 xl:gap-0 p-3 mt-3 lg:m-0"
      >
        <SpotxLaunchCard :show="true"></SpotxLaunchCard>
        <SpotxLaunchCard :show="true"></SpotxLaunchCard>
        <SpotxLaunchCard></SpotxLaunchCard>
      </div>
    </div>
    <div class="mt-5 border rounded-xl p-4 bg-main md:flex justify-between items-center">
      <div class="flex gap-1 items-center">
        <NuxtImg
          src="https://www.bybit.com/bycsi-root/bybit/deadpool/image-72ba837f20764ef7976e23bd5544f905.png?"
        ></NuxtImg>
        <p class="text-sm">دوستان خود را معرفی کنید و با هم کسب درآمد کنید!</p>
      </div>
      <NuxtLink to="/register" class="flex items-center text-gray-500 gap-1.5 mt-2 md:m-0">
        اشتراک
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
