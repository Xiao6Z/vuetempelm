<template>
  <div>
    <navbar>
      <icon slot="left" name="arrow-left" @click="$router.go(-1)"/>
      <div slot="center">确认订单</div>
    </navbar>
    <cellgroup>
      <van-cell center size="large" @click="showcity=true">
        <div slot="title" :style="{fontWeight: 'bold'}">{{ city.addressDetail }}</div>
        <div slot="label">{{ city.name + '  ' + city.phone }}</div>
        <van-icon slot="default" name="arrow"/>
      </van-cell>
      <cell title="立即送出" :value="'大约'+time+'送到'" is-link @click="showtimepicke=true"/>
      <cell title="支付方式" :value="paytype[paytypeflag]" is-link @click="showpaytype=true"/>
    </cellgroup>
    <listview style="margin-bottom: 85px">
      <card v-for="item in rows"
            :num="item.number"
            :price="item.price"
            :desc="item.detail"
            :title="item.name"
            :thumb="$store.state.rooturl+item.imgUrl"
      />
    </listview>
    <submitbar
        :price="botprice"
        button-text="提交订单"
        @submit="tosubmit"
        tip="本单无配送费"/>
    <popup v-model="showpaytype" round position="bottom"
           :style="{ height: '30%',paddingTop:'50px'}" closeable>
      <vradiogroup v-model="paytypeflag">
        <cellgroup>
          <cell v-for="(item,index) in paytype" :title="item" clickable @click="paytypeflag=index">
            <vradio slot="right-icon" :name="index"/>
          </cell>
        </cellgroup>
      </vradiogroup>
    </popup>
    <van-dialog v-model="showtimepicke" :showConfirmButton="false">
      <timepicker v-model="time" type="time"
                  title="选择时间" :min-hour="10"
                  :max-hour="20"
                  @confirm="showtimepicke=false"
      />
    </van-dialog>
    <van-dialog v-model="showcity" title="选择收货地址" show-cancel-button>
      <listview>
        <van-cell center size="large" v-for="item in addresslist" @click="city=item,showcity=false">
          <div slot="title" :style="{fontWeight: 'bold'}">{{ item.name }}</div>
          <div slot="label">{{ item.addressDetail }}</div>
          <van-icon slot="default" name="edit" @click="$router.push('takeover/' + item.id + '/edit')"/>
        </van-cell>
      </listview>
    </van-dialog>
  </div>
</template>

<script>
import {accAdd, accMul} from "@/network/math";
import request from "@/network/request";

export default {
  name: "confirmorder",
  methods: {
    tosubmit() {
      if (this.city.name == '请选择收货地址') {
        this.$toast.fail('请选择收货地址!')
        return
      }
      let json = []
      this.rows.forEach(item => {
        json.push({
          productId: item.id,
          quantity: item.number,
          productPrice: accMul(item.price, item.number),
          totalPrice: item.price
        })
      })
      let postdata = {
        addressDetail: this.city.addressDetail,
        amount: this.quaprice,
        houseNumber: '房间号测试',
        name: this.city.name,
        phone: this.city.phone,
        userId: this.$store.state.uId,
        sellerId: this.$store.state.rows.sellerId,
        postage: 0,
        orderItemList: json
      }
      console.log(postdata);
      request({
        url: '/takeout/order/create',
        method: 'post',
        data: postdata
      }).then(res => {
        this.$router.push('/orderlist')
        this.$toast('请立即支付')
        console.log(res);
      })
    }
  },
  created() {
    request({url: '/takeout/address/list'}).then(res => {
      console.log(res);
      this.addresslist = res.data
    })
  },
  data() {
    return {
      paytype: ['微信支付', '支付宝', '电子钱包'],
      showcity: false,
      rows: this.$store.state.rows.data,
      showpaytype: false,
      paytypeflag: 1,
      showtimepicke: false,
      time: '12:00',
      addresslist: [],
      city: {
        name: '请选择收货地址',
        addressDetail: '',
        phone: '',
      }
    }
  },
  computed: {
    botprice() {
      return accMul(this.quaprice, 100)
    },
    quaprice() {
      let sum = 0
      this.rows.forEach(item => {
        sum = accAdd(accMul(item.price, item.number), sum)
      })
      return sum
    }
  },
}
</script>

<style scoped>

</style>