<template>
  <div class="address">
    <v-top></v-top>
    <v-back class="back"></v-back>
    <v-toptitle ref="changeTitle"></v-toptitle>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="select"
    />
  </div>
</template>

<script>
// import { Toast } from "vant";
import { addresslist } from "../../request/api";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      chosenAddressId: '',
      list: [],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/xinadd");
    },
    onEdit( index) {
      this.$router.push("/editadd");
      this.$event.address = index
    },
    select(item) {
      this.event.moren = item.isDefault;
      this.event.id = item.id;
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  mounted() {
    document.title = this.$route.name;
    this.$refs.changeTitle.title = this.$route.name;

    addresslist({ uid: this.user.uid }).then((res) => {
      res.list.map((item) => {
        this.list.push({
          id:item.id,
          tel:item.userphone,
          name:item.username,
          address:item.location,
          isDefault:item.status
        })

      });
    });
  },
};
</script>

<style lang="less" scoped>
.back {
  z-index: 1000;
}
.address {
  background-color: #fff;
  .btn {
    position: fixed;
    bottom: 0.4rem;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 0.8rem;
    button {
      width: 100%;
      height: 100%;
      font-size: 0.28rem;
      color: #fff;
      border-radius: 0.4rem;
      background-color: #ff0015;
    }
  }
}
.van-address-list {
  height: auto;
  .van-address-list__bottom {
    bottom: 1rem;
  }
}
</style>