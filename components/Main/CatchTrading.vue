<template>
  <section class="my-10 block">
    <div class="flex justify-between items-center mb-5">
      <h2 class="font-extrabold md:font-2xl">فرصت معاملاتی بعدی خود را بگیرید</h2>
      <NuxtLink
        to="/"
        class="flex items-center text-yellow-500 bg-white rounded-lg py-2 px-4 gap-1"
        >بیشتر
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="9"
          viewBox="0 0 16 9"
        >
          <path
            fill="currentColor"
            d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
          />
          <path
            fill="currentColor"
            d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
          />
        </svg>
      </NuxtLink>
    </div>
    <div class="xl:flex justify-between gap-5">
      <div
        class="bg-white p-3 rounded-lg shadow-lg xl:w-2/3 mb-5 xl:m-0 overflow-auto"
      >
        <div role="tablist" class="tabs tabs-lg tabs-bordered w-full">
          <input
            type="radio"
            name="tabs"
            role="tab"
            aria-label="مشتقات داغ"
            class="tab text-black mb-2 whitespace-nowrap"
            checked
          />
          <div class="tab-content" role="tabpanel">
            <table class="table">
              <thead>
                <tr>
                  <th>جفت های معاملاتی</th>
                  <th>آخرین قیمت معامله شده</th>
                  <th>24 ساعت تغییر</th>
                  <th>معامله</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/btc.svg?quality=63&format=avif&resize=width/50.4"
                      alt="btc"
                      class="w-7"
                    />
                    BTCUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/eth.svg?quality=63&format=avif&resize=width/50.4"
                      alt="btc"
                      class="w-7"
                    />
                    ETHUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/sol.svg?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    SOLUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/xrp.svg?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    XRPUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/fop/adc297ef-1730-4961-b1ef-ce3664f7343c.png?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    FARTCOINUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/fop/263f49bb-7c3e-443b-9064-1a9335e77c45.svg?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    SUIUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <input
            type="radio"
            name="tabs"
            role="tab"
            aria-label="ارز های داغ"
            class="tab text-black mb-2 whitespace-nowrap"
          />
          <div role="tabpanel" class="tab-content">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>جفت های معاملاتی</th>
                  <th>آخرین قیمت معامله شده</th>
                  <th>24 ساعت تغییر</th>
                  <th>معامله</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/btc.svg?quality=63&format=avif&resize=width/50.4"
                      alt="btc"
                      class="w-7"
                    />
                    BTCUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/eth.svg?quality=63&format=avif&resize=width/50.4"
                      alt="btc"
                      class="w-7"
                    />
                    ETHUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/sol.svg?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    SOLUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/assets/image/coins/light/xrp.svg?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    XRPUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/fop/adc297ef-1730-4961-b1ef-ce3664f7343c.png?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    FARTCOINUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/fop/263f49bb-7c3e-443b-9064-1a9335e77c45.svg?quality=56&format=avif&resize=width/44.800000000000004"
                      alt="btc"
                      class="w-7"
                    />
                    SUIUSDT
                  </td>
                  <td>83,000</td>
                  <td class="text-green-500">+1.95%</td>
                  <td>
                    <NuxtLink
                      to="/"
                      class="border rounded-lg p-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white"
                      >معامله</NuxtLink
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        class="bg-white p-3 rounded-lg shadow-lg flex justify-between flex-col overflow-auto"
      >
        <div>
          <h4 class="text-xl mb-2 font-[700]">برندگان برتر</h4>
          <div>
            <table class="table">
              <tbody>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/app/assets/token/19d9e38871330a9d33074d86880c48c4.png?quality=56&format=avif&resize=width/44.800000000000004"
                      alt=""
                      class="w-7"
                    />
                    AARK/USDT
                  </td>
                  <td>0.003073</td>
                  <td class="text-green-500">64.60%+</td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/fop/adc297ef-1730-4961-b1ef-ce3664f7343c.png?quality=56&format=avif&resize=width/44.800000000000004"
                      alt=""
                      class="w-7"
                    />
                    FARTCOINUSDT
                  </td>
                  <td>0.003073</td>
                  <td class="text-green-500">64.60%+</td>
                </tr>
                <tr>
                  <td class="flex gap-1 items-center ml-20">
                    <img
                      src="https://www.bybit.com/bycsi-root/app/assets/token/e0cd7e71742f960dc70963f0facdefe8.png?quality=56&format=avif&resize=width/44.800000000000004"
                      alt=""
                      class="w-7"
                    />
                    BBQ/USDT
                  </td>
                  <td>0.003073</td>
                  <td class="text-green-500">64.60%+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 class="text-xl my-4 font-[700]">لیستینگ جدید</h4>
            <div class="overflow-x">
              <table class="table">
                <tbody>
                  <tr>
                    <td class="flex gap-1 items-center ml-20">
                      <img
                        src="https://www.bybit.com/bycsi-root/app/assets/token/19d9e38871330a9d33074d86880c48c4.png?quality=56&format=avif&resize=width/44.800000000000004"
                        alt=""
                        class="w-7"
                      />
                      AARK/USDT
                    </td>
                    <td>0.003073</td>
                    <td class="text-green-500">64.60%+</td>
                  </tr>
                  <tr>
                    <td class="flex gap-1 items-center ml-20">
                      <img
                        src="https://www.bybit.com/bycsi-root/fop/adc297ef-1730-4961-b1ef-ce3664f7343c.png?quality=56&format=avif&resize=width/44.800000000000004"
                        alt=""
                        class="w-7"
                      />
                      FARTCOINUSDT
                    </td>
                    <td>0.003073</td>
                    <td class="text-green-500">64.60%+</td>
                  </tr>
                  <tr>
                    <td class="flex gap-1 items-center ml-20">
                      <img
                        src="https://www.bybit.com/bycsi-root/app/assets/token/e0cd7e71742f960dc70963f0facdefe8.png?quality=56&format=avif&resize=width/44.800000000000004"
                        alt=""
                        class="w-7"
                      />
                      BBQ/USDT
                    </td>
                    <td>0.003073</td>
                    <td class="text-green-500">64.60%+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 md:flex gap-4 items-center">
      <p class="mb-2 md:m-0">اکنون ثبت نام کنید تا نمونه کارها را به صورت رایگان ایجاد کنید!</p>
      <NuxtLink
        to="/"
        class="flex items-center w-fit gap-2 bg-yellow-500 rounded-lg p-2 hover:bg-yellow-400 text-md"
        >شروع کنید
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="9"
          viewBox="0 0 16 9"
        >
          <path
            fill="currentColor"
            d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
          />
          <path
            fill="currentColor"
            d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
          />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>
