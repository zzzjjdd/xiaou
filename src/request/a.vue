<template>
  <div></div>
</template>

<script>
import { getCates } from "./api";
export default {
  mounted() {
    console.log(12);
    getCates().then((res) => {
      console.log(res.list);
    });
  },
};
</script>

<style lang="less" scoped>
</style>