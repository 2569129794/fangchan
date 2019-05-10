<template>
  <div class="bigbox">
    <p class="title">您好</p>
    <p class="title">欢迎来到柚家，请输入注册信息</p>
    <van-cell-group class="box">
    <van-field
        class="txt"
        v-model="username"
        clearable
        placeholder="请输入用户名/手机号/邮箱"
    />
    <van-field
        class="txt"
        v-model="phone"
        clearable
        placeholder="请输入手机号"
    />
    <van-field
        class="txt"
        v-model="password"
        type="password"
        placeholder="请输入密码/密码错误请重新输入"
    />
    <van-field
        class="txt"
        v-model="qpassword"
        type="password"
        placeholder="再次确认密码"
    />
    </van-cell-group>
    <van-button type="default" class="btn" @click="btn">确定</van-button>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name:'Register',
  data(){
      return{
          username:"",
          phone:"",
          password:"",
          qpassword:""
      }
  },
  methods:{
      btn(){
        //  this.$router.push("/login"); 
        // http://39.105.73.76:8080/house-1.0/user/register.do
        if(this.password==this.qpassword){
            axios({
                method:"post",
                url:"http://39.105.73.76:8080/house-1.0/user/register.do",
                // headers:{"contentType":"application/x-www-form-urlencoded"},
                data:qs.stringify({
                    password:this.username,
                    phone:this.phone,
                    usernumber:this.username
                })
            }).then((data)=>{
                console.log(data.data);
                if(data.data.code==1000){
                    alert(data.data.msg);
                    this.$router.push("/login"); 
                }else if(data.data.code==0){
                    alert(data.data.msg)
                }else{
                    alert("注册失败");
                }
            })
        }else{
            alert("密码与确认密码不一致");
        }
         
      }
  }
}
</script>

<style scoped>
.bigbox{
    padding-top:20px;
}
.title{
        padding-left:26px;
        line-height:30px;
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
