<template>
  <div class="cart">
    <div class="cart-nav">
      <ul>
        <li>全部(20)</li>
        <li>降价(4)</li>
        <li>常买(2)</li>
        <li>分类</li>
      </ul>
      <div class="ziying">小U自营
        <div class="right">
          <span>以免运费 |</span>
          <span>领券</span>
        </div>
      </div>
    </div>
    <div class="cart-body">
      <div class="main" v-for="(item, index) in cartlist" :key="index">
        <input type="checkbox" v-model="item.checked" class="inp" />

        <div class="right">
          <div class="image">
            <img :src="$pregImg + item.img" alt="" />
          </div>
          <div class="zhanshi">
            <p>{{ item.goodsname }}</p>
            <p>规格：不错的商品</p>
            <p>比加入时降低￥100</p>
            <p>
              <span>￥{{ item.price }}</span
              ><span>￥4999</span>
            </p>
          </div>
          <div class="jiajian">
            <i @click="jian(item.id, index)"></i>
            <span ref="nums">{{ item.num }}</span>
            <i @click="jia(item.id, index)">+</i>
          </div>
          <div class="del" @click="del(item.id)">删除</div>
        </div>
      </div>
    </div>

    <div class="pay">
      <input
        type="checkbox"
        v-model="checkedAll"
        @change="checkAll"
        class="inps"
      />
      <div class="heji">
        <p>
          合计：<span>￥{{ toatal }}</span>
        </p>
        <p>不含运费，已优惠</p>
        <p>￥0.00</p>
      </div>
      <div class="btn">
        <button @click="reorder">去结算({{ sum }}件)</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
