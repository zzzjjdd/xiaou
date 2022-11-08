<template>
  <div class="pay">
    <v-top></v-top>
    <v-back class="back"></v-back>
    <v-toptitle ref="changeTitle"></v-toptitle>

    <div class="dingdan">
      <p>订单号：{{$route.query.orderCode}}</p>
      <p><span>&yen;</span><span>{{$route.query.countmoney}}</span></p>
    </div>
    <div class="fangshi">
      <p>请选择支付方式</p>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="支付宝支付" clickable @click="radio = '1'">
            <template #right-icon>
              <van-radio name="1" />
            </template>
          </van-cell>
          <van-cell title="微信支付" clickable @click="radio = '2'">
            <template #right-icon>
              <van-radio name="2" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="btn">
      <button @click="toPay">确认支付</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  data() {
    return {
      radio: "1",
    };
  },
  methods: {
      toPay() {
         
Toast.fail('网络中断')
      }
  },
  mounted() {
    document.title = this.$route.name;
    this.$refs.changeTitle.title = this.$route.name;
  },
};
</script>

<style lang="less" scoped>
.back {
  z-index: 1000;
}
.pay {
  background-color: #fff;
  .dingdan {
    margin-top: 0.6rem;

    p {
      font-size: 0.32rem;
      text-align: center;
      color: #666;
    }
    p:last-child {
      margin-top: 0.4rem;
      font-size: 0.6rem;
      color: #000;
    }
  }
  .fangshi {
    padding: 0 0.4rem;
    font-size: 0.3rem;
    margin-top: 0.6rem;
    .van-cell-group {
      margin-top: 0.25rem;
    }
    .van-cell {
      margin-top: 0.1rem;
    }
  }
  .btn {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    margin-top: 4rem;
    button {
      font-size: 0.28rem;

      width: 90%;
      height: 100%;
      color: #fff;
      border-radius: .4rem;
      background-color: #1cbbf0;
    }
  }
}
</style>