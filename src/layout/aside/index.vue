<template>
  <!-- <a-layout-sider class="layout-aside layout-aside-dark" :width="220" v-model:collapsed="false"></a-layout-sider> -->
  <a-layout-sider class="layout-aside layout-aside-dark" :width="220" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <Logo v-if="!collapsed"></Logo>
    <Menu></Menu>
  </a-layout-sider>
</template>
<script setup>
const collapsed = ref(false);
const tagChangge = () => {
  collapsed.value = !collapsed.value;
};
//暴露tagChangge方法
defineExpose({
  tagChangge,
});
</script>
