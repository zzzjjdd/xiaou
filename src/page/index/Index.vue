<template>
  <div class="container">
    <v-toptitle ref="changeTitle"></v-toptitle>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link
        :to="item.toLink"
        v-for="(item, index) in barList"
        :key="index"
        class="bar"
        @click.native=" change(index)"
      >
        <img
          :src="index == changeBar.isActive ? changeBar.url : changeBar.url2"
          alt=""
        />
        <span :class="{ active: changeBar.isActive === index }">{{
          item.title
        }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeBar: {
        isActive: 0,
        url: require("../../assets/images/icon/tab2.png"),
        url2: require("../../assets/images/icon/tab.png"),
      },
      barList: [
        {
          toLink: "/index/home",
          title: "商城",
        },
        {
          toLink: "/index/cate",
          title: "分类",
        },
        {
          toLink: "/index/cart/:id",
          title: "购物车",
        },
        {
          toLink: "/index/person",
          title: "我的",
        },
      ],
    };
  },
  methods: {
    change(index) {
      this.changeBar.isActive = index;
      localStorage.setItem('active',this.changeBar.isActive)
      this.$refs.changeTitle.title =this.$route.meta.title


    }
  },
  mounted() {

    // 判断底部导航状态
     this.changeBar.isActive = localStorage.getItem("active") ? localStorage.getItem("active"):0;
  
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: auto;
  background-color: #f3f3f3;
  overflow: hidden;
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    width: 100%;
    background-color: #fff;
    display: flex;

    .bar {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
      display: flex;
      flex-direction: column;
      span {
        font-size: 0.25rem;
      }
    }
    .active {
      color: #ff6040;
    }
  }
}
</style>