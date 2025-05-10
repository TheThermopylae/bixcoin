<template>
  <form @submit.prevent="submitForm" class="mt-4 bg-white p-3 rounded-xl">
    <h2 class="text-xl pb-2 mb-3 border-b border-gray-300">اطلاعات فردی</h2>
    <!-- <div class="grid md:grid-cols-2 gap-5">
      <div>
        <label for="firstname">نام</label>
        <input
          type="text"
          id="firstname"
          placeholder="نام"
          class="border w-full mt-2 p-3 rounded-lg border-gray-300"
        />
      </div>
      <div>
        <label for="lastname">نام خانوادگی</label>
        <input
          type="text"
          id="lastname"
          placeholder="نام خانوادگی"
          class="border w-full mt-2 p-3 rounded-lg border-gray-300"
        />
      </div>
      <div>
        <label for="fathername">نام پدر</label>
        <input
          type="text"
          id="fathername"
          placeholder="نام پدر"
          class="border w-full mt-2 p-3 rounded-lg border-gray-300"
        />
      </div>
      <div>
        <label for="gendre">جنسیت</label>
        <select id="gendre" class="select select-bordered w-full max-w-xs mt-2 border-gray-300">
          <option disabled selected>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div>
        <label for="name">نام</label>
        <input
          type="text"
          id="name"
          placeholder="نام"
          class="border w-full mt-2 p-3 rounded-lg border-gray-300"
        />
      </div>
      <div>
        <label for="name">نام</label>
        <input
          type="text"
          id="name"
          placeholder="نام"
          class="border w-full mt-2 p-3 rounded-lg border-gray-300"
        />
      </div>
    </div> -->
    <div>
      <div class="flex items-center gap-2 bg-main p-3 rounded-lg">
        <input type="checkbox" class="toggle toggle-warning" />
        <p class="text-sm">
          اتباع خارجی هستم ( امکان برداشت ارزی برای اتباع غیرفعال میباشد . )
        </p>
      </div>
      <label for="code-meli">کد ملی</label>
      <input
        type="text"
        id="code-meli"
        placeholder="کد ملی"
        class="block w-full p-[11px] rounded-lg border border-gray-300 mt-2 placeholder:text-gray-400"
      />
    </div>
    <div class="grid md:grid-cols-3 my-5 gap-5">
      <div>
        <label for="birthday">روز تولد</label>
        <input
          type="number"
          id="birthday"
          placeholder="روز تولد"
          class="block w-full p-[11px] rounded-lg border border-gray-300 mt-2 placeholder:text-gray-400"
        />
      </div>
      <div>
        <label for="month-birth">ماه تولد</label>
        <select
          id="month-birth"
          class="select select-bordered w-full mt-2 border-gray-300 text-gray-400"
        >
          <option disabled selected>ماه تولد</option>
          <option v-for="item in month" :key="month" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <label for="year-birth">سال تولد</label>
        <input
          type="number"
          id="year-birth"
          placeholder="سال تولد"
          class="block w-full p-[11px] rounded-lg border border-gray-300 mt-2 placeholder:text-gray-400"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button class="flex items-center gap-2 bg-yellow-500 p-3 rounded-lg">
        بررسی اطلاعات
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M3.636 11.293a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414L6.757 13H20a1 1 0 1 0 0-2H6.757l3.95-3.95a1 1 0 0 0-1.414-1.414z"
            />
          </g>
        </svg>
      </button>
    </div>
  </form>
</template>

<script setup>
let month = ref([
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
])

let emit = defineEmits(['showStepTwo'])

const submitForm = () => {
  // مثلا بررسی اطلاعات یا اعتبارسنجی
  console.log('فرم ارسال شد')
  // بعدش مثلا رفتن به استپ بعد:
  emit('showStepTwo')
}
</script>
