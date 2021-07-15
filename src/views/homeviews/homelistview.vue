<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" @change="test" title="排序方式"/>
<!--      <van-dropdown-item v-model="value2" :options="option2" title="筛选"/>-->
    </van-dropdown-menu>
    <listview>
      <card v-for="item in rows"
            @click="$router.push('detail/' + item.id)"
            :thumb="$store.state.rooturl+item.imgUrl"
      >
        <div slot="title" class="title">
          <van-tag type="primary" size="medium"
                   color="#ffd930" text-color="#000000">品牌
          </van-tag>
          {{ item.name }}
        </div>
        <div slot="desc" class="hdesc">
          <van-rate v-model="item.score" readonly
                    color="#ffd21e" size="10" gutter="1px"/>
          <span :style="{color:'#ffd21e' ,marginLeft:'5px'}">{{ item.score }}</span>
          <span class="distance">人均消费 </span>
          <span class="av">￥{{ item.avgCost }}</span>
        </div>
        <div slot="desc" class="hdesc">
          <span>{{ item.deliveryTime + '分钟 ' + item.distance }}m</span>
          <span class="distance">月售{{ item.saleQuantity }}</span>
        </div>
        <div slot="desc" class="btn hdesc">
          <van-tag type="primary">蜂鸟专送</van-tag>
          <van-tag plain type="primary" :style="{marginLeft:'3px'}">准时达</van-tag>
        </div>
      </card>
    </listview>
  </div>

</template>

<script>

export default {
  name: "homelistview",
  props: {
    rows: [],
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        {text: '距离最近', value: 0},
        {text: '销量最高', value: 1},
      ],
      option2: [
        {text: '人均 40以下', value: 'a'},
        {text: '评分4.9以上', value: 'b'},
      ],
    };
  },
  methods: {
    test(value) {
      let temp
      if (value == 0) {
        temp = (a, b) => {
          return a.distance - b.distance
        }
      } else {
        temp = (a, b) => {
          return b.saleQuantity - a.saleQuantity
        }
      }
      this.rows.sort(temp)
    }
  },
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
