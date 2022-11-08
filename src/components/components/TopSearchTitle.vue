<template>
  <div>
    <div class="topbar">
      <v-back></v-back>
      <div class="Toptitle">{{title}}</div>
      <v-topinp></v-topinp>
    </div>
    <div class="zhanwei"></div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      title:''
    }
  }
};
</script>

<style lang="less" scoped>
.topbar {
  position: fixed;
  z-index: 8;
  width: 100%;
  top: 0.57rem;
  background-color: #ff6040;
  .Toptitle {
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #ff6040;
    font-size: 0.35rem;
    text-align: center;
    color: #fff;
  }
}
.zhanwei {
  width: 100%;
  margin-top: 2.37rem;
}
</style>