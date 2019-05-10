<template>
	<div class="container">
		<van-row >
  			<Header :name="title"></Header>
		</van-row>
		<van-row class="to_top">
  			<div class="top">
  				<img src="../../static/images/baojieka.png"/>
  				<div class="top_text">
  					<span>保洁卡</span>
	  				<p class="p1">0.00</p>
	  				<p class="p2">当前余额</p>
  				</div>
  			</div>
		</van-row>
		
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		<van-row>
  			<div class="buy">
  				<div class="left">
  					<span>￥200</span>
  					<p>赠送100元</p>
  				</div>
  				<div class="right">
  					<van-button plain type="danger">购买</van-button>
  				</div>
  			</div>
  			
		</van-row>
		
	</div>
</template>

<script>
	
	import Header from "@/components/Header";
	export default{
		name:'CleaningCard',
		data(){
			return{
				title:'保洁卡'
			}	
		},
		components:{
		    Header
		}
		

	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.to_top{
	margin-top: 50px ;
}
.top{
	position: relative;
}
.top img{
	width: 100%;
	height: 180px;
}
.top_text{
	width: 100%;
	position: absolute;
	top: 25px;
	left: 0;
	color: #FF9800;
}
.top_text span{
	display: block;
	font-size: 18px;
	text-align: center;
}
.p1{
	font-size: 18px;
	text-align: center;
	margin: 10px 0;
}
.p2{
	font-size: 12px;
	text-align: center;
	
}
.buy{
	margin: 20px 0;
}
.left{
	float: left;
	margin-left: 40px;
}
.left span{
	color: #626161;
	font-size: 16px;
	display: block;
	margin: 5px 0;
}
.right{
	float: right;
	padding-right: 30px;
}
</style>