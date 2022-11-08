<template>
  <div class="reoreder">
    <v-top></v-top>
    <v-back class="back"></v-back>
    <v-toptitle ref="changeTitle"></v-toptitle>
    <div class="retop">
      <div class="fixed">
        <div class="address" v-if="(address == null)">
          <span @click="addressq">+点击完善收货地址</span>
        </div>
        <div class="address1" v-else  >
          <p>姓名：{{ address.username }}</p>
          <p>手机号：{{ address.userphone }}</p>
          <p>收货地址：{{ address.location }}</p>
          <div @click="$router.push('/address')">J</div>
        </div>
      </div>
    </div>
    <div class="mains">
      <div class="tit">
        <p>
          <img src="../../assets/images/miaosha/selfsupport.png" alt="" />
          <span>品牌精选</span>
        </p>
        <p><span>以免运费&nbsp;|</span><span>领券</span></p>
      </div>

      <div class="details" v-for="item in list" :key="item.id">
        <div class="img">
          <img :src="$pregImg + item.img" alt="" />
        </div>
        <div class="jies">
          <p>{{ item.goodsname }}</p>
          <p>&yen;{{ item.price }}</p>
          <p>七天无理由退货</p>
        </div>
        <div class="shu">x&nbsp;{{ item.num }}</div>
      </div>

      <ul>
        <li>
          <span>发票类型</span>
          <span>不开发票 ></span>
        </li>
        <li>
          <span>售后免邮</span>
          <span>部分商家赠送</span>
        </li>
        <li>
          <span>卖家留言</span>
          <span>填写内容需要与商家协商并确认，45字以内</span>
        </li>
      </ul>
    </div>
    <div class="foot">
      <ul>
        <li>
          <span>商品金额</span><span>&yen;{{ priceAll }}</span>
        </li>
        <li><span>优惠活动</span><span class="tes">-&yen;200</span></li>
        <li><span>优惠券</span><span class="tes2">更多优惠券></span></li>
      </ul>
    </div>
    <div class="tijiao">
      <div>
        <p>
          <span>合计</span><span>&yen;{{ priceAll }}</span>
        </p>
        <p><span>已免运费</span><span>已优惠</span></p>
      </div>
      <div class="btn">
        <button @click="pay">确认订单{{ sum }}件</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { addresslist, orderadd } from "../../request/api";
