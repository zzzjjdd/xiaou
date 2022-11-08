<template>
  <div>
    <div class="top-title">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="zhanwei"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "首页",
    };
  },
};
</script>

<style lang="less" scoped>
.top-title {
  overflow: hidden;

  .title {
    width: 100%;
    height: 100px;
    margin-top: 0.57rem;
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 0.7rem;
    background-color: #ff6040;
    p {
      font-size: 0.35rem;
      text-align: center;
      color: #fff;
    }
  }
  .zhanwei {
    margin-top: 1.27rem;
  }
}
</style>