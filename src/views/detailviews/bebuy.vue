<template>
  <div class="root">
    <vtablayout :list="leftrows" @vtabclick="vtabclick" class="vtablayout"/>
    <foodlistview :rows="temprows" class="listlayout"/>
    <botbar :botprice="allprice" :botsum="allsum"/>
  </div>

</template>

<script>
import vtablayout from "@/components/vtablayout";
import request from "@/network/request";
import foodlistview from "@/views/detailviews/foodlistview";
import botbar from "@/views/detailviews/botbar";
import {accMul,accAdd} from "@/network/math";

export default {
  name: "bebuy",
  components: {
    vtablayout,
    foodlistview,
    botbar
  },
  data() {
    return {
      leftrows: [],
      rows: this.$store.state.rows.data,
      temprows: []
    }
  },
  computed:{
    allprice(){
      let sum=0
      this.rows.forEach(item=>{
        sum=accAdd(accMul(item.price,item.number),sum)
      })
      return sum
    },
    allsum(){
      let sum=0
      this.rows.forEach(item=>{
        sum+=item.number
      })
      return sum
    }
  },
  created() {
    request({url: '/takeout/category/list?&sellerId=' + this.$route.params.id}).then(res => {
      this.leftrows = res.data
      this.vtabclick(this.leftrows[0].id)
    })
  },
  methods: {
    vtabclick(id) {
      request({url: '/takeout/product/list?&sellerId=' + this.$route.params.id + '&categoryId=' + id}).then(res => {
        this.temprows = []
        res.data.forEach(item => {
          let cai = null
          this.rows.forEach(temp => {
            if (item.id == temp.id) {
              cai = temp
            }
          })
          if (cai == null) {
            item.number = 0
            cai = item
            this.rows.push(cai)
          }
          this.temprows.push(cai)
        })
      });
    }
  }
}
</script>

<style scoped>
.root {
  display: flex;
}

.vtablayout {
  background: #f6f6f6;
  width: 25%;
  height: calc(100vh - 18vh - 44px  - 40px - 49px);
}

.listlayout {
  width: 75%;
  height: calc(100vh - 18vh - 44px - 40px - 49px);
  overflow: scroll;
}
</style>