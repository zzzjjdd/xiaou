<template>
  <div class="container">
    <v-top></v-top>
    <v-toptitle  ref="changeTitle"></v-toptitle>

    <div class="logo">
      <img src="../../assets/images/icon/orange.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.nickname"
        type="nickname"
        label="昵称"
        placeholder="昵称"
      />
      <van-field
        v-model="user.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="btn">
          注册</van-button
        >
      </div>
    </van-form>
    <div class="toreg">
      <span @click="$router.push('/login')">有账号，去登陆</span>
    </div>
  </div>
</template>

<script>
import vToptitle from "../../components/components/TopTitle.vue";
import { postRegister } from "../../request/api";
export default {
  components: {
    vToptitle,
  },
  data() {
    return {
      user: { password: "", phone: "", nickname: "" },
    };
  },
  methods: {
    onSubmit() {
      postRegister(this.user).then((res) => {
        if (
          this.user.phone == "" ||
          this.user.nickname == "" ||
          this.user.password == ""
        ) {
          alert("请填写完整信息");
          return
        } else {
          if (res.code == 200) {
            alert("注册成功");
            this.$router.push("/login");
          }else{
                
          alert(res.msg);
          this.user = {
            phone: "",
            password: "",
          
        }
          }
        }
      
      });
    },
  },
  mounted() {
    document.title = this.$route.meta.title;
    this.$refs.changeTitle.title = this.$route.meta.title;
  },
};
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  .logo {
    height: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 0.8rem;

    img {
      width: 182px;
      height: 48px;
    }
  }
  .btn {
    margin-top: 0.7rem;
    background-color: #ff6040;
    border: none;
    font-size: 0.32rem;
  }
 .van-form {
    margin-top: -11.5rem;
  }
  .van-cell {
    border-bottom: 1px solid #cccccc;
    width: 80%;
    margin: 0 auto;
    margin-top: 0.2rem;
  }
  .toreg {
    font-size: 0.28rem;
    text-align: right;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
    span {
      display: inline-block;
      width: 2.2rem;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
    }
  }
}
</style>