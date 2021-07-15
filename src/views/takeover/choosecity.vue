<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">选择城市</div>
    </navbar>
    <div>
      <van-index-bar :sticky-offset-top="44">
        <div v-for="item in list">
          <van-index-anchor :index="item.title"/>
          <van-cell v-for="city in item.lists" :title="city" @click="nameclick(city)"/>
        </div>
      </van-index-bar>
    </div>

  </div>
</template>

<script>
import rows from '../../assets/cityjson'

export default {
  name: "choosecity",
  data() {
    return {
      list:rows.data
    }
  },
  methods: {
    nameclick(name){
      this.$store.state.address=name
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>

</style>