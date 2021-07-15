<template>
  <div>
    <navbar>
      <div slot="center">我的</div>
    </navbar>
    <van-cell center  size="large" class="user"  @click="$router.push('/login')">
      <van-icon slot="icon" size="50" style="margin-right: 10px"
                name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      <div slot="title" :style="{fontWeight: 'bold',color:'white'}">{{user.userName}}</div>
      <div slot="label" style="color: white">{{user.phonenumber}}</div>
      <van-icon slot="default" name="arrow" color="white"/>
    </van-cell>
    <cellgroup>
      <cell icon="location-o" title="我的地址" is-link url="/takeover"/>
      <cell icon="star-o" title="我的收藏" is-link url="/mystar"/>
    </cellgroup>
  </div>
</template>

<script>
import navbar from "@/components/navbar/navbar";
import request from "@/network/request";
export default {
  name: "profile",
  data() {
    return {
      user:{
        userName:'登录/注册',
        phonenumber:''
      }
    }
  },
  components: {
    navbar
  },
  methods:{
  },
  created() {
    request({url:'/common/user/getInfo'}).then(res=>{
      this.user=res.user
    })
  }
}
</script>

<style scoped>
.user{
  background: orange;
}
</style>