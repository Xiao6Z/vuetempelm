<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.navbar {
  display: flex;
  position: sticky;
  z-index: 999;
  top: 0;
  background-color: orange;
  color: white;
  height: 44px;
  line-height: 44px;
  width: 100%;
}

.center {
  flex: 1;
  text-align: center;
}

.left, .right {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
