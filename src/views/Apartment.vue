<template>
  <div class="bigbox">
    <div class="logo">
        <img src="http://img3.imgtn.bdimg.com/it/u=1275198645,2327298216&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="box">
          <div class="top">
              <p>
                <img src="http://img3.imgtn.bdimg.com/it/u=3685590679,3099518046&fm=26&gp=0.jpg" alt="">
                <span>寓活动</span>
              </p>
              <p>
                <img src="http://img5.imgtn.bdimg.com/it/u=3145519866,3485468253&fm=26&gp=0.jpg" alt="">
                <span>寓福利</span>
              </p>
              <p>
                <img src="http://img2.imgtn.bdimg.com/it/u=3143952105,3708668211&fm=26&gp=0.jpg" alt="">
                <span>寓人物</span>
              </p>
              <p>
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1425927703,1532965632&fm=26&gp=0.jpg" alt="">
                <span>寓生活</span>
              </p>
          </div>
          <div class="bottom">
            <h3>郑州精选</h3>
            <div class="box1">
              <router-link :to="'/detail/'+item.id" class="yu" v-for="(item,i) in data" :key="i">
                <img src="" alt="">
                <p>{{item.hdescribe}}</p>
                <p>{{item.htype}}</p>
                <p>￥{{item.price}}/月起</p>
              </router-link>
            </div>
          </div>
          <div class="banner">
            <img src="http://img5.imgtn.bdimg.com/it/u=140660967,3965823056&fm=26&gp=0.jpg" alt="">
          </div>

          <div class="bottom">
            <h3>推荐房型</h3>
            <div class="box1">
              <router-link :to="'/detail/'+item.id" class="yu" v-for="(item,i) in tui" :key="i">
                <img :src="item.homedetails.image1" alt="">
                <p>{{item.hdescribe}}</p>
                <p>{{item.htype}}</p>
                <p>￥{{item.price}}/月起</p>
              </router-link>
              
            </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";
export default {
  name:'Apartment',
  data(){
    return{
      tit:"公寓",
      data:[],
      tui:[]
    }
  },
  mounted(){
    this.$emit("toparent",this.tit);
    axios({
      method:"get",
      url:"http://39.105.73.76:8080/house-1.0/home/selectHomeGoods.do"
    }).then((data)=>{
      console.log(data);
      this.data=data.data.data;
    })

    axios({
      method:"get",
      url:"http://39.105.73.76:8080/house-1.0/home/selectHomeRecommend.do"
    }).then((data)=>{
      console.log(data);
      this.tui=data.data.data;
    })
  }
 
}
</script>

<style scoped>
.logo img{
  height:102px;
  width:100%;
}
.top{
  display:flex;
  /* flex-direction:column; */
  justify-content: space-around;
}
.top p{
  font-size:14px;
  line-height:20px;
  text-align:center;
  margin:20px 0;
}
/* .top p{} */
.top img{
  width:40px;
  height:30px;

}
.bottom img{
width:176px;
  height:98px;
  margin-bottom:8px;
}
.bottom .box1{
  display:flex;
  justify-content: space-between;
  margin:10px 0;
}
.bottom .box1 .yu{
  width:177px;
  height:174px;
  border:1px solid #ccc;
  /* text-align:center; */
}
.bottom p{
  font-size:14px;
  line-height:20px;
  margin-left:20px;
}
.bottom span{
  color:#ccc;
}
.banner{
  margin:20px 0;
}
.banner img{
  width:100%;
  height:150px;
}
</style>
