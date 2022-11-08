<template>
  <div class="home">
    <!-- 头部logo和推荐分类 -->
    <v-hometab></v-hometab>
    <v-toptitle></v-toptitle>
    <div class="swiper-hot">
      <!-- 轮播图 -->
      <div class="swiper">
        <div class="block" height="4rem">
          <el-carousel height="4rem" style="z-index: 5">
            <el-carousel-item v-for="(item, index) in swiperUrl" :key="index">
              <img :src="$pregImg + item.img" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 限时秒杀 -->
      <div class="hot">
        <ul>
          <li v-for="(item, index) in hotList" :key="index">
            <img :src="item.url" alt="" />
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 倒计时 -->
    <div class="xianshi">
      <div class="left">
        <div class="one">限时抢购</div>
        <div class="two">
          <span>{{ shijian.tian }}</span>
          <i>:</i>
          <span>{{ shijian.shi }}</span>
          <i>:</i>
          <span>{{ shijian.fen }}</span>
          <i>:</i>
          <span>{{ shijian.miao }}</span>
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <div class="one">品牌上新</div>
          <div class="two">九点整，抢大牌</div>
          <div class="three">疯抢红包 ></div>
        </div>
        <div class="right-bottom">
          <div class="one">日用好物</div>
          <div class="two">愿君多采撷</div>
          <div class="three"></div>
        </div>
      </div>
    </div>
    <!-- 双十一尖货选购和热门推荐选项卡s -->
    <v-tab></v-tab>
  </div>
</template>

<script>
import { getbanner } from "../request/api"; //轮播图接口
import vHometab from "../components/home/HomeTabs.vue";
import vTab from "../components/home/HomeHot.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { vTab, vHometab },
  data() {
    return {
      timer: 0,
      shijian: {
        tian: "",
        shi: "",
        fen: "",
        miao: "",
      },
      swiperUrl: localStorage.getItem("swiperUrl")
        ? JSON.parse(localStorage.getItem("swiperUrl"))
        : [],
      hotList: [
        {
          title: "限时秒杀",
          url: require("../assets/images/miaosha/seckill.png"),
        },
        {
          title: "畅销商品",
          url: require("../assets/images/miaosha/top.png"),
        },
        {
          title: "品质大牌",
          url: require("../assets/images/miaosha/brand.png"),
        },
        {
          title: "小U自营",
          url: require("../assets/images/miaosha/selfsupport.png"),
        },
        {
          title: "积分商城",
          url: require("../assets/images/miaosha/integral.png"),
        },
      ],
    };
  },
  methods: {
    getime(time) {
      let timeObj = {};
      timeObj.tian = Math.floor(time / (1000 * 60 * 60 * 24));
      timeObj.shi = Math.floor((time / (1000 * 60 * 60)) % 24);
      timeObj.fen = Math.floor((time / (1000 * 60)) % 60);
      timeObj.miao = Math.floor((time / 1000) % 60);
      return timeObj;
    },
    ...mapActions({
      settime: "countdownAction",
    }),
  },
  computed: {
    ...mapGetters({
      countdown: "countdown",
    }),
  },
  watch: {
    timer(v) {
      this.shijian = {
        tian: this.getime(v).tian,
        shi: this.getime(v).shi,
        fen: this.getime(v).fen,
        miao: this.getime(v).miao,
      };
    },
  },
  mounted() {
    this.settime();
    setTimeout(() => {
      this.timer = this.countdown;
    }, 200);

    setInterval(() => {
      this.timer -= 1000;
    }, 1000);

    document.title = this.$route.meta.title;
    getbanner().then((res) => {
      if (res.code === 200) {
        this.swiperUrl = res.list;
        localStorage.setItem("swiperUrl", JSON.stringify(this.swiperUrl));
      }
    });
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-carousel__indicators--horizontal{
  bottom: -50px;
}
.home {
  width: 100%;
  height: auto;
  margin-bottom: 1.8rem;
  top: 0.4rem;
  overflow: hidden;

  .swiper-hot {
    width: 100%;
    height: 5.3rem;
    background-color: #fff;
    margin-top: 0.4rem;
    padding-top: 0.2rem;
    .swiper {
      width: 100%;
      height: 3.6rem !important;
      text-align: center;
      overflow: hidden;

      img {
        width: 6.5rem;
        height: 3.6rem;
      }
    }
    .hot {
      width: 100%;
      height: auto;
      padding: 0 0.16rem;
      margin-top: 0.35rem;
      ul {
        display: flex;
        font-size: 0.2rem;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 0.25rem;
          img {
            width: 0.54rem;
            height: 0.54rem;
            margin-bottom: 0.03rem;
          }
        }
      }
    }
  }

  .xianshi {
    height: auto;
    margin-top: 0.23rem;
    width: 100%;
    overflow: hidden;
    height: 3.3rem;
    padding: 0 0.23rem;

    .left {
      float: left;
      width: 3.28rem;
      height: 3.28rem;
      background-image: url("../assets/images/goods/02.png");
      background-size: 3.28rem;
      padding: 5px 0 0 10px;
      // font-size: 13px;
      .one {
        font-size: 18px;
        font-weight: 900;
        color: #90a950;
      }
      .two {
        margin-top: 5px;
        font-size: 13px;
        font-weight: 900;
        color: #e6eed6;
        span {
          display: inline-block;
          background-color: #617c37;
          padding: 0 3px;
        }
        i {
          font-style: normal;
          color: #617c37;
          margin: 0 3px;
        }
      }
    }
    .right {
      float: right;
      display: flex;
      flex-direction: column;
      width: 3.28rem;
      height: 3.28rem;
      justify-content: space-between;
      .right-top {
        width: 100%;
        height: 48%;
        background-color: #af3;

        padding: 5px 0 0 10px;
        background-image: url("../assets/images/goods/right02.png");
        .one {
          font-size: 17px;
          font-weight: 900;
          color: #f56049;
        }
        .two {
          margin-top: 2px;
          font-size: 15px;
          color: #f56049;
        }
        .three {
          margin-top: 2px;
          padding-left: 4px;
          width: 90px;
          height: 35px;
          line-height: 35px;
          background: linear-gradient(#ff6145, #ff9474);
          font-size: 16px;
          color: #fff;
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
        }
      }
      .right-bottom {
        width: 100%;
        height: 48%;
        padding: 5px 0 0 10px;
        background-image: url("../assets/images/goods/right01.png");
        .one {
          font-size: 17px;
          font-weight: 900;
          color: #ae44f6;
        }
        .two {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 900;
          color: #ae55f1;
        }
        .three {
          margin-top: 10px;
          width: 70px;
          height: 5px;
          background-color: #b041fd;
          border-top-right-radius: 20px;
        }
      }
    }
  }
}
</style>