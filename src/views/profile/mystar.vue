<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">我的收藏</div>
    </navbar>
    <starlistview :data="rows"/>

  </div>
</template>

<script>
import request from "@/network/request";
import starlistview from "@/views/profile/starlistview";
export default {
  name: "mystar",
  components:{
    starlistview
  },
  data() {
    return {
      rows: []
    }
  },
  created() {
    request({url: '/takeout/collect/list'}).then(res => [
      this.rows = res.rows

    ])
  },
}
</script>

<style scoped>

</style>