<template>
  <div class="py-5 bg-main min-h-screen">
    <div class="container m-auto">
      <div class="lg:flex items-start gap-8">
        <UserPanelSideBar></UserPanelSideBar>
        <div class="w-full">
          <UserPanelTheHeader></UserPanelTheHeader>
          <UserPanelDateSection></UserPanelDateSection>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
