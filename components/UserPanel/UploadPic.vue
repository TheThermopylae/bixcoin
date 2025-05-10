<template>
  <div>
    <input type="file" ref="fileInput" class="hidden" @change="handleFile" />
    <button
      @click="triggerFileInput"
      class="mt-3 border-2 border-dashed w-full bg-white flex justify-center items-center flex-col border-black p-10 gap-1 rounded-xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M170 56a6 6 0 0 1 6-6h18V32a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V62h-18a6 6 0 0 1-6-6m58.59 55A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64a77.53 77.53 0 0 1 40-31.38a46 46 0 1 1 51 0a77.53 77.53 0 0 1 40 31.38A89.65 89.65 0 0 0 218 128a92 92 0 0 0-1.24-15a6 6 0 1 1 11.83-2M128 154a34 34 0 1 0-34-34a34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20a66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218"
        />
      </svg>
      <span class="font-semibold">احراز هویت مرحله دوم</span>
      آپلود تصویر سلفی با کارت ملی
    </button>
  </div>
</template>

<script setup>
const fileInput = ref(null)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFile = event => {
  const file = event.target.files[0]
  console.log('فایلی که انتخاب شد:', file)
}
</script>
