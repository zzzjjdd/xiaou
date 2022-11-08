<template>
  <div class="container">
    <v-top></v-top>
    <v-topend ref="changeTitle"></v-topend>
    <div class="fenlei">
      <ul>
        <li>综合排序</li>
        <li>销量</li>
        <li>价格</li>
        <li>好评度</li>
        <li>店铺</li>
        <li>筛选</li>
      </ul>
    </div>
    <v-good :goodsList="goodsList" ref="abc"> </v-good>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      requestGoods: "goodsListActions",
    }),
  },
  mounted() {
    document.title = this.$route.meta.title;
    this.$refs.changeTitle.title = this.$route.meta.title;
    this.$refs.abc.title = this.$route.params.name;
    // console.log(this.$route.params.id);
    this.requestGoods([this.$route.params.id, 2]);
  },
  computed: {
    ...mapGetters({
      goodsList: "goodsList",
    }),
  },
  // watch:{
  //   goodsList: {
  //     deep:true,
  //     handler(v) {
  //       this.goodsList = v
  //     }
  //   }
  // }
};
</script>

<style lang="less" scoped>
.container {
  .fenlei {
    position: fixed;
    top: 2.24rem;
    width: 100%;
    height: 0.6rem;
    padding-top: 0.05rem;
    padding-left: 0.19rem;
    background-image: linear-gradient(#fe7863, #ff887c);
    ul {
      height: 0.6rem;
      li {
        font-size: 0.28rem;
        display: inline-block;
        padding: 0 0.2rem;
        color: #fff;
      }
    }
  }
}
</style>