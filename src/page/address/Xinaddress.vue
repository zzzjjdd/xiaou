<template>
  <div class="xinadd">
    <v-top></v-top>
    <v-back class="back"></v-back>
    <v-toptitle ref="changeTitle"></v-toptitle>

    <div class="address">
      <van-address-edit
        :area-list="areaList"
   
        show-set-default 
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
       
      />
      <!-- <div class="man">
        <label for="man">收货人</label>
        <input type="text" name="man" id="man" placeholder="收获人姓名" />
      </div>
      <div class="phone">
        <label for="phone">手机号码</label>
        <input type="text" name="phone" id="phone" placeholder="手机号码" />
      </div>
      <div class="dizhi">
        <label for="dizhi">所在地址</label>
        <input type="text" name="dizhi" id="dizhi" placeholder="收货地址"  />
      </div>
      <div class="xianxi">
        
      </div> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import { addressadd } from "../../request/api";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      areaList,
      // searchResult: [],
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    onSave(val) {
      let params = {
        uid: this.user.uid,
        username: val.name,
        userphone: val.tel,
        status: val.isDefault ? 1:0,
        location:val.province +'/'+ val.city+'/' + val.county + '/'+val.addressDetail,
        useraddress: val.addressDetail,
      };
     
      addressadd(params).then((res) => {
        Toast(res.msg);
        this.$router.push('/address')
      });
    },
    
  },
  mounted() {
    document.title = this.$route.name;
    this.$refs.changeTitle.title = this.$route.name;
  },
};
</script>

<style lang="less" scoped>
.back {
  z-index: 1000;
}

.xinadd {
  background-color: #fff;
  //   font-size: 0.3rem;
  //   font-weight: 900;
  // .address {
  // padding: 0 0.2rem;
  // .man,
  // .phone,
  // .dizhi {
  //   display: flex;
  //   height: 1.1rem;
  //   align-items: center;
  //   border-bottom: 1px solid rgb(201, 196, 196);
  //   label {
  //     width: 1.7rem;
  //     display: inline-block;
  //   }
  //   input {
  //     flex: 1;
  //     height: 0.79rem;
  //     font-weight: 400;
  //     font-size: 0.28rem;
  //   }
  // }
  // }
}
</style>