<template>
  <div>
    <div class="search">
      <transition name="slide-fade">
        <navbar v-if="scrollTop<100">
          <icon slot="left" name="shopping-cart" size="30px"/>
          <div slot="center" class="center" @click="localclick">
            <icon name="location"/>
            <span>{{ $store.state.address }}</span>
          </div>
        </navbar>
      </transition>
      <van-search
          v-model="searchvalue"
          shape="round"
          background="orange"
          placeholder="请输入搜索关键词"
          @search="tosearch"
      />
    </div>
    <div class="content" ref="content">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index" @click="$router.push('detail/' + item.targetId)">
          <vimg :src="$store.state.rooturl+item.advImg"/>
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="recommends.length">
        <van-grid-item v-for="(item,index) in recommends" :key="index"
                       :icon="$store.state.rooturl+item.imgUrl"
                       :text="item.themeName" @click="themeclick(item)"/>
      </van-grid>

      <listview :rows="datalist" :style="{marginBottom:'49px'}"/>
    </div>

  </div>
</template>
<script>
import navbar from "../components/navbar/navbar.vue";
import request from "../network/request";
import listview from "./homeviews/homelistview.vue";
import uptopbtn from "../components/uptopbtn.vue";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      datalist: [],
      isbottom: false,
      searchvalue: '尊宝',
      scrollTop: 0,

    };
  },
  components: {
    navbar,
    listview,
    uptopbtn,
  },
  created() {
    if (this.$store.state.token.length == 0) {
      this.$toast('请先登录')
      this.$router.replace('login')
    }
    request({url: "/takeout/rotation/list"}).then((res) => {
      this.banners = res.rows;
      // console.log(res.rows);
    })
    request({url: "/takeout/theme/list"}).then((res) => {
      // console.log(res);
      this.recommends = res.data;
    })
    request({url: '/takeout/seller/list'}).then((res) => {
      // console.log(res);
      this.datalist = res.rows.sort((a, b) => {
        return a.distance - b.distance
      });
    });
  }
  ,
  methods: {
    tosearch(string){
      this.$router.push({
        path: '/themelist',
        query: {
          name: '搜索结果',
          params:'name='+string
        }
      })
    },
    themeclick(item){
      this.$router.push({
        path: '/themelist',
        query: {
          name: item.themeName,
          params:'themeId='+item.id
        }
      })
    },
    localclick() {
      this.$router.push('/choosecity')
    },
    monitor(event) {
      console.log('标签容器中的内容正在滑动');
      var lab = event.target;
      if (lab.scrollTop + lab.clientHeight >= lab.scrollHeight) {
        console.log('已到底');
      }
    }
    ,
    windowScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scrollTop) // 获取到页面滚动的值
    }
    ,

  }
  ,
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  }
  ,
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  }

}
;
</script>

<style scoped>
.search {
  position: sticky;
  top: 0;
  z-index: 999;
}

.content {
  top: 44px;
  overflow: hidden;
}

.center {
  display: flex;
  align-items: center;
  font-size: 15px;
}

/*.slide-fade-enter-active {*/
/*  transition: all .3s ease;*/
/*}*/
/*.slide-fade-leave-active {*/
/*  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
/*}*/
/*.slide-fade-enter, .slide-fade-leave-to*/
/*  !* .slide-fade-leave-active for below version 2.1.8 *! {*/
/*  transform: translateX(10px);*/
/*  opacity: 0;*/
/*}*/
</style>
