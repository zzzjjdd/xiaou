<template>
  <div>
    <div class="shangpin">
      <ul>
        <li v-for="item in goodsList" :key="item.id" @click="toDetails(item.id)">
          <div class="left">
            <img :src="$pregImg + item.img" alt="" />
          </div>
          <div class="right">
            <p>{{ item.goodsname }}</p>
            <p>
              <span>￥{{ item.price }}</span>
              <span>￥{{ item.market_price }}</span>
            </p>
            <p>双11.11限制</p>
            <!-- <slot name="two"></slot> -->
            <p><span>1233评论</span><span>99%好评</span></p>
          </div>
        </li>
        <li v-if="!goodsList" class="nulls">

          <van-empty
            class="custom-image"
            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          >
            <p class="tips">暂无{{title}}数据</p>
            <van-button round  class="bottom-button"
            @click="change"
              >随便逛逛</van-button
            >
          </van-empty>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodsList"],
  data(){
    return{
      title:''
    }
  },
 methods: {
   change() {
     this.$router.push('/index')
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
};
</script>

<style lang="less" scoped>
.custom-image {
  margin-top: 4rem;
  text-align: center;
}
.custom-image .van-empty__image {
  width: 1.8rem;
  height: 1.8rem;
}
.tips {
  font-size: .46rem;
  text-align: center;
  margin-bottom: .4rem;
  margin-top: .4rem;
}
.bottom-button {
  width: 3.2rem;
  height: 0.8rem;
  background:linear-gradient(to right,#ff9b19,#f97657);
  color: #fff;
  font-size: .3rem;


}
.shangpin {
  width: 100%;
  margin-top: 2.86rem;
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      height: 2.6rem;
      padding: 0 0.25rem;
      // margin-bottom: 40px;
      align-items: center;
      .left {
        width: 2.8rem;
        height: 2.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 2.3rem;
          height: 2.3rem;
        }
      }

      .right {
        flex: 1;
        p {
          font-size: 0.3rem;
        }
        p:first-child {
          font-size: 0.28rem;
          color: #424244;
        }
        p:nth-child(2) {
          margin-top: 0.12rem;
          span:first-child {
            color: #fa6144;
            font-size: 0.26rem;
          }
          span:last-child {
            text-decoration: line-through;
            color: #ccc;
            font-size: 0.26rem;
          }
        }
        p:nth-child(3) {
          width: 1.5rem;
          color: #fff;
          height: 0.45rem;
          line-height: 0.48rem;
          border-radius: 0.1rem;
          text-align: center;
          font-size: 0.24rem;
          background-color: #ff8065;
          margin-top: 0.14rem;
        }
        p:last-child {
          font-size: 0.24rem;
          color: #ccc;
          margin-top: 0.15rem;
          span:last-child {
            margin-left: 0.4rem;
          }
        }
      }
    }
    .nulls {
      font-size: 0.52rem;
      color: red;
      justify-content: center;
    }
  }
}
</style>