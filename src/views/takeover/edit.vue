<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">修改地址</div>
    </navbar>
    <addressedit
        :area-list="areaList"
        show-delete
        :address-info="json"
        @delete="todelete"
        @save="save"/>
  </div>
</template>

<script>
import request from "@/network/request";
import {areaList} from '@vant/area-data';

export default {
  name: "edit",
  data() {
    return {
      json: {},
      areaList
    }
  },
  methods: {
    save(content) {
      request({
        url: '/takeout/address',
        method: 'put',
        data: {
          addressDetail: content.addressDetail,
          userId: this.$store.state.uId,
          id: content.id,
          name: content.name,
          phone: content.tel
        }
      }).then(res => {
        this.$toast.success('操作成功')
        this.$router.go(-1)
      });
    },
    todelete(content) {
      console.log(content);
      request({url: '/takeout/address/' + content.id, method: 'delete'}).then(res => {
        this.$toast.success('删除成功')
        this.$router.go(-1)
      })
    }
  }, created() {
    request({url: '/takeout/address/' + this.$route.params.id}).then(res => {
      let temp = res.data
      console.log(temp);
      this.json = {
        name: temp.name,
        id: temp.id,
        tel: temp.phone,
        addressDetail: temp.addressDetail,
        isDefault: false
      }
    })
  }
}
</script>

<style scoped>

</style>