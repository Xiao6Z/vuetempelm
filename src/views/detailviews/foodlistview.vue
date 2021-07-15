<template>
  <listview class="layout">
    <card class="card" v-for="item in rows"
          tag="新品"
          :price="item.price"
          :desc="item.detail"
          :title="item.name"
          :thumb="$store.state.rooturl+item.imgUrl"
          :origin-price="accAdd(item.price,5)"
    >
      <template #tags>
        <van-tag plain type="danger">月销{{ item.saleQuantity }}份</van-tag>
        <van-tag plain type="danger">收藏{{ item.favorRate }}人</van-tag>
      </template>
      <template #footer>
        <stepper v-model="item.number" min="0"
                 :show-input="item.number>0"
                 :show-minus="item.number>0"
                 theme="round" button-size="22" disable-input
                 class="stepper"/>
      </template>
    </card>
    <!--  <img :src="'http://124.93.196.45:10001'+item.imgUrl">
      <div class="right">
        <h5>{{ item.name }}</h5>
        <h6 class="detail">{{ item.detail }}</h6>
        <h6>月销{{ item.saleQuantity }}份 收藏{{ item.favorRate }}人</h6>
        <div class="item2">
          <h5 class="price">￥{{ item.price }}起</h5>
          <stepper v-model="item.number" min="0"
                   :show-input="item.number>0"
                   :show-minus="item.number>0"
                   theme="round" button-size="22" disable-input
                   class="stepper"/>
        </div>
      </div>-->
  </listview>
</template>

<script>
import {accAdd} from '@/network/math';

export default {
  name: "foodlistview",
  props: {
    rows: [],
  },
  computed: {},
  methods: {
    accAdd
    // value(id){
    //   this.$store.state.rows.forEach(item=>{
    //     if (item.id==id){
    //       return item.number
    //     }
    //   })
    //   return 0
    // }
  }
}

</script>

<style scoped>
.card {

}

.item {
  display: flex;
  padding: 3px;
  align-items: center;
}

.right {
  width: 100%;
}

.item img {
  margin: 5px;
  width: 30%;
  height: 25%;
}

.item h6 {
  font-size: 1px;
}


.item2 {
  padding-right: 8px;
  margin-top: 10px;
  display: flex;
  flex: 1;
  align-items: center;
}

.stepper {
  flex: 1;
  justify-content: flex-end;
  display: flex;
}

</style>