<template>
    
        <div class="container">
        	<van-row>
  				<Header :name="title"></Header>
			</van-row>
			
			<van-row class="top">
  				<img  src="../../static/images/baojie.png" />
        		
			</van-row>
			
			
			<router-link to="/cleaningcard" tag="span">
			<van-row class="chongka">
  				<span class="yh">
  					优惠活动
  				</span>
  				<span class="bk">
  					首次办卡充200送50
  				</span>
  				<span class="lj">
  					点击了解﹥
  				</span>
			</van-row>
  				</router-link>
			
        	
        	<van-row class="h2">
  				<h2>保洁服务</h2>
			</van-row>
        	
        	<van-row >
        		<router-link to="/richangbaojie" tag="span">
  				<div class="bjfw">
  					<div class="left">
  						<p>日常保洁﹥</p>
  						<p>日常保洁服务</p>
  					</div>
  					<div class="right">
  						<img src="../../static/images/richangbaojie.png" />
  					</div>
  				</div>
  				</router-link>
  				
        		<router-link to="/shendubaojie" tag="span">
  				<div class="bjfw">
  					<div class="left">
  						<p>深度保洁﹥</p>
  						<p>深度保洁服务</p>
  					</div>
  					<div class="right">
  						<img src="../../static/images/shendubaojie.png" />
  					</div>
  				</div>
  				</router-link>
  				
        		<router-link to="/woshibaojie" tag="span">
  				<div class="bjfw">
  					<div class="left">
  						<p>卧室保洁﹥</p>
  						<p>卧室保洁服务</p>
  					</div>
  					<div class="right">
  						<img src="../../static/images/wohsibaojie.png" />
  					</div>
  				</div>
  				</router-link>
  				
			</van-row>
			
			<van-row type="flex" justify="space-around" class="fwbox">
        		<router-link to="/jdcleaning" tag="span">
				
			  <van-col span="4">
			  		<div class="box">
			  			家电清洗
			  		</div>
			  </van-col>
  				</router-link>
			  
			  
        		<router-link to="/wipeglass" tag="span">
			  
			   <van-col span="4">
			  		<div class="box">
			  			擦玻璃
			  		</div>
			  </van-col>
  				</router-link>
			  
        		<router-link to="/khbj" tag="span">
			  
			   <van-col span="4">
			  		<div class="box">
			  			开荒保洁
			  		</div>
			  </van-col>
  				</router-link>
			  
			  
			   <van-col span="4">
			  		<div class="box">
			  			专业除螨
			  		</div>
			  </van-col>
			  
			</van-row>
			
			<van-row type="flex" justify="space-around" class="fwbox">
			  <van-col span="4">
			  		<div class="box">
			  			消杀保洁
			  		</div>
			  </van-col>
			   <van-col span="4">
			  		<div class="box">
			  			企业保洁
			  		</div>
			  </van-col>
			   <van-col span="4">
			  		<div class="box">
			  			保洁卡
			  		</div>
			  </van-col>
			   <van-col span="4">
			  		<div class="box">
			  			家电清洗
			  		</div>
			  </van-col>
			  
			</van-row>
			
			<van-row class="banner">
  			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
				    <img class="bannerpic" :src="image.banner_img_url" />
				</van-swipe-item>
			</van-swipe>
		</van-row>
        	
        	<van-row class="h2">
  				<h2>客户口碑推荐</h2>
			</van-row>
			
			<van-row >
  				<div class="jinpai">
  					<div class="jp_top">
  						<div class="tx" ></div>
  						<div class="who">
  							<b>刘阿姨</b>
  							<p>金牌保洁员</p>
  						</div>
  					</div>
  					
  					<div class="jp_foot">
  						<div class="pj">
  							<span>客服评价:</span>
  						</div>
  						<div class="yy">
  							<p>保洁员小李的服务我和家人都非常满意，打扫有条不紊，认真细致，工具是统一配备的，很专业。</p>
							<router-link to="/cleaner" tag="span">
  								<van-button type="info" class="btn">立即预约</van-button>
  							</router-link>
  						</div>
  					</div>
  				</div>
  				
  				<div class="jinpai">
  					<div class="jp_top">
  						<div class="tx" ></div>
  						<div class="who">
  							<b>王师傅</b>
  							<p>金牌维修员</p>
  						</div>
  					</div>
  					
  					<div class="jp_foot">
  						<div class="pj">
  							<span>客服评价:</span>
  						</div>
  						<div class="yy">
  							<p>保洁员小李的服务我和家人都非常满意，打扫有条不紊，认真细致，工具是统一配备的，很专业。</p>
							<router-link to="/repairman" tag="span">
  							
  							<van-button type="info" class="btn">立即预约</van-button>
  							</router-link>
  							
  						</div>
  					</div>
  				</div>
			</van-row>
        	

        	
        </div>
   
