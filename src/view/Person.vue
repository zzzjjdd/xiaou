<template>
  <div class="person">
    <div class="top">
      <div class="toux">
        <div class="img">
          <img
            src="../assets/images/person/aead524dcc77eaace8516aba2dbd7d7.png"
            alt=""
          />
        </div>
        <div class="phone">
          <p>18237351315</p>
          <div class="jies"><p>完善资料让小U更懂你</p></div>
        </div>
        <div class="qiandao">
          <img src="../assets/images/person/red_envelopes.png" alt="" />
          <span>每日签到</span>
        </div>
      </div>
      <div class="lie">
        <ul>
          <li>
            <p>12</p>
            <p>我的收藏</p>
          </li>
          <li>
            <p>12</p>
            <p>浏览记录</p>
          </li>
          <li>
            <p>&yen; 12</p>
            <p>我的红包</p>
          </li>
          <li>
            <p>12</p>
            <p>优惠券</p>
          </li>
        </ul>
      </div>
      <div class="order">
        <div class="title">
          <span>我的订单</span>
          <span>全部订单></span>
        </div>
        <div class="fuk">
          <ul>
            <li @click="$router.push('/index/cart')">
              <img src="../assets/images/person/payment.png" alt="" />
              <span>待付款</span>
            </li>
            <li @click="$router.push('/index/cart')">
              <img src="../assets/images/person/delivery.png" alt="" />
              <span>代发货</span>
            </li>
            <li @click="$router.push('/index/cart')">
              <img src="../assets/images/person/evaluation.png" alt="" />
              <span>待确认</span>
            </li>
            <li @click="$router.push('/index/cart')">
              <img src="../assets/images/person/service.png" alt="" />
              <span>售后/退款</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <ul>
        <li @click="$router.push('/address')">
          <div class="left">
            <img src="../assets/images/person/address.png" alt="" />
            <span>地址管理</span>
          </div>
          <div class="right">&gt;</div>
        </li>
        <li @click="$router.push('/address')">
          <div class="left">
            <img src="../assets/images/person/wallet.png" alt="" />
            <span>我的钱包</span>
          </div>
          <div class="right">剩余200U币&nbsp;&gt;</div>
        </li>
        <li @click="$router.push('/address')">
          <div class="left">
            <img src="../assets/images/person/QR_code.png" alt="" />
            <span>我的二维码</span>
          </div>
          <div class="right">&gt;</div>
        </li>
        <li @click="$router.push('/address')">
          <div class="left">
            <img src="../assets/images/person/partner.png" alt="" />
            <span>我的小伙伴</span>
          </div>
          <div class="right">&gt;</div>
        </li>
        <li @click="$router.push('/address')">
          <div class="left">
            <img src="../assets/images/person/free.png" alt="" />
            <span>0元试用</span>
          </div>
          <div class="right">&gt;</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = this.$route.meta.title;
  },
};
</script>

<style lang="less" scoped>
.person {
  .top {
    position: relative;
    width: 100%;
    height: 3.4rem;
    background: linear-gradient(#ff6040, #ff867e);
    .toux {
      position: relative;
      display: flex;
      width: 100%;
      //   height: 1.6rem;
      padding: 0.06rem 0;
      //   background-color: khaki;
      .img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
      .phone {
        //   width: 4rem;
        padding: 0 0.4rem;
        height: 100%;
        font-size: 0.31rem;
        color: #fff;
        .jies {
          margin-top: 0.04rem;
          padding: 0.01rem 0.05rem;
          width: 2rem;

          //   height: .9rem;
          font-size: 0.24rem;
          text-align: center;
          border: 1px solid #fff;
        }
      }
      .qiandao {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 1.7rem;
        height: 0.5rem;
        border-radius: 0.3rem 0 0 0.3rem;
        background-color: #ffd5cb;
        padding: 0.1rem 0 0 0.27rem;
        span {
          font-size: 0.22rem;
          color: #e4735f;
        }
      }
    }
    .lie {
      width: 100%;
      margin-top: 0.2rem;
      //   height: 1.5rem;
      padding: 0.08rem 0;
      ul {
        display: flex;

        li {
          flex: 1;
          font-size: 0.26rem;
          text-align: center;
          color: #fff;
          p:first-child {
            font-size: 0.35rem;
          }
        }
      }
    }
    .order {
      position: absolute;
      top: 2.6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 92%;
      height: 2rem;
      background-color: #fff;
      padding: 0.1rem 0.3rem 0;
      border-radius: 0.15rem;
      //   box-shadow: 0rem 0rem 0.1rem -0.03rem rgb(0 0 0 0.5);
      .title {
        width: 100%;
        overflow: hidden;
        span {
          float: left;
          font-size: 0.28rem;
          font-weight: 900;
        }
        span:last-child {
          padding-top: 0.08rem;
          float: right;
          color: #ff603f;
          font-weight: 400;
          font-size: 0.24rem;
        }
      }
      .fuk {
        width: 100%;
        margin-top: 0.2rem;
        ul {
          justify-content: center;
          display: flex;
          li {
            flex: 1;
            display: flex;
            flex-direction: column;
            font-size: 0.24rem;
            align-items: center;
            img {
              width: 0.6rem;
              height: 0.6rem;
            }
          }
        }
      }
    }
  }
  .main {
    margin-top: 1.5rem;
    width: 100%;
    height: auto;
    ul {
      width: 100%;
      background-color: #fff;
      li {
        width: 100%;
        display: flex;
        padding: 0.25rem 0.32rem;
        justify-content: space-between;
        font-size: 0.25rem;
        .left {
        //   font-weight: 900;

          span {
              display: inline-block;
            margin-left: 0.2rem;
            margin-top: -0.02rem;
          }
        }
      }
    }
  }
}
</style>