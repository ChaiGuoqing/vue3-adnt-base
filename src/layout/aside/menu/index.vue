<template>
  <!-- <a-menu mode="inline" theme="dark" v-model:openKeys="state.openKeys" :selectedKeys="[defaultActive]" @openChange="onOpenChange"></a-menu> -->
  <a-menu mode="inline" theme="dark" v-model:openKeys="state.openKeys" :selectedKeys="[defaultActive]">
    <SubItem v-for="(route, index) in sidebarRouters" :key="route.path + index" :item="route" :base-path="route.path"></SubItem>
  </a-menu>
</template>

<script setup>
import usePermissionStore from "@/stores/modules/permission";
const route = useRoute();
const permissionStore = usePermissionStore();
const sidebarRouters = computed(() => permissionStore.sidebarRouters);

const state = reactive({
  // 展开菜单key
  openKeys: [""],
  // 上一次展开菜单key
  preOpenKeys: [""],
});
const defaultActive = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
// const onOpenChange = (openKeys) => {
//   const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1);
//   if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//     state.openKeys = openKeys;
//   } else {
//     state.openKeys = latestOpenKey ? [latestOpenKey] : [];
//   }
// };
</script>
