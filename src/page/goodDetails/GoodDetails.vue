<template>
  <div>
    <v-top></v-top>
    <div class="backs">
      <span @click="$router.go(-1)"></span>
    </div>
    <v-toptitle ref="changeTitle"></v-toptitle>
    <div class="details" v-for="item in detail" :key="item.id">
      <div class="img">
        <img :src="$pregImg + item.img" alt="" />
      </div>
      <div class="wenzi">
        <div class="one">
          <span
            ><i>￥{{ item.price }}</i
            ><i>￥{{ item.market_price }}</i></span
          ><span icon="star">收藏</span>
        </div>
        <div class="two">
          <p>{{ item.goodsname }}</p>
          <p>敏感肌可用，控油祛痘，男女可用</p>
        </div>
        <div class="three"><span>11.11限时299</span></div>
        <div class="four">
          <p>此商品与2020-11-11结束闪购特卖，品牌美妆闪购专场</p>
          <p>查看&nbsp;></p>
        </div>
        <div class="five">领取优惠券</div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="cart" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="toCart"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
import { mapGetters } from "vuex";
import { cartadd, getgoodsinfo } from "../../request/api";
export default {
  data() {
    return {
      detail: {},
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    cart() {
      this.$router.push("/index/cart/:id");
    },
    toCart() {
      let data = {
        uid: this.user.uid,
        goodsid: this.$route.query.id,
        num: 1,
      };
      // cartlist({ uid: this.user.uid }).then((res) => {
      //   if (res.list) {
      //     let bool = res.list.some((item) => {
      //       return item.id == this.$route.query.id;
      //     });
      //     if (!bool) {
      //       cartadd(data).then((res) => success(res.msg));
      //     } else {
      //       errorAlert("此商品已经在购物车了，去看看吧");
      //     }

      //     return;
      //   }
        // else {
           cartadd(data).then((res) => Toast.success(res.msg)) ;
        // }
      // });
    },
  },
  mounted() {
    this.$refs.changeTitle.title = this.$route.name;
    getgoodsinfo({ id: this.$route.query.id }).then((res) => {
      this.detail = res.list;
    });
  },
};
</script>

<style lang="less" scoped>
.backs {
  width: 0.2rem;
  height: 0.2rem;
  border: 0.04rem solid #fff;
  border-top: none;
  border-right: none;
  transform: rotate(45deg);
  position: fixed;
  top: 0.8rem;
  left: 0.4rem;
  font-size: 0.5rem;
  z-index: 100;
  span {
    position: absolute;
    top: -0.25rem;
    left: -0.2rem;
    display: inline-block;
    width: 30px;
    height: 30px;
  }
}

.van-goods-action {
  display: flex;
  align-items: center;
  height: 1.4rem;
}
.details {
  font-size: 0.24rem;
  width: 100%;
  overflow: hidden;
  .img {
    width: 100%;
    height: 5.5rem;
    text-align: center;
    margin-top: 0.2rem;
    img {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
  .wenzi {
    padding: 0 0.3rem 0 0.3rem;
    margin-top: 0.4rem;
    .one {
      overflow: hidden;
      margin-bottom: 0.2rem;
      span:first-child {
        float: left;
        i:first-child {
          font-style: normal;
          color: red;
          font-size: 0.4rem;
          vertical-align: baseline;
        }
        i:last-child {
          margin-left: 0.2rem;
          font-style: normal;
          color: #b9b9b9;
          text-decoration: line-through;
          font-size: 0.3rem;
          vertical-align: baseline;
        }
      }
      span:last-child {
        float: right;
        color: #ff6040;
        margin-right: 0.2rem;
      }
    }
    .two {
      margin-bottom: 0.2rem;
      p:first-child {
        font-size: 0.28rem;
        font-weight: 900;
        margin-bottom: 0.1rem;
      }
      p:last-child {
        color: #b8b8b8;
      }
    }
    .three {
      margin-bottom: 0.3rem;
      span {
        display: block;
        width: 1.6rem;
        height: 0.4rem;
        line-height: 0.4rem;
        color: #fff;
        border-radius: 3px;
        text-align: center;
        background-color: #fc8067;
      }
    }
    .four {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.3rem;
      p:first-child {
        width: 4rem;
        height: 0.6rem;
        flex: 1;
      }
      p:last-child {
        width: 1rem;
        height: 0.6rem;
        text-align: right;
        color: #ff6040;
      }
    }
    .five {
      width: 1.5rem;
      background-color: #ff6040;
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      border-radius: 10px;
      font-size: 0.24rem;
      color: #fff;
    }
  }
}
</style>