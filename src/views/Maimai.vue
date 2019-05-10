<template>
    <div>
        <Header :name="title"></Header>
        <router-view @toparent="tit"></router-view>
        <van-row class="top">
				  <img src="../../static/images/house.png" />
				  <b>买卖</b>
				  <span>高品质的优质房产</span>
				  <van-row class="form">
				  			<van-icon name="search" size="22px" color="#8E8E93" style="float: left;margin-top: 3px;margin-left: 3px;"/>
				   			<input type="text"  placeholder=" 输入小区名/商圈" />
				  			<van-icon name="close" size="16px" color="#8E8E93" style="float: right;margin-top: 6px;margin-right: 10px;" />
				   			
				  </van-row>
				  	
				</van-row>
				
				<div class="bxlist">
			<router-link to="/domestic" tag="span">
					
  				<dl>
  					<dt><img src="../../static/images/house.jpg"/></dt>
  					<dd>国内房产</dd>
  				</dl>
  			</router-link>
  			
			<router-link to="/overseas" tag="span">
  			
  				<dl>
  					<dt><img src="../../static/images/house3.jpg"/></dt>
  					<dd>海外房产</dd>
  				</dl>
  				</router-link>
  				<dl>
  					<dt><img src="../../static/images/house4.jpg"/></dt>
  					<dd>客户记录</dd>
  				</dl>
  			</div>
  			
		<router-link to="/propertydetails" tag="span">
  			
  			<van-row class="v-boxs">
			  <van-col span="12" class="v-box">
			  	<p>北京11大新区组团新建设方案</p>
			  	<img src="../../static/images/house.jpg" />
			  </van-col>
			  <van-col span="12" class="v-box">
			  	<p>北京11大新区组团新建设方案</p>
			  	<img src="../../static/images/house3.jpg" />
			  </van-col>
			  
			</van-row>
			
			<van-row class="v-boxs">
			  <van-col span="12" class="v-box">
			  	<p>北京11大新区组团新建设方案</p>
			  	<img src="../../static/images/house2.jpg" />
			  </van-col>
			  <van-col span="12" class="v-box">
			  	<p>北京11大新区组团新建设方案</p>
			  	<img src="../../static/images/house4.jpg" />
			  </van-col>
			  
			</van-row>
  			</router-link>
			
  			
  			<h3>推荐楼盘</h3>
  			
		<router-link to="/propertydetails" tag="span">
  			<van-row class="loupan">
			  	<img src="../../static/images/house.jpg" />
			  	<p>恭和家园</p>
			  	<span>均价52000元/平</span>
			</van-row>
			</router-link>
			
			
		<router-link to="/propertydetails" tag="span">
			
			<van-row class="loupan">
			  
			  	<img src="../../static/images/house2.jpg" />
			  	<p>恭和家园</p>
			  	<span>均价52000元/平</span>
			  
			</van-row>
			</router-link>
			
		<router-link to="/propertydetails" tag="span">
			
			<van-row class="loupan">
			  
			  	<img src="../../static/images/house4.jpg" />
			  	<p>恭和家园</p>
			  	<span>均价52000元/平</span>
			  
			</van-row>
			</router-link>
			
    </div>
</template>
<script>
import axios from 'axios'
import Header from "@/components/Header";
export default {
    name:"Maimai",
    data(){
        return{
            title:"买卖"
        }
    },
    mounted(){
    	
    	/*	axios({
					url:'http://www.baidu.com/api'
				}).then((data)=>{
					console.log(data.data)
				})*/
    		
    	
    },
    components:{
        Header
    },
    methods:{
        tit(msg){
            this.title=msg;
        }
    }
}
</script>
<style scoped>
	
.top{
	width: 100%;
	height: 120px;
	margin-top: 45px;
	
	
}
.top img{
	width: 100%;
	height: 100%;
}
.top b{
	display: table;
	margin: -80px 0px 0px 80px;
	font-size: 28px;
	color: #fff;
}
.top span{
	display: table;
	margin: -10px 0px 0px 150px;
	font-size: 14px;
	color: #fff;
}
.form{
	position: relative;
	top: 20px;
	border-radius:4px ;
	background: #F2F2F2;
display: flex;
	width: 60vw;
	height: 27px;
	
	margin: auto;
	z-index: 2;
	
}
.form input{
	flex: 1;
	min-width: 5px;
	margin: 5px;
	float:left;
	border: none;
}
.bxlist{
	display: flex;
	justify-content: space-around;
	margin: 20px 0;
}
.bxlist dd{
	font-size: 16px;
	color: #101010;
	margin-top: 5px;
	margin-left:0 ;
}
.bxlist dt{
	
	margin-left:10px ;
}
.bxlist img{
	width: 40px;
	height: 30px;
}
.v-boxs{
	padding: 0 20px;
}
.v-box {
	border: 1px solid #ccc;
	padding: 10px 0;
	
}
.v-box p{
	float: left;
	width: 94px;
	padding: 0 10px;
}
.v-box img{
	float: left;
	width: 50px;
	height: 37px;
}
h3{
	margin: 20px 0 10px 20px;
}
.loupan{
	margin: 0 20px 10px 20px;
	border: 1px solid #ccc;
}
.loupan img{
	width: 100%;
	height: 120px;
}
.loupan p{
	font-size: 14px;
	margin: 5px 10px;
}
.loupan span{
	font-size: 10px;
	color:#FF9800;
	display: block;
	margin: 10px 10px;
}
</style>
