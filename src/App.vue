<script setup lang="ts">
// TODO 获取菜单列表，根据获取到的列表渲染左侧菜单(ul部分，可以使用ant-design-vue的Menu组件)
// TODO 调整css样式，实现三栏布局，使得header在上， 下面部分撑满， 下面的左侧菜单固定在左侧，右侧内容自适应
// import { getMenus } from "./api";
</script>

<template>
  <div id="app">
    <div style="backgournd: lightblue">这里是header</div>

    <ul style="background: gray">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/user">user</router-link></li>
    </ul>

    <router-view />
  </div>
</template>

<style scoped lang="less">
#app {
  width: 100%;
}
</style>
