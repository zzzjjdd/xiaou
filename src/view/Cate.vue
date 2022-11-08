<template>
  <div class="container">
    <v-topinp></v-topinp>
    <div class="main">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in cateList"
            :key="item.id"
            @click="changeActive(index)"
          >
            <span :class="{ changeClass: active == index }">{{
              item.catename
            }}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="goods">
          <p   >{{ title }}</p>
          <ul>
            <li
              v-for="(item) in cateChildList"
              :key="item.id"
           
              @click="toDetails(item.id,item.catename)"
            >
              <span> <img :src="$pregImg + item.img" alt="" /></span>
              <span ref='biaoti'>{{ item.catename }}</span>
            </li>
            <li v-show="cateChildList.length <= 0" class="empty">
              暂无{{ title }}数据
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { getgoodlist } from "../request/api";

export default {
  data() {
    return {
      active: 0,
      title: "家用电器",
      // cateList: [],
      // cateChildList: [{"catename":"","img":null}],
      cateChildList: [],
    };
  },
  watch: {
    cateList: {
      deep: true,
      handler(v) {
        if (v[0].children) {
          this.cateChildList = v[0].children;
        }
      },
    },
  },
  computed: {
    ...mapGetters({
      cateList: "cateList",
    }),
  },
  methods: {
    ...mapActions({
      cateListAction: "cateListAction",
    }),

    changeActive(index) {
      this.active = index;
      this.title = this.cateList[index].catename;
      if (this.cateList[index].children) {
        this.cateChildList = this.cateList[index].children;
      } else {
        this.cateChildList = [];
      }
    },
    toDetails(goodsid,name) {
      this.$router.push({
          name: 'goodList',
              params: { id: goodsid, name:name},
      })
      // console.log(this.$refs.biaoti[i].innerText);
      // getgoodlist({ cateid: goodsid, page: 1, size: 100, type: 2 }).then(
      //   (res) => {
      //     this.title =this.$refs.biaoti[i].innerText
      //     console.log(res.list.goodData);
      //     // this.cateChildList = res.list
      //   }
      // );
      // console.log(goodsid);
      // this.$router.push({
      //   path: "/details",
      //   query: {
      //     id: goodsid,
      //   },
      // });
    },
  },
  mounted() {
    document.title = this.$route.meta.title;
    this.cateListAction();
  },
};
</script>

<style lang="less" scoped>
.container {
  height: auto;

  background-color: #f3f3f3;
  .main {
    // display: flex;
    margin-top: 1rem;
    overflow: hidden;
    height: auto;
    .left {
      position: fixed;
      left: 0;
      width: 2.3rem;
      height: 10rem;
      padding-top: 0.2rem;
      background-color: #fff;
      overflow-y: scroll;
      padding-bottom: 30px;

      ul {
        li {
          font-size: 0.3rem;
          text-align: center;
          line-height: 1.3rem;
          height: 1.3rem;
          color: #999;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .changeClass {
          display: block;
          width: 100%;
          height: 0.8rem;
          line-height: 0.8rem;
          background-color: #ff6040;
          color: #fff;
        }
      }
    }
    .right {
      //   flex: 1;
      height: auto;
      padding: 0.3rem 0.35rem 0;
      margin-left: 2.2rem;
      .goods {
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: 0.2rem;
        box-shadow: 0.02rem 0.02rem 0.1rem -0.04rem rgb(0, 0, 0, 0.5);
        border: 0.02rem solid #ccc;
        padding-top: 0.4rem;
        padding-bottom: 0.2rem;
        padding-left: 0.2rem;
        p {
          font-size: 0.3rem;
          font-weight: 900;
          padding-bottom: 0.4rem;
        }
        ul {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          .empty {
            font-size: 0.32rem;
            color: red;
            line-height: 0.8rem;
          }
          li {
            display: flex;
            flex-direction: column;
            margin-right: 0.2rem;
            padding-bottom: 0.2rem;
            text-align: center;
            span:first-child {
              width: 1.1rem;
              height: 1.1rem;
              border-radius: 50%;
              overflow: hidden;
              background-color: #f3f3f3;
              // text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
              }
            }

            span:last-child {
              margin-top: 0.05rem;
              font-size: 0.24rem;
              white-space: nowrap;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>