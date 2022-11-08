<template>
  <div class="d">
    <v-top></v-top>

    <div class="backs">
      <span @click="$router.go(-1)"></span>
    </div>
    <v-toptitle ref="changeName"></v-toptitle>
    <div class="inp" id="inp">
      <input
        type="text"
        placeholder="请输入关键字"
        v-model.trim="values"
        @keydown.enter="change"
      />
    </div>
    <div class="liebiao"></div>
    <v-good :goodsList="goodsList" class="topsd" ref="titlechange"></v-good>
  </div>
</template>

<script>
import { getsearch } from "../../request/api";
export default {
  data() {
    return {
      goodsList: [],
      values: "",
      tips: "",
    };
  },
  methods: {
    change() {
      this.$refs.titlechange.title = this.values;
      getsearch({ keywords: this.values }).then((res) => {
        this.goodsList = res.list;
      });
    },
  },
  mounted() {
    this.$refs.changeName.title = this.$route.name;
    this.$refs.titlechange.title = this.$route.query.keywords;
    getsearch({ keywords: this.$route.query.keywords }).then((res) => {
      this.goodsList = res.list;
    });
  },
};
</script>

<style lang="less" scoped>
.inp {
  width: 100%;
  height: 1rem;
  text-align: center;

  // background: #ff603f;
  background-image: linear-gradient(#ff6040, #ff7964);
  padding-top: 0.12rem;
  position: fixed;
  font-size: 0.28rem;
  input {
    width: 85%;
    height: 0.55rem;
    border-radius: 0.2rem;
    padding-left: 0.27rem;
  }
}
.liebiao {
  margin-top: -1.5rem;
}

.backs {
  width: 0.2rem;
  height: 0.2rem;
  border: 0.04rem solid #fff;
  border-top: none;
  border-right: none;
  transform: rotate(45deg);
  position: fixed;
  top: 0.8rem;
  left: 0.4rem;
  font-size: 0.5rem;
  z-index: 100;
  span {
    position: absolute;
    top: -0.25rem;
    left: -0.2rem;
    display: inline-block;
    width: 30px;
    height: 30px;
  }
}
</style>