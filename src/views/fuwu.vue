<template>
    <div class="container">
    	<van-row>
  			<Header :name="title"></Header>
		</van-row>
		
		<van-row>
  			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
				    <img class="bannerpic" :src="image.banner_img_url" />
				</van-swipe-item>
			</van-swipe>
		</van-row>

		<van-row type="flex" justify="space-around" gutter="20" class="fwlist">
		  	<van-col span="8">
		  			<div class="fw3" @click="baojie()" >
		  				<img src="../../static/images/house.jpg" />
						<h3>保洁</h3>
					</div>
		 	 </van-col>
		 	 
		 	 <van-col span="8">
		  		<div class="fw3" @click="banjia()">
		  			<img src="../../static/images/house3.jpg" />
					<h3>搬家</h3>
				</div>
		  	</van-col>
		  	<van-col span="8">
		  		<div class="fw3" @click="weixiu()">
		  			<img src="../../static/images/house2.jpg" />
					<h3>维修</h3>
				</div>
		  	</van-col>
			</van-row>

			<van-row class="h2">
  				<h2>热门推荐</h2>
			</van-row>
			
			<van-row type="flex" justify="space-around">
				
			  <van-col span="10">
			  		<div class="tj">
						<h3>日常保洁</h3>
						<span>让你的卧室焕然一新</span>
					</div>	
			  </van-col>
			  
			  <van-col span="10">
			  		<div class="tj">
						<h3>日常保洁</h3>
						<span>让你的卧室焕然一新</span>
					</div>
			  </van-col>
			  
			</van-row>
			
			<van-row type="flex" justify="space-around">
			  <van-col span="10">
			  		<div class="tj">
						<h3>日常保洁</h3>
						<span>让你的卧室焕然一新</span>
					</div>	
			  </van-col>
			  
			  <van-col span="10">
			  		<div class="tj">
						<h3>日常保洁</h3>
						<span>让你的卧室焕然一新</span>
					</div>
			  </van-col>
			  
			</van-row>

    		<van-row class="h2">
  				<h2>精选服务</h2>
			</van-row>
   
    	<van-row type="flex" justify="space-around">
			  <van-col span="10">
			  		<div class="jx_left">
						<span>金牌大搬</span>
					</div>
			  </van-col>
			  
			  <van-col span="10">
			  		<div class="jx_right">
						<div >
							<span>深度保洁</span>
						</div>
						<div >
							<span>水路管件</span>
						</div>
					</div>
			  </van-col>
			  
			</van-row>
    	
    		<van-row class="h2">
				<van-button class="btn" size="large">单次预约</van-button>
			</van-row>
        
        <router-view @toparent="tit"></router-view>
        
    </div>
</template>
<script>
import Header from "@/components/Header";
import axios from 'axios'
export default {
    name:"Fuwu",
    data(){
        return{
            title:"服务",
            images:[],
            imgs:[]
        }
    },
    components:{
        Header
    },
    methods:{
        tit(msg){
            this.title=msg;
        },
        baojie(){
        	this.$router.push('/baojie')
        },
        banjia(){
        	this.$router.push('/banjia')
        },
        weixiu(){
        	this.$router.push('/weixiu')
        }
    },
    mounted(){
    	var _this=this;
			//轮播
			axios({
				url:' http://jx.xuzhixiang.top/ap/api/bannerlist.php',
				params:{uid:2079}
			}).then((data)=>{
				//console.log(data.data.data)
				_this.images=data.data.data
			});
			
			axios({
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				params:{uid:2079}
			}).then((data)=>{
				console.log(data.data.data)
				_this.imgs=data.data.data
			})
			
			
			
			/*axios({
				methods:'get',
				url:'http://39.105.73.76:8080/house-1.0/houseparticulars/show.do'
			}).then(function(data){
				console.log(data.data)
			})*/
			
			/*axios({
				methods:'get',
				url:'http://39.105.73.76:8080/house-1.0/houseparticulars/show.do'
			}).then(function(data){
				console.log(data.data)
			})*/
    }
    
    
}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.fw3{
		height: 100px;
		width: 90px;
		border: 1px solid #CCCCCC;
		position: relative;
	}
	.fw3 img{
		width: 100%;
		height: 100%;
	}
	.fw3 h3{
		z-index: 2;
		position: absolute;
		top: 5px;
		left: 10px;
	}
	.bannerpic{
		width: 100%;
		height: 150px;
	}
	.fwlist{
		padding: 20px;
	}
	.tj{
		width: 154px;
		height: 60px;
		margin-bottom: 10px;
		
		border: 1px solid #CCCCCC;
		display: inline-block;
	}
	.tj h3{
		margin:5px;
	}
	.tj span{
		color: #9F9F9F;
	}
	.h2{
		padding-left:20px ;
		padding-bottom:10px ;
	}
	.jx_left{
		float: left;
		height: 170px;
		width: 170px;
		
		border: 1px solid #CCCCCC;
	}
	.jx_right{
		float: left;
		width: 150px;
		height:170px;
		
		
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.jx_right div{
		width: 150px;
		height: 80px;
		border: 1px solid #CCCCCC;
	}
	.btn{
		width: 200px;
		height: 33px;
		display:block;
		margin:0 auto;
		border-radius: 5px;
		line-height: 33px;
		text-align: center;
		margin-top:20px ;
		margin-bottom: 10px;
	}
	
</style>
