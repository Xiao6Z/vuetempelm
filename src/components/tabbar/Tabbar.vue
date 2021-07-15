<template>
  <div class="tabbar" :style="{backgroundColor:bgcolor}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  props:{
    bgcolor: {
      type:String,
      default:'#ffffff'
    }
  },
};
</script>

<style>
.tabbar {
  overflow-y: visible;
  display: flex;
  position: fixed;
  max-height: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
