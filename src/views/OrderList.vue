<template>
  <div>
    <div :style="{position: 'sticky',top:0,zIndex:999}">
      <navbar>
        <div slot="center">订单列表</div>
      </navbar>
      <van-tabs v-model="active" @click="updata" line-height="5px"
                line-width="20px" background="#f6f6f6">
        <van-tab v-for="item in status" :title="item"/>
      </van-tabs>
    </div>
    <listview :rows="rows" @pay="pay" @comment="comment"
              :ok="beload"/>

    <van-popup v-if="showpay" v-model="showpay" closeable close-icon-position="top-left"
               class="pop" round>
      <span>{{ json.sellerInfo.name }}</span>
      <span style="font-weight: bold;font-size: 30px">￥{{ json.orderInfo.amount }}</span>
      <van-button type="primary" @click="topay">确认支付</van-button>
    </van-popup>

    <van-popup v-if="showcomment" v-model="showcomment" class="pop2" round>
      <h4 style="font-weight: bold;font-size: 20px">评价订单</h4>
      <van-rate v-model="rate" allow-half/>
      <van-field v-model="content" placeholder="请输入评价"/>
      <div class="botbtn">
        <van-button type="default" @click="showcomment=false">取消</van-button>
        <van-button type="primary" @click="tocomment">评价</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import request from "@/network/request";
import listview from "@/views/order/listview";

export default {
  name: "orderlist",
  components: {
    listview
  },
  data() {
    return {
      beload:false,
      active: 0,
      status: ['全部', '待支付', '待评价', '完成'],
      rows: [],
      pageNum: 1,
      flagact: -1,
      showcomment: false,
      showpay: false,
      json: {},
      rate: 0,
      content: '',
    }
  },
  methods: {
    updata(num) {
      this.active = num
      if (this.flagact != this.active) {
        this.pageNum = 1
      } else {
        this.pageNum++
      }
      request({
            url: '/takeout/order/list?',
            params: {
              pageNum: this.pageNum,
              pageSize: 999,
              status: (this.active == 0 ? '' : this.status[this.active])
            }
          }
      ).then(res => {
        if (this.pageNum == 1) {
          this.rows = res.rows
        } else {
          res.rows.forEach(item => {
            this.rows.push(item)
          })
        }
        this.flagact = this.active
        console.log(this.rows);
        this.beload=true
      })
    },
    pay(item) {
      this.json = item
      this.showpay = true
    },
    comment(item) {
      this.json = item
      this.showcomment = true
    },
    topay() {
      request({
        url: '/takeout/pay',
        method: 'post',
        data: {
          orderNo: this.json.orderInfo.orderNo,
          amount: this.json.orderInfo.amount,
          paymentType: '电子钱包'
        }
      }).then(res => {
        this.$toast.success('支付成功')
        console.log(res);
        this.showpay = false
        this.updata(2)
      })
    },
    tocomment() {
      request({
        url: '/takeout/comment',
        method: 'post',
        data: {
          score: this.rate,
          content: this.content,
          orderNo: this.json.orderInfo.orderNo,
        }
      }).then(res => {
        this.$toast.success('评价成功')
        this.showcomment = false
        this.rate = 0
        this.content = ''
        this.updata(3)
      })
    }
  },
  created() {
    this.updata(this.active)
  }
}
</script>

<style scoped>
.botbtn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.pop {
  padding-top: 30px;
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

.pop2 {
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

</style>