export default {
  data() {
    return {
      list: [],
      priceAll: "",
      sum: "",
      address: null,
      id: "",
    };
  },
  methods: {
    addressq() {
      this.$router.push("/address");
    },
    pay() {
      let { countmoney, countnumber, idstr } = this.$store.state.queryCart.queryList;
      let params = {
        uid: this.user.uid,
        countmoney,
        countnumber,
        idstr,
        address: this.event.id,
      };
      orderadd(params).then((res) => {
        // console.log(res.list.outTradeNo.split(',')[0]);
        this.$router.push({
          path:'/pay',
          query:{
            orderCode:res.list.outTradeNo.split(',')[0]
            ,
           countmoney 
          }
        })
      }).catch(err=>{console.log(err);})
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  mounted() {
    if(this.event.id == undefined) {
      this.address = null
    }else
     {
        addresslist({
      uid: this.user.uid,
      id: this.event.id,
      status: this.event.moren,
    }).then((res) => {
      this.address = res.list[0];
    });
     }
   
    document.title = this.$route.name;
    this.$refs.changeTitle.title = this.$route.name;

    if (this.$route.query.par.list) {
      let arr = JSON.parse(JSON.stringify(this.$route.query.par));
      localStorage.setItem("copy", JSON.stringify(arr));
    }
    this.priceAll = localStorage.getItem("copy")
      ? JSON.parse(localStorage.getItem("copy")).countmoney
      : "";
    this.list = localStorage.getItem("copy")
      ? JSON.parse(localStorage.getItem("copy")).list
      : [];
    this.sum = localStorage.getItem("copy")
      ? JSON.parse(localStorage.getItem("copy")).countnumber
      : "";
  },
};
</script>

<style lang="less" scoped>
.back {
  z-index: 1000;
}
.reoreder {
  .retop {
    position: relative;
    width: 100%;
    height: 1.2rem;
    background: linear-gradient(#ff6040, #fc8c7f);
    .fixed {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0rem;
      width: 92%;
      height: 1.8rem;
      background-color: #fff;
      border-radius: 0.1rem;
      .address1 {
        position: relative;
        font-size: 14px;
        padding: 5px 5px;
        width: 90%;
        margin: 0 auto;
        text-align: left;
        background-color: #fef6eb;
        margin-top: 0.25rem;
        border: 1px solid #dfc498;
        border-radius: 0.14rem;

        div {
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: red;
          top: 5px;
          right: 10px;
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
        }
      }
      .address {
        margin: 0 auto;
        width: 3.4rem;
        height: 0.7rem;
        line-height: 0.6rem;
        margin-top: 0.5rem;
        background-color: #fef6eb;
        border: 1px solid #dfc498;
        text-align: center;
        color: #f4aa4e;
        font-weight: 900;

        border-radius: 0.14rem;
        span {
          font-size: 0.28rem;
        }
      }
    }
  }
  .mains {
    margin-top: 0.85rem;
    width: 100%;
    height: auto;
    padding-bottom: 0.2rem;
    background-color: #fff;
    .tit {
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
      font-size: 0.3rem;
      font-weight: 900;
      p:first-child {
        img {
          width: 0.4rem;
          height: 0.4rem;
        }
        span {
          margin-left: 0.08rem;
        }
      }
      p:last-child {
        margin-top: 0.08rem;
        span:first-child {
          font-weight: 400;
          font-size: 0.28rem;
        }
        span:last-child {
          font-weight: 400;
          color: #ff6040;
          margin-left: 0.1rem;
          font-size: 0.28rem;
        }
      }
    }
    .details {
      display: flex;
      border-bottom: 1px solid rgb(240, 234, 234);
      .img {
        width: 3rem;
        height: 2.5rem;
        text-align: center;
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      .jies {
        margin-top: 0.34rem;
        font-size: 0.24rem;
        p:first-child {
          font-size: 0.28rem;
        }
        p:nth-child(2) {
          margin-top: 0.24rem;
          font-size: 0.3rem;
          color: #f45d3e;
        }
        p:last-child {
          width: 1.8rem;
          height: 0.4rem;
          color: #fff;
          text-align: center;
          border-radius: 0.1rem;
          background-color: #ff8064;
          margin-top: 0.4rem;
        }
      }
      .shu {
        font-size: 0.35rem;
        margin-top: 1.7rem;
        padding-left: 1rem;
      }
    }
    ul {
      margin-top: 0.12rem;
      li {
        font-size: 0.26rem;
        padding: 0.15rem 0.29rem;
        display: flex;
        justify-content: space-between;
        span:first-child {
          font-weight: 900;
        }
        span:last-child {
          color: #666;
        }
      }
    }
  }
  .foot {
    margin-top: 0.1rem;
    width: 100%;
    height: auto;
    padding-bottom: 0.2rem;
    background-color: #fff;
    ul {
      padding-top: 0.1rem;
      li {
        font-size: 0.26rem;
        font-weight: 900;
        display: flex;
        justify-content: space-between;
        padding: 0.15rem 0.29rem;
        span:last-child {
          font-weight: 400;
        }
        .tes {
          color: #ff603f;
        }
        .tes2 {
          color: #666;
        }
      }
    }
  }
  .tijiao {
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 1rem;
    padding-left: 0.31rem;
    justify-content: space-between;
    background-color: #fff;
    div:first-child {
      font-size: 0.26rem;
      p:first-child {
        span:first-child {
          font-size: 0.28rem;
        }
        span:last-child {
          margin-left: 1rem;
          display: inline-block;
          padding-top: 0.06rem;
          color: #ff603f;
        }
      }
      p:last-child {
        margin-top: 0.12rem;
        font-size: 0.24rem;
        color: #666;
        span:last-child {
          margin-left: 0.7rem;
        }
      }
    }
    div:last-child {
      font-size: 15px;
      color: #fff;
      width: 2rem;
      height: 100%;
      button {
        width: 100%;
        height: 100%;
        background-color: #ff603f;
      }
    }
  }
}
</style>