// import { cartedit, cartlist, cartdelete } from "../request/api";
import { cartlist, cartedit, cartdelete } from "../request/api";
export default {
  data() {
    return {
      cartlist: [],
      checkedAll: false,
      copy: [],
      no: "",
      arr:[]
      // arr: localStorage.getItem("cartlist")
      //   ? JSON.parse(localStorage.getItem("cartlist"))
      //   : [],
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
    toatal() {
      let sum = 0;
      if (this.cartlist) {
        this.cartlist.map((item) => {
          if (item.checked) {
            sum += item.price * item.num;
          }
        });
      }
      return sum;
    },
    sum() {
      let su = 0;
      if (this.cartlist) {
        this.cartlist.map((item) => {
          if (item.checked) {
            su += item.num;
          }
        });
      }
      return su;
    },
  },
  methods: {
    reorder() {
      // let arrs = this.cartlist.map((item) => {
      //   return item.id;
      // });
      // let idstr = arrs.join(',')

      let arr = [];
      let arr2 = [];
      this.cartlist.map((item) => {
        if (item.checked) {
          arr.push(item);
          arr2.push(item.id);
        }
      });
      // console.log(arr2);
      let idstr = arr2.join(",");
      if (arr.length != 0) {
        let par = {
          countmoney: this.toatal,
          countnumber: this.sum,
          list: arr,
          idstr,
        };

        this.$store.commit("setQueryList", par);
        this.$router.push({
          path: "/reorder",
          query: {
            par,
          },
        });
      } else {
        Toast.fail("未选择商品");
      }
    },
    checkAll() {
      if (this.cartlist) {

        this.cartlist.map((item) => {
          item.checked = this.checkedAll;
          this.arr = this.cartlist
          this.cartlist = [...this.arr]
        });
      }
    },
    jian(id, index) {
      let data = {
        id: id,
        type: 1,
      };
      if (this.cartlist[index].num <= 0) {
        cartdelete({ id }).then((res) => {
          Toast.success(res.msg);
          this.getList();
        });
        return false;
      }
      cartedit(data).then(() => {
        this.cartlist[index].num--;
      });
    },
    jia(id, index) {
      let data = {
        id: id,
        type: 2,
      };
      cartedit(data).then(() => {
        this.cartlist[index].num++;
      });
    },

    
    del(id) {
      cartdelete({ id }).then((res) => {
        Toast.success(res.msg);
        this.getList();
      });
    },
    getList() {
      cartlist({ uid: this.user.uid }).then((res) => {
        this.$store.commit("setCartList", res.list);
           setTimeout(() => {
         this.cartlist =this.$store.state.cartList.cartList;
    }, 200);
        // if (res.list !== null) {
        //   this.arr = JSON.parse(JSON.stringify(res.list));
        // this.cartlist.map((item) => {
        //   item.checked = false;
        // });
        //   localStorage.setItem("cartlist", JSON.stringify(this.arr));
        //   return;
        // }
        // this.arr = [];
      });
    },
  },

  mounted() {
    setTimeout(() => {
     this.getList();
    }, 200);
    document.title = this.$route.meta.title;
    
  },
  watch: {
    cartlist: {
      deep: true,
      handler() {
        if (this.cartlist) {
          this.checkedAll = this.cartlist.every((item) => item.checked);
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.inp {
  width: 20px;
  height: 30px;
  margin-top: 50px;
}
.inpq {
  width: 20px;
  height: 30px;
  margin-top: 10px;
}
.inps {
  width: 20px;
  height: 30px;
  margin-top: 20px;
}
.cart {
  width: 100vw;
  height: auto;
  margin-bottom: 2.7rem;
  overflow: hidden;
  // background-color: #f2f3f2;

  .cart-nav {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 0.7rem;
    line-height: 0.7rem;
    background: linear-gradient(#ff6344, #ff897f);
    ul {
      display: flex;
      height: 100%;

      justify-content: space-around;
      li {
        font-size: 0.24rem;
        color: #fff;
      }
    }
    .ziying {
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
      width: 100%;
      height: 0.8rem;
      background-color: #fff;
      font-size: 0.27rem;
      .right {
        padding-top: 0.034rem;
        font-size: 0.27rem;
        span:last-child {
          color: #ff6040;
          margin-left: 0.08rem;
        }
      }
    }
  }
  .cart-body {
    margin-top: 1.7rem;

    width: 100%;

    .main {
      display: flex;
      position: relative;
      padding: 0 0.3rem;
      height: 2.5rem;
      background-color: #fff;
      margin-top: 0.3rem;

      .van-checkbox {
        width: 0.5rem;
      }
      .right {
        flex: 1;
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        .image {
          text-align: center;
          width: 2.5rem;
          height: 2.5rem;
          img {
            width: 2.3rem;
            height: 2.3rem;
          }
        }
        .zhanshi {
          p {
            font-size: 0.24rem;
            margin-top: 0.1rem;
          }
          p:first-child {
            font-size: 0.25rem;
          }
          p:nth-child(2) {
            font-size: 0.24rem;
            color: #d2d2d2;
          }
          p:nth-child(3) {
            color: #ff6040;
          }
          p:last-child {
            span:first-child {
              font-size: 0.32rem;
              color: #ff6040;
              vertical-align: middle;
            }
            span:last-child {
              text-decoration: line-through;
              font-size: 0.22rem;
              color: #d2d2d2;
              vertical-align: middle;
            }
          }
        }
        .jiajian {
          position: absolute;
          top: 65%;
          right: 0.23rem;
          padding: 0 0.06rem;
          font-size: 0.4rem;
          i:first-child {
            display: inline-block;
            width: 0.2rem;
            background-color: #000;
            height: 0.035rem;
            margin-top: 0.27rem;
            margin-right: 0.06rem;
          }
          span {
            display: inline-block;
            padding: 0 0.27rem;
            height: 0.5rem;
            line-height: 0.5rem;
            // padding-top: .06rem;
            font-size: 0.34rem;
            margin: 0 0.06rem;
            text-align: center;
            background-color: #f2f3f2;
          }
          i:last-child {
            margin-top: 0.06rem;
            display: inline-block;
          }
        }
        .del {
          position: absolute;
          font-size: 12px;
          top: 10px;
          right: 10px;
          width: 40px;
          height: 20px;
          line-height: 20px;
          color: #fff;
          background-color: #ff6344;
          text-align: center;
          border-radius: 4px;
        }
      }
    }
  }
  .pay {
    position: fixed;
    display: flex;
    bottom: 1rem;
    width: 100%;
    height: 1.1rem;
    padding: 0 0.3rem;
    padding-right: 0;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    .van-checkbox {
      font-size: 0.24rem;
    }
    .heji {
      width: 3.5rem;
      height: 100%;
      padding-left: 0.7rem;
      padding-top: 0.12rem;
      p {
        font-size: 0.2rem;
        color: #b9b9b9;
      }
      p:first-child {
        color: #000;
        font-size: 0.24rem;
        span {
          font-style: 0.24rem;
          color: #ff603f;
        }
      }
    }
    .btn {
      flex: 1;
      button {
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 0.3rem;
        background-color: #ff603f;
      }
    }
  }
}
</style>