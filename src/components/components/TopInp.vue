<template>
  <div class="inp" id="inp">
    <input
      type="text"
      placeholder="请输入关键字"
      v-model.trim="values"
      @keydown.enter="change"
    /> 
  </div>
</template>

<script>
// import { getsearch } from "../../request/api";
export default {
  data() {
    return {
      values: "",
    };
  },
  methods: {
    change() {
      this.$router.push({                    
        path: "/search",
        query: {
          keywords: this.values,
        },
      });
    },

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
</style>