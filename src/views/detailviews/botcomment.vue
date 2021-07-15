<template>
  <div class="root">
    <van-empty description="暂无评论" v-if="rows.length==0"/>
    <van-cell v-for="item in rows"  icon="https://b.yzcdn.cn/vant/icon-demo-1126.png" class="test"
              :title="item.userName" :value="item.commentDate" size="large" :label="item.content" />
  </div>
</template>

<script>
import request from "@/network/request";
export default {
  name: "botcomment",
  data(){
    return{
      rows:[]
    }
  },
  created() {
    request({url:'/takeout/comment/list?sellerId='+this.$store.state.rows.sellerId}).then(res=>{
      this.rows=res.rows
      console.log(this.rows.length);
      console.log(this.rows);
    })
  }

}
</script>

<style scoped>
.root{
  height: calc(100vh - 18vh - 44px - 40px);
  overflow: scroll;

}
.van-empty{
  text-align: center;
}
</style>