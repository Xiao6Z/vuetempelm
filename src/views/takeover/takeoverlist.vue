<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">收货地址</div>
    </navbar>
    <addresslist @add="add"
                 @select="select"
                 @edit="edit"
                 :list="rows"
                 v-model="checkid"
                 default-tag-text="默认"
    />
  </div>

</template>

<script>
import navbar from "@/components/navbar/navbar";
import request from "@/network/request";

export default {
  name: "takeoverlist",
  components: {
    navbar
  },
  data() {
    return {
      rows: [],
      checkid: 0
    }
  },
  methods: {
    add() {
      this.$router.push('/takeover/add')
    },
    select(item, index) {
      console.log(item);
      // this.checkid=item.id
      this.rows.forEach(item => {
        item.isDefault = false
      })
      this.rows[index].isDefault = true
    },
    edit(item, index) {
      this.$router.push('takeover/' + item.id + '/edit')
    }
  },
  created() {
    request({url: '/takeout/address/list'}).then(res => {
      console.log(res);
      res.data.forEach((item, index) => {
        this.rows.push({
          id: item.id,
          name: item.name,
          tel: item.phone,
          address: item.addressDetail,
          isDefault: index === 0
        })
      })
      this.rows.forEach(item => {
        if (item.isDefault) {
          this.checkid = item.id
        }
      })
    })
  }
}
</script>

<style scoped>

</style>