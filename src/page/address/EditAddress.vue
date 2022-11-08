<template>
  <div class="xinadd">
    <v-top></v-top>
    <v-back class="back"></v-back>
    <v-toptitle ref="changeTitle"></v-toptitle>

    <div class="address">
      <van-address-edit
        ref="addre"
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import { addressedit, addressremove } from "../../request/api";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      areaList,
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
        id: this.$event.address.id,
        username: val.name,
        userphone: val.tel,
        status: val.isDefault ? 1:0,
        location:val.province +'/'+ val.city+'/' + val.county + '/'+val.addressDetail,
        useraddress: val.addressDetail,
      };
     
      addressedit(params).then(() => {
        Toast('修改成功');
        this.$router.push('/address')
      });
    },
    onDelete() {
        addressremove({id:this.$event.address.id}).then(() => {
        Toast('删除成功');
        this.$router.push('/address')
      });
    
    },
  },
  mounted() {
  
    let { name, tel, address, isDefault } = this.$event.address;


    let province = address.split("/")[0];
    let city = address.split("/")[1];
    let county = address.split("/")[2];

    
    this.$refs.addre.data.name = name
    this.$refs.addre.data.tel = tel

    this.$refs.addre.data.province = province
    this.$refs.addre.data.city = city
    this.$refs.addre.data.county = county

    this.$refs.addre.data.addressDetail = address
    this.$refs.addre.data.isDefault = isDefault == 1? true:false
    // {
    //   name,
    //   tel,
    //   isDefault:isDefault == 1? true:false,
    //   addressDetail:address,
    // };

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