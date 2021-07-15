<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">新增地址</div>
    </navbar>
    <addressedit
        :area-list="areaList"
        @save="save"/>
  </div>
</template>

<script>
import {areaList} from '@vant/area-data';
import request from "@/network/request";

export default {
  name: "add.vue",
  methods: {
    save(content) {
      let data = {
        addressDetail: content.province + content.city + content.county + content.addressDetail,
        userId: this.$store.state.uId,
        name: content.name,
        phone: content.tel
      }
      console.log(data);
      request({
        url: '/takeout/address',
        method: 'post',
        data: data
      }).then(res => {
        console.log(res);
        this.$toast.success('添加成功');
        this.$router.go(-1)
      })
    }
  },
  data() {
    return {
      areaList
    }
  }
}
</script>

<style scoped>

</style>