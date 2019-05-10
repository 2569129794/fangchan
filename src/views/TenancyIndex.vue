<template>
    <div>
      <!-- 租房首页   -->
      <div class="logo">
        <img src="http://img3.imgtn.bdimg.com/it/u=1275198645,2327298216&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="box">
          <div class="top">
              <router-link to="/cotenancy" tag="p">
                <img src="http://img3.imgtn.bdimg.com/it/u=3685590679,3099518046&fm=26&gp=0.jpg" alt="">
                <span>合租</span>
              </router-link>
              <router-link to="/wholeRent" tag="p">
                <img src="http://img5.imgtn.bdimg.com/it/u=3145519866,3485468253&fm=26&gp=0.jpg" alt="">
                <span>整租</span>
              </router-link>
              <router-link to="/apartment" tag="p">
                <img src="http://img2.imgtn.bdimg.com/it/u=3143952105,3708668211&fm=26&gp=0.jpg" alt="">
                <span>公寓</span>
              </router-link>
              <router-link to="/mansion" tag="p">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1425927703,1532965632&fm=26&gp=0.jpg" alt="">
                <span>豪宅</span>
              </router-link>
          </div>
          <div class="bottom">
            <div class="select">
              <p>720VR看房</p>
              <span>还原真实房</span>
            </div>
            <div class="select">
              <p>空气检测合格</p>
              <span>住的更安心</span>
            </div>
            <div class="select">
              <p>业主直租</p>
              <span>品质与环保</span>
            </div>
          </div>
      </div>
      <div class="banner">
        <img src="http://img3.imgtn.bdimg.com/it/u=3520738333,660254630&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="zufang">
        <h3>租房</h3>
        <div class="zu">
          <div class="fang">
            <p>视频看房就现在</p>
            <span>省时省力，身临其境</span>
          </div>
          <div class="fang">
            <p>公积金租房政策</p>
            <span>每月省1500元不是梦</span>
          </div>
        </div>
      </div>
      <div class="remen">
        <h3>热门房源</h3>
        <!-- v-for="(item,i) in list" :key="i" -->
        <ul class="re" >
         <router-link :to="'/detail/'+item.id" tag="li" v-for="(item,i) in list" :key="i">
           <div class="img">
             <img :src="item.hpicture" alt="">
           </div>
           <div class="detail">
             <p>{{item.describe}}</p>
             <p>{{item.area}}</p>
             <p>{{item.address}}</p>
             <div class="good">
               <span>离地铁近</span>
               <span>交通便利</span>
             </div>
           </div>
           <div class="price">
             <p>￥{{item.price}}/月</p>
           </div>
         </router-link>
         
        </ul>
      </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name:"TenencyIndex",
    data(){
      return{
        list:[],
        tit:"租房",
        id:""
      }
    },
    mounted(){
      this.$emit("toparent",this.tit);
      var _this=this;
      //列表
      axios({
        method:"post",
        url:"http://39.105.73.76:8080/house-1.0/home/homeList.do"
      }).then(function(data){
        console.log(data);
        _this.list=data.data.data;
      });
      //优势
      
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
.bottom{
  display:flex;
  justify-content: space-around;
  margin-bottom:10px;
}
.bottom .select{
  width:89px;
  height:63px;
  border:1px solid #ccc;
  text-align:center;
}
.bottom p{
  margin-top:14px;
}
.bottom span{
  color:#ccc;
}
.banner img{
  width:100%;
  height:154px;
}
.zufang h3{
  /* font-weight: 300; */
  font-size:14px;
  line-height:40px;
  margin-top:10px;
}
.zu{
  display:flex;
  justify-content:space-between;
}
.fang{
  width:177px;
  height:97px;
  border:1px solid #ccc;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.fang span{
  color:#aaa;
}
.remen h3{
  margin:10px 0;
}
.re li{
  display:flex;
  padding:5px 10px;
}
.re li .detail{
  font-size:12px;
  margin:0 10px;
}
.re li .good{
  overflow:hidden;
}
.re li .good span{
  float:left;
  border:1px solid #aaa;
  border-radius:4px;
  margin-right:4px;
  line-height:20px;
}
.re img{
  width:102px;
  height:72px;
}
.re .price{
  color:#FF9800;
  line-height:50px;
  text-align:left;
}
</style>
