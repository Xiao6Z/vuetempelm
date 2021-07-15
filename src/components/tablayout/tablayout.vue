<template>
  <div class="tablayout">
    <div
        v-for="(item, index) in titles"
        class="tablayoutitem"
        :class="{ seleted: sub == index }"
        @click="tabclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "tablayout",
  props: {
    titles: [],
  },
  data() {
    return {
      sub: 0,
    };
  },
  components: {},
  methods: {
    tabclick(index) {
      this.sub = index;
      this.$emit('tabclick', index)
    },
  }
};
</script>

<style scoped>
.tablayout {
  display: flex;
  text-align: center;
  border-bottom: 2px solid #eeeeee;
}

.tablayoutitem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.seleted {
  color: var(--color-high-text);
}

.seleted span {
  border-bottom: 3px solid red;
}

.tablayoutitem span {
  padding: 5px;
}
</style>
