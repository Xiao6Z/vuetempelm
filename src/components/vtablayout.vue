<template>
  <div>
<!--    <scroll>-->
<!--      <div>-->
        <div
            v-for="(item, index) in list"
            class="vtabitem"
            :class="{ seleted: sub == index }"
            @click="vtabclick(index)"
        >{{ item.name }}
        </div>
<!--      </div>-->
<!--    </scroll>-->

  </div>
</template>

<script>

export default {
  name: "vtablayout",
  props: {
    list: [],
  },
  data() {
    return {
      sub: 0,
    };
  },
  components: {scroll},
  methods: {
    vtabclick(index) {
      this.sub = index;
      this.$emit('vtabclick', this.list[index].id)
      // console.log(this.list[index].id);
    },
  }
};
</script>

<style scoped>

.vtabitem {
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  border-left: 3px solid #f6f6f6;
}

.seleted {
  background: white;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
</style>
