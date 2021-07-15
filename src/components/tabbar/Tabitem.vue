<template>
  <div class="tabitem" @click="itemclick">
    <div v-if="seleted">
      <slot name="iconseleted"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <div :class="{selecss:seleted}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabitem",
  props: {
    path: String,
  },
  computed: {
    seleted() {
      return this.$route.path == this.path;
    },
  },
  methods: {
    itemclick() {
      if(this.$route.path!==this.path)
        this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tabitem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabitem img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
  vertical-align: middle;
}
.selecss {
  color: red;
}
</style>
