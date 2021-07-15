<template>
  <div class="root">
    <tabbar :bgcolor="'#3d3d3f'" class="tabbar">
      <img src="http://pic.616pic.com/ys_b_img/00/06/21/XozoqlcJQn.jpg">
      <h3 class="botprice">￥{{botprice}}</h3>
      <h3 class="botbtn" @click="topay">去结算</h3>
    </tabbar>

  </div>
</template>

<script>
import Tabbar from "@/components/tabbar/Tabbar";

export default {
  name: "botbar",
  components: {
    Tabbar
  },
  props:{
    botprice:0,
    botsum:0
  },
  methods:{
    topay(){
      let temp=this.$store.state.rows.data.filter(item=>{
        return item.number>0
      })
      this.$store.state.rows.data=temp
      this.$router.push('/confirmorder')
    }
  }
}
</script>

<style scoped>
.root {
  position: relative;
  height: 49px;
}

img {
  padding: 8px;
  width: 44pt;
  height: 44pt;
  position: absolute;
  top: -15px;
  background: orange;
  border-radius: 50%;
  left: 12px;
}

.botbtn {
  color: white;
  flex: 0.4;
  text-align: center;
  background: #4cd964;
  line-height: 49px;
}
.botprice {
  flex: 0.6;
  padding-left: 60pt;
  line-height: 49px;
  color: white;
}


.tabbar{
}
</style>