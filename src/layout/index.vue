<template>
  <a-layout class="layout-container">
    <Aside ref="menuListRef"></Aside>
    <a-layout>
      <Header @toggleChange="toggleChange"></Header>
      <a-layout-content>
        <div class="layout-main">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
const menuListRef = ref(null);
const toggleChange = () => {
  menuListRef.value.tagChangge();
};
</script>
<style lang="scss" scoped></style>
