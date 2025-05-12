<template>
  <div
    id="tradingview_chart"
    style="width: 100%; height: 500px"
    v-show="!loading"
  ></div>
  <span
    v-show="loading"
    class="loading loading-spinner loading-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
  ></span>
</template>

<script setup>
let route = useRoute()
let loading = ref(true)

onMounted(async () => {
  await new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })

  new TradingView.widget({
    container_id: 'tradingview_chart',
    width: '100%',
    height: 500,
    symbol: route.params.key,
    interval: 'D',
    timezone: 'Etc/UTC',
    theme: 'dark',
    style: '1',
    locale: 'en',
    toolbar_bg: '#f1f3f6',
    enable_publishing: false,
    allow_symbol_change: true,
    details: true,
    hotlist: true,
    calendar: true,
    studies: [],
    show_popup_button: true,
    popup_width: '1000',
    popup_height: '650'
  })
  loading.value = false
})
</script>
