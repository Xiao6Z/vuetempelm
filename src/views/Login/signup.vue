<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">注册账号</div>
    </navbar>
    <!-- 输入昵称 -->
    <van-field v-model="nikename" label="昵称" placeholder="请输入昵称"
               maxlength="11" :required="true" :rules="[{ required: true }]"/>
    <!-- 输入账号 -->
    <van-field v-model="accountnumber" label="账号" placeholder="请输入账号"
               maxlength="11" :required="true" :rules="[{ required: true }]"/>
    <!-- 输入密码 -->
    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"
               maxlength="11" :required="true" :rules="[{ required: true }]"/>
    <van-field name="radio" label="性别">
      <template #input>
        <van-radio-group v-model="sex" direction="horizontal">
          <van-radio name="男">男</van-radio>
          <van-radio name="女">女</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <!--手机号-->
    <van-field v-model="phone" maxlength="11" type="tel" label="手机号" placeholder="请输入手机号"/>
    <div style="margin: 16px;" @click="signup">
      <van-button round block type="info" native-type="submit">注册</van-button>
    </div>
  </div>
</template>

<script>
import request from "@/network/request";
export default {
  name: "signup",
  data() {
    return {
      accountnumber: '',
      nikename: '',
      // email: '',
      phone: '',
      // cardid: '',
      sex: '男',
      password: ''
    }
  },
  methods:{
    signup(){
      request({
        url:'/register',
        method:'post',
        data:{
          userName: this.accountnumber,
          nickName:this.nickName,
          sex:this.sex=='男'?'0':'1',
          password:this.password,
          phonenumber:this.password
        }
      }).then(res=>{
        console.log(res);
        this.$toast.success('注册成功')
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style scoped>

</style>