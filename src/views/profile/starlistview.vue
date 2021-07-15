<template>
  <listview >
    <card v-for="item in data"
          @click="$router.push('detail/' + item.sellerId)"
          :thumb="$store.state.rooturl+item.imgUrl"
    >
      <div slot="title" class="title">
        <van-tag type="primary" size="medium"
                 color="#ffd930" text-color="#000000">品牌
        </van-tag>
        {{ item.sellerName }}
      </div>
      <div slot="desc" class="hdesc">
        <van-rate v-model="item.score" readonly
                  color="#ffd21e" size="10" gutter="1px"/>
        <span :style="{color:'#ffd21e' ,marginLeft:'5px'}">{{ item.score }}</span>
<!--        <span class="distance">人均消费 </span>-->
<!--        <span class="av">￥{{ item.avgCost }}</span>-->
      </div>
      <div slot="desc" class="hdesc">
<!--        <span>{{ item.deliveryTime + '分钟 ' + item.distance }}m</span>-->
        <span class="distance">月售{{ item.saleQuantity }}</span>
      </div>
      <div slot="desc" class="btn hdesc">
        <van-tag type="primary">蜂鸟专送</van-tag>
        <van-tag plain type="primary" :style="{marginLeft:'3px'}">准时达</van-tag>
      </div>
    </card>
  </listview>
</template>

<script>

export default {
  name: "homelistview",
  props: {
    data: [],
  },
  data() {
    return {
    };
  },
  components: {},
};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
}

.title > .van-tag {
  margin-right: 5px;
}

.hdesc {
  display: flex;
  margin-top: 5px;
}

.av {
  color: red;
  text-align: right;
}

.distance {
  color: #666666;
  flex: 1;
  text-align: right;
}

</style>
