<template>
  <a-layout-header class="layout-header h-90">
    <div class="layout-navbar">
      <div class="navbar-left">
        <a-space :size="10">
          <menu-unfold-outlined v-if="state.collapsed" @click="toggleCollapsed" />
          <menu-fold-outlined v-else @click="toggleCollapsed" />
          <BreadCrumb></BreadCrumb>
        </a-space>
      </div>
      <div class="navbar-right">
        <RightAside></RightAside>
      </div>
    </div>
    <TagView></TagView>
  </a-layout-header>
</template>
<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
const emit = defineEmits([]);
const state = reactive({
  collapsed: false,
});
const toggleCollapsed = () => {
  emit("toggleChange");
  state.collapsed = !state.collapsed;
};
</script>
<style lang="scss" scoped>
.h-90 {
  height: 75px !important;
}
.layout-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-left {
  display: flex;
  align-items: center;
  padding-left: 16px;
  .menu-icon {
    padding: 0 15px;
    cursor: pointer;
  }
}
</style>
