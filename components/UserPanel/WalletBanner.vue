<template>
  <section
    class="h-[200px] rounded-2xl relative p-3 flex items-center my-3 text-white"
  >
    <div class="absolute lg:right-40">
      <h2 class="text-xl text-white">ارزش کل دارایی ها (تومان)</h2>
      <span class="block my-5 text-3xl">0</span>
      <div class="flex gap-5 md:gap-20">
        <div>
          <div class="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#cacaca"
                d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
            0
          </div>
          <p class="mt-2">موجودی تومانی</p>
        </div>
        <div>
          <div class="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="#00ff24"
                d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
            0
          </div>
          <p class="mt-2">موجودی ارزی</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.relative {
  background: linear-gradient(to left, #dda808, #eab308, white);
}
</style>
