<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">{{ seller.name }}</div>
      <div slot="right" v-if="isfav" @click="favclick" class="fav">
        <icon name="star"/>
        <span>已关注</span>
      </div>
      <div slot="right" v-else @click="favclick" class="fav">
        <icon  name="star-o"/>
        <span>关注</span>
      </div>
    </navbar>
    <vimg fit="cover" :src="$store.state.rooturl+seller.imgUrl" class="img"/>
    <tablayout :titles="['点餐','评论']" @tabclick="tabclick"/>
    <router-view/>
  </div>
</template>

<script>
import navbar from "@/components/navbar/navbar";
import request from "@/network/request";
import tablayout from "@/components/tablayout/tablayout";

export default {
  name: "detail",
  data() {
    return {
      seller: {
        name: '店名',
      },
      isfav: false,
      favid: null
    }
  },
  methods: {
    tabclick(index) {
      if (index == 0) {
        this.$router.replace('/detail/' + this.$route.params.id + '/bebuy');
      } else {
        this.$router.replace('/detail/' + this.$route.params.id + '/botcomment');
      }
    },
    upfav() {
      request({
        url: '/takeout/collect/check?sellerId=' + this.$route.params.id
      }).then(res => {
        this.isfav = res.msg.indexOf('未') == -1
        if (this.isfav) {
          this.favid = res.id
        }
        // console.log(res);
      })
    },
    favclick() {
      if (this.isfav) {
        request({
          url: '/takeout/collect/' + this.favid,
          method: 'delete'
        }).then(res => {
          this.$toast.success('取消成功')
          this.upfav()
        })
      } else {
        request({
          url: '/takeout/collect',
          method: 'post',
          data: {
            sellerId: this.$route.params.id,
            userId: this.$store.state.uId
          }
        }).then(res => {
          console.log(res);
          this.$toast.success('收藏成功')
          this.upfav()
        })
      }
    }
  },
  components: {
    navbar,
    tablayout
  },
  created() {
    this.$store.state.rows.sellerId=this.$route.params.id
    request({url: '/takeout/seller/' + this.$route.params.id}).then(res => {
      // console.log(res);
      this.seller = res.data
    })
    this.upfav()
  },
}
</script>

<style scoped>
.img {
  height: 18vh;
  width: 100%;
}

.fav {
  display: flex;
  align-items: center;
  font-size: 14px;
}

</style>