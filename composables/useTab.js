export default function () {
  let currentTab = ref(0)

  function changeTabFunc (item) {
    currentTab.value = item
  }

  return { currentTab, changeTabFunc }
}
