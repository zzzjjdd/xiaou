<template>
  <div class="search-top">
    <div class="shang">
      <div class="ditu">
        <img src="../../assets/images/icon/ditu.png" alt="" />
      </div>
      <div class="logo">
        <img src="../../assets/images/icon/logo.png" alt="" />
      </div>
      <div class="inp">
        <input
          type="text"
          placeholder="请输入查找内容"
          v-model="keywords"
          @keydown.enter="search"
        />
      </div>
      <div class="shangpu">
        <img src="../../assets/images/icon/shangpu.png" alt="" />
      </div>
    </div>
    <div class="xia">
      <ul>
        <li
          v-for="(item, index) in topSort"
          :key="item.id"
          :class="{ font: num == index }"
          @click="change(index)"
        >
          <i v-show="num == index"></i>

          <router-link
            :to="{
              path:'/index/cate'
            }"
          >
            {{ item.catename }}</router-link
          >
        </li>
      </ul>
      <span @click="$router.push('/index/cate')">三&nbsp;分类</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      keywords: "",
      num: 0,
    };
  },
  methods: {
    search() {
      this.$router.push({
        path: "/search",
        query: {
          keywords: this.keywords,
        },
      });
    },

    change(index) {
      this.num = index;
    },
    ...mapActions({
      topSortAction: "topSortAction",
    }),
  },
  mounted() {
    this.topSortAction();
  },
  computed: {
    ...mapGetters({
      topSort: "topSort",
    }),
  },
};
</script>

<style lang="less" scoped>
.search-top {
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 1.6rem;
  background-image: linear-gradient(#ff6040, #ff8a80);

  .shang {
    width: 100%;
    height: 0.9rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding-top: 0.25rem;

    img {
      width: 100%;
      height: 100%;
    }
    .ditu {
      width: 0.47rem;
      height: 0.55rem;
      margin-top: -0.06rem;
    }
    .logo {
      display: block;
      width: 1.8rem;
      height: 0.46rem;
      margin-left: -0.2rem;
    }
    .inp {
      width: 3rem;
      height: 0.5rem;
      font-size: 0.24rem;
      input {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
        padding-left: 0.14rem;
      }
    }
    .shangpu {
      width: 0.52rem;
      height: 0.5rem;
    }
  }
  .xia {
    height: 0.7rem;
    position: relative;
    span {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 0.28rem;
      color: #fff;
      background-image: linear-gradient(#ff7a68, #ff8a80);
      box-shadow: -0.13rem 0rem 0.12rem -0.1rem rgb(0 5 0 / 30%);
      width: 1.5rem;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
    }
    a {
      color: #fff;
    }

    ul {
      width: 100%;
      height: 0.7rem;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      display: flex;
      line-height: 0.7rem;
      li {
        padding: 0 0.19rem;
        font-size: 0.27rem;
        color: #fff;
        position: relative;

        i {
          position: absolute;
          bottom: 0rem;
          left: 50%;
          margin-left: -0.25rem;
          display: block;
          width: 0.5rem;
          height: 0.04rem;
          background-color: #fff;
        }
      }
      li:last-child {
        margin-right: 1.5rem;
      }
      .font {
        font-size: 0.3rem;
      }
    }
  }
}
</style>