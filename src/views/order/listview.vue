<template>
  <listview class="listview">
    <div v-for="item in rows" class="item" :key="item.orderInfo.orderNo">
      <div class="title" @click="$router.push('detail/' + item.sellerInfo.id)">
        <vimg class="vimg" radius="5" fit="cover"
              :src="$store.state.rooturl+item.sellerInfo.imgUrl"/>
        <span>{{ item.sellerInfo.name }}</span>
        <van-icon name="arrow" size="10" style="margin-left: 5px" color="#969799"/>
        <span class="status">{{ item.orderInfo.status }}</span>
      </div>
      <div class="content">
        <div class="left">
          <vimg v-for="data in item.orderInfo.orderItemList" class="dataimg"
                fit="cover"
                radius="5" :src="$store.state.rooturl+data.productImage"/>
        </div>
        <div class="right">
          <span>￥{{ item.orderInfo.amount }}</span>
          <span>共{{ item.orderInfo.orderItemList.length }}件</span>
        </div>
      </div>
      <div class="bot">
        <van-button plain type="info" size="mini" round v-if="item.orderInfo.status=='待支付'"
                    @click="$emit('pay',item)">去支付
        </van-button>
        <van-button plain type="info" size="mini" round color="#07c160"
                    v-else-if="item.orderInfo.status=='待评价'"
                    @click="$emit('comment',item)">立即评价
        </van-button>
<!--        <van-button plain type="info" size="mini" round color="#07c160"-->
<!--                    v-else-if="item.orderInfo.status=='完成'"-->
<!--                    @click="">再来一单-->
<!--        </van-button>-->
      </div>
    </div>

  </listview>
</template>

<script>
import request from "@/network/request";

export default {
  name: "orderlist",
  props: {
    rows: [],
    ok:false
  },
  data() {
    return {
      loading: true,
    }
  },
  methods: {
  },
}
</script>

<style scoped>

.listview {
  background: #f6f6f6;
  margin-bottom: 49px;
}

.vimg {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  flex: none;
}

.right {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  justify-content: center;
}

.right span:nth-child(2) {
  font-size: 10px;
  color: gray;
}

.content {
  display: flex;
  position: relative;
  align-items: center;
}


.dataimg {
  width: 50px;
  height: 50px;
  margin-right: 5px;
}

.item {
  padding: 12px;
  margin: 5px 12px 5px 12px;
  background: white;
  border-radius: 10px;
}

.title {
  margin-bottom: 12px;
  align-items: center;
  display: flex;
  position: relative;
}

.status {
  position: absolute;
  right: 0;
  color: #969799;
  font-size: 13px;
}

.bot {
  display: flex;
  justify-content: flex-end;
}
</style>