</template>
<script>
import Header from "@/components/Header";
import axios from 'axios';
export default {
    name:"Baojie",
    data(){
        return{
            title:"保洁",
            images:[]
        }
    },
    components:{
        Header
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
			})
			
			
			
			axios({
				methods:'post',
				url:'http://39.105.73.76:8080/house-1.0/work/add.do',
				
			}).then((data)=>{
				console.log(data)
			})
			
			
			
			
   },methods:{
        tit(msg){
            this.title=msg;
        }
    }
    
}
</script>
<style scoped>
	
.top{
	position: relative;	
}
.top img{
	width: 100%;
	height: 260px;
}

.chongka{
	width: 100%;
	margin-bottom:10px ;
	margin-top: 10px;
}
.yh{
	display: inline-block;
	height: 30px;
	width: 70px;
	line-height: 30px;
	text-align: center;
	background: #C8C8C8;
	margin-left: 20px;
}
.bk{
	margin-left: 20px;
	font-size: 14px;
	color: #808080 ;
}
.lj{
	color: #A8A8A8;
	font-size: 12px;
	margin-left: 40px;
}
.h2{
		padding-left:20px ;
		padding-bottom:10px ;
		font-size: 14px;
	}
.bjfw{
	width: 160px;
	height: 66px;
	border: 1px solid #CCCCCC;
	margin-left: 20px;
	margin-bottom: 10px;
	float: left;
}
.left{
	float: left;
}
.left p{
	margin-top: 10px;
	margin-left: 10px;
	
}
.right{
	float: right;
	width: 70px;
	height: 66px;
}
.right img{
	height: 100%;
	width: 100%;
}
.fwbox{
	margin-top: 15px;
}
.box{
	width: 60px;
	height: 47px;
	border: 1px solid #CCCCCC;
	text-align: center;
	line-height: 47px;
}
.banner{
	margin: 20px 0;
}
.bannerpic{
		width: 100%;
		height: 120px;
	}
.jinpai{
	width: 290px;
	height: 190px;
	border: 1px solid #ccc;
	margin-left: 20px;
	margin-top: 10px;
	border-radius: 5px;
	margin-bottom: 10px;
}
.jp_top{
	height: 56px;
	line-height: 56px;
	margin-top: 20px;
	
}
.tx{
	float: left;
	height: 54px;
	width: 54px;
	border:1px solid #CCCCCC ;
	border-radius: 50%;
	margin: 0 20px;
}
.who{
	float: left;
	
}
.who b{
	height: 56px;
	line-height: 56px;
	display: inline-block;
}
.who p{
	height: 56px;
	line-height: 56px;
	display: inline-block;
}
.pj{
	
	height: 105px;
	width: 85px;
	display: inline-block;
	float: left;
	color: #888888;
	font-size: 14px;
}
.pj span{
	margin-left: 10px;
}
.yy{
	float: left;
	height: 105px;
	width: 197px;
	display: inline-block;
	color: #888888;
	font-size: 13px;
}
.btn{
	
	height: 30px;
	font-size: 14px;
	line-height: 30px;
	text-align: center;
	margin-left: 80px;
	margin-top: 20px;
}
</style>
