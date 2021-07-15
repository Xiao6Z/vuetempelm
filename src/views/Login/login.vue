<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">登录</div>
      <div slot="right" @click="signup">注册</div>
    </navbar>
    <van-form>
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true }]"
      />
      <van-field
          v-model="password"
          :type="pwdtype"
          name="密码"
          right-icon="eye-o"
          label="密码"
          placeholder="请输入密码"
          @click-right-icon="clickeye"
          :rules="[{ required: true }]"
      />
      <div style="margin: 16px;" @click="login">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
import request from "@/network/request";
export default {
  name: "login",
  data() {
    return {
      username: 'qweqwe',
      password: '111111',
      pwdtype: 'password'
    }
  },
  methods: {
    login(){
      request({
        url:'/login',
        method:'post',
        data:{
          username:this.username,
          password:this.password
        }
      }).then(res=>{
        console.log(res);
        this.$store.state.token=res.token
        console.log(this.$store.state.token);
        // this.$store.state.token=res.token
        // console.log(this.$store.state.token);
        request({url:'/common/user/getInfo'})
            .then(res=>{
              console.log(res);
              this.$store.state.uId=res.user.userId
              console.log(res.user.userId);
              this.$router.push('/home')
            })
      }).catch(err=>{
        console.log(err);
        this.$toast(err)
        this.$toast.fail('登录失败'+err.msg)
      })
    },
    clickeye() {
      console.log(this.pwdtype);
      console.log('test')
      if (this.pwdtype == 'password') {
        this.pwdtype = 'textarea';
      } else {
        this.pwdtype = 'password'
      }
    },
    signup() {
      this.$router.push('/signup')
    }
  },
  created() {
    this.$toast('请先登录')
  }
}
</script>

<style scoped>

</style>