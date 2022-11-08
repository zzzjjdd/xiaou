<template>
  
    <div class="back">
      <span @click="$router.go(-1)"></span>
 
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

  .back {
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