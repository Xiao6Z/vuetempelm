<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">{{$route.query.name}}</div>
    </navbar>
    <homelistview :rows="rows"/>

  </div>

</template>

<script>
import Homelistview from "@/views/homeviews/homelistview";
import request from "@/network/request";
export default {
  name: "themelist",
  components: {Homelistview},
  data(){
    return{
      rows:[]
    }
  },
  created() {
    request({url:'/takeout/seller/list?'+this.$route.query.params}).then(res=>{
      console.log(res);
      this.rows=res.rows
    })
  }
}
</script>

<style scoped>

</style>