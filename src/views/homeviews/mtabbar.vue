<template>
  <tabbar v-if="show">
    <tabitem path="/home">
      <img slot="icon" src="../../assets/img/home.svg" />
      <img slot="iconseleted" src="../../assets/img/home_active.svg" />
      <div slot="text">首页</div>
    </tabitem>
    <tabitem path="/orderlist">
      <img slot="icon" src="../../assets/img/category.svg" />
      <img slot="iconseleted" src="../../assets/img/category_active.svg" />
      <div slot="text">订单</div>
    </tabitem>
    <tabitem path="/profile">
      <img slot="icon" src="../../assets/img/profile.svg" />
      <img slot="iconseleted" src="../../assets/img/profile_active.svg" />
      <div slot="text">我的</div>
    </tabitem>
  </tabbar>
</template>

<script>
import Tabbar from "../../components/tabbar/Tabbar.vue";
import Tabitem from "../../components/tabbar/Tabitem";
export default {
  name: "mtabbar",
  data() {
    return {
      show:true,
    };
  },
  components: {
    Tabbar,
    Tabitem,
  },
  watch:{
    '$route' (to,from) {
      if (to.path.indexOf('/home')!=-1||
          to.path.indexOf('/orderlist')!=-1||
          to.path.indexOf('/profile')!=-1
      ) {
        this.show=true
      }
      else{
        this.show=false
      }
      // if (to.query.id !== from.query.id) {
      //   this.id = this.$route.query.id
      //   this.name = this.$route.query.name
      // }
    }
  },
};
</script>

<style scoped></style>
