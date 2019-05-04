<template>
  <div class="bigbox">
    <p class="title">账号登录</p>
    <van-cell-group class="box">
    <van-field
        class="txt"
        v-model="username"
        clearable
        placeholder="请输入用户名/手机号/邮箱"
    />

    <van-field
        class="txt"
        v-model="password"
        type="password"
        placeholder="请输入密码"
    />
    </van-cell-group>
    <van-button type="default" class="btn" @click="btn()">登录</van-button>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
      return{
          username:"",
          password:""
      }
  },
  methods:{
      btn(){
         this.$router.push("/index"); 
      }
  }
}
</script>

<style scoped>
.bigbox{
    padding-top:20px;
}
    .title{

        text-align:center;
    }
    .txt{
        border-bottom:1px solid #ccc;
        
    }
    .box{
        padding:20px 26px;
    }
    .btn{
        float:right;
        margin-right:26px;
    }
</style>
