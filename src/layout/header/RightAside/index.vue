<template>
  <div class="option-module flex items-center mr-10">
    <div class="icon" @click="onScreenfullClick">
      <FullscreenOutlined v-if="isFullScreen" />
      <FullscreenExitOutlined v-else />
    </div>
    <div class="pl-10 pr-10">
      <User />
    </div>
  </div>
</template>

<script setup>
import screenfull from "screenfull";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import User from "./User.vue";
const isFullScreen = ref(false);
// 全屏点击时
const onScreenfullClick = () => {
  const screenfulls = screenfull;
  if (!screenfulls.enabled) {
    message.warning("浏览器不支持全屏");
    return false;
  }
  screenfulls.toggle();
  isFullScreen.value = !isFullScreen.value;
};
</script>

<style scoped lang="scss">
.option-module {
  padding: 0 10px;
  .icon {
    padding: 0 10px;
    height: 100%;
    cursor: pointer;
  }
}
</style>
