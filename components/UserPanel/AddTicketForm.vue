<template>
  <form class="bg-white rounded-xl p-3" @submit.prevent="">
    <div class="grid md:grid-cols-2 gap-5">
      <select
        id="type"
        class="select select-bordered w-full border-gray-300 text-gray-500"
      >
        <option disabled selected>نوع درخواست</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <select
        id="priority"
        class="select select-bordered w-full border-gray-300 text-gray-500"
      >
        <option disabled selected>اهمیت تیکت</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
    <input
      id="title"
      type="text"
      placeholder="عنوان تیکت"
      class="block my-4 border w-full border-gray-300 rounded-lg p-2.5 placeholder:text-gray-500"
    />
    <textarea
      id="message"
      class="border border-gray-300 rounded-lg w-full resize-none p-2.5 placeholder:text-gray-500 h-full"
      placeholder="پیام خود را بنویسید"
    ></textarea>
    <div class="md:flex justify-between mt-1.5">
      <input
        type="file"
        class="file-input file-input-ghost w-full md:max-w-xs border border-gray-300 rounded-lg mb-3 md:m-0"
      />
      <button class="bg-yellow-500 px-3 py-2.5 rounded-lg">ثبت تیکت</button>
    </div>
  </form>
</template>
