<template>
  <div class="sort">
    <div class="shiyi">
      <div class="title">
        <span :class="{changes:xuan == 0}" @click="xuans(0)">双十一尖货预购</span>
        <span :class="{changes:xuan == 1}" @click="xuans(1)">畅购全球</span>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in shiyiList[xuan]" :key="item.id">
            <img :src="item.url" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="hot-tab">
      <div class="hot-title">
        <ul>
          <li
            v-for="(item, index) in titleList"
            :key="item.id"
            @click="change(index)"
            :class="{ active: current == index }"
          > {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="hot-main">
        <ul>
          <li v-for="item in hotList[current].content" :key="item.id" @click="toDetails(item.id)">
            <div class="left">
              <img :src="$pregImg + item.img" alt="" />
            </div>
            <div class="right">
              <p>{{ item.goodsname }}</p>
              <p>现价格： ￥{{ item.price }}</p>
              <p>原价格： ￥{{ item.market_price }}</p>
              <p><button>立即抢购</button></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { gethortgoods } from "../../request/api";
export default {
  data() {
    return {
      shiyiList: [
       [ {
          id: 1,
          url: require("../../assets/images/goods/7.jpg"),
        },
        {
          id: 2,
          url: require("../../assets/images/goods/5.jpg"),
        },
        {
          id: 3,
          url: require("../../assets/images/goods/6.jpg"),
        },
        {
          id: 4,
          url: require("../../assets/images/goods/8.jpg"),
        },],[ {
          id: 1,
          url: require("../../assets/images/goods/04.png"),
        },
        {
          id: 2,
          url: require("../../assets/images/goods/03.png"),
        },
        {
          id: 3,
          url: require("../../assets/images/goods/02.png"),
        },
        {
          id: 4,
          url: require("../../assets/images/goods/01.png"),
        },]
      ],
      titleList: [
        {
          id: 1,
          title: "热门推荐",
        },
        {
          id: 2,
          title: "上新推荐",
        },
        {
          id: 3,
          title: "所有商品",
        },
      ],
      current: 0,
      xuan:0,
      hotList: [
        {
          one:[]
        },
        {
          two:[]
        },{
          three:[]
        }
      ],
    };
  },
  methods: {
    change(index) {
      this.current = index;
    },
    xuans(index) {
      this.xuan = index;
    },
       toDetails(goodsid) {
    //  console.log(id);
     this.$router.push(
       {
         path:'/details',
         query:{
           id:goodsid
         }
       }
     )
   }
  },
  mounted() {
    gethortgoods().then((res) => {
      if (res.code === 200) {
        this.hotList = res.list;
      }
    })

  }
}
</script>

<style lang="less" scoped>
.sort {
  width: 100%;
  height: auto;
  margin-top: 0.2rem;
  background-color: #fff;
  .shiyi {
    width: 100%;
    overflow: hidden;
    .title {
      width: 100%;
      height: 0.8rem;
      font-size: 0.32rem;
      display: flex;
      line-height: 0.8rem;
      color: #9e9e9e;
      margin-top: 0.13rem;
      span {
        flex: 1;
        text-align: center;
        
        font-weight: 900;
      }
    }
    .changes {
      color:#e26d55;
      font-size: .34rem;
      
      
    }
    .content {
      width: 100%;
      margin-top: 0.15rem;
      ul {
        display: flex;
        justify-content: center;
        li {
          padding: 0 0.05rem;
          img {
            width: 1.55rem;
            height: 1.55rem;
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
  .hot-tab {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 0.6rem;
    .hot-title {
      width: 100%;
      height: 0.8rem;
      ul {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 0.3rem;
        li {
          flex: 1;
          text-align: center;
          font-size: 0.32rem;
          color: rgb(254, 166, 19);
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .active {
          height: 0.6rem;
          background-color: #fea613;
          color: #fff;
          border-radius: 0.15rem;
        }
      }
    }

    .hot-main {
      width: 100%;
      height: auto;
      padding: 0 0.3rem;
      overflow: hidden;
      padding-bottom: 0.2rem;
      ul {
        width: 100%;
        height: auto;
        overflow: hidden;
        li {
          width: 100%;
          height: 3.5rem;
          margin-top: 0.25rem;
          border-radius: 0.2rem;
          border: 1px solid #ccc;
          overflow: hidden;
          display: flex;
          align-items: center;
          box-shadow: 0.02rem 0.02rem 0.1rem -0.04rem rgb(0, 0, 0, 0.5);
          .left {
            margin-left: 0.47rem;
            img {
              width: 2.2rem;
              height: 2.2rem;
            }
          }
          .right {
            font-size: 0.28rem;
            margin-left: 0.4rem;
            p {
              line-height: 0.5rem;
            }
            p:first-child {
              // font-size: 0.28rem;
              font-weight: 900;
            }
            p:nth-child(2) {
              color: red;
              font-size: 0.29rem;
            }
            p:nth-child(3) {
              text-decoration: line-through;
              color: rgb(205, 205, 205);
              font-size: 0.27rem;
            }
            p:last-child {
              margin-top: 0.1rem;
              button {
                width: 2rem;
                height: 0.54rem;
                background-color: #fea613;
                color: #fff;
                font-size: 0.27rem;
                border-radius: 0.08rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>