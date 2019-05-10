<template>
<div class="container">
	<van-row>
  		<Header :name="title"></Header>
	</van-row>
     
     <van-row class="top" >
  		<img  src="../assets/logo.png" />
	</van-row>
	
	<van-row class="bj_header">
  		<!--<div class="bj_title">
  			<h2>日常保洁</h2>
  			<p>提供家庭室内表面清洁，物品归纳整理和高温消毒服务</p>
  		</div>-->
  		<van-button type="default">王师傅</van-button>
  		<div class="p">
  			<p>       王师傅从工业多年，精通维修各种家电及水电路的维修，认真负责，维修好的同时还会讲解损坏的原因及预防小知识，深受客户爱戴。</p>
  		</div>
  		<van-row>
  		<div class="bj_tit">
  			<div class="tit_pic">
  				<img src="../../static/images/duigou.jpg" />
  			</div>
  			<div class="tit_list">
  				<h2>专业可靠</h2>
  				<p>服务人员100%认证，安全上门。</p>
  			</div>
  		</div>
  		</van-row>
  		<van-row>
  		<div class="bj_tit">
  			<div class="tit_pic">
  				<img src="../../static/images/maojin.jpg" />
  			</div>
  			<div class="tit_list">
  				<h2>全新毛巾</h2>
  				<p>服务人员100%认证，安全上门。</p>
  			</div>
  		</div>
  		</van-row>
  		<van-row>
  		<div class="bj_tit">
  			<div class="tit_pic">
  				<img src="../../static/images/shebie.jpg" />
  			</div>
  			<div class="tit_list">
  				<h2>专业设备</h2>
  				<p>服务人员100%认证，安全上门。</p>
  			</div>
  		</div>
  		</van-row>
  		
	</van-row>
	
	<van-row class="price">
		<div class="fwprice">
			<h2>服务价格</h2>
  			<p>日常保洁</p>
  			<p><span>2小时起</span><b>40元/小时</b></p>
		</div>
	</van-row>
	
	<van-row class="price">
		<div class="fwprice">
			<h2>参考耗时</h2>
  			<p><span>一居</span><b>2——3小时</b></p>
  			<p><span>二居</span><b>3——4小时</b></p>
  			<p><span>三居及以上</span><b class="teshub">4小时起</b></p>
		</div>
	</van-row>
	
	<!--<van-row >
		<div class="sm">
			<h2>说明</h2>
  			<p>• 按居室收费，经过优化的房屋，按优化后居室收费标准；按优化后居室收费标准按优化后居室收费标准</p>
  			<p>• 按居室收费，经过优化的房屋，按优化后居室收费标准；按优化后居室收费标准按优化后居室收费标准</p>
  			<p>• 按居室收费，经过优化的房屋，按优化后居室收费标准；按优化后居室收费标准按优化后居室收费标准</p>
  			
		</div>
	</van-row>
	
	<van-row >
		<div class="bj_title">
			<h2>服务范围</h2>
  			<h2>客厅</h2>
  			<p>墙面、地面、家具及家电表面的清洁。</p>
  		</div>
  		
  		<div class="bj_title">
			
  			<h2>卧室</h2>
  			<p>墙面、地面、家具及家电表面的清洁。</p>
  		</div>
  		
  		<div class="bj_title">
			
  			<h2>厨房</h2>
  			<p>墙面、地面、家具及家电表面的清洁。</p>
  		</div>
  		
  		<div class="bj_title">
			
  			<h2>厕所</h2>
  			<p>墙面、地面、家具及家电表面的清洁。</p>
  		</div>
	</van-row>
	
	<van-row >
		<div class="zygj">
			<h2>专业工具</h2>
  			<van-row type="flex" justify="space-between">
			  <van-col span="11">
			  	<div class="gj">
			  		<div class="gj_title">
				  		<span>清洁背包</span>
				  		
				  	</div>
				  	<div class="gj_pic">
				  		<img src="../assets/logo.png" />
				  		
				  	</div>
			  	</div>	
			  </van-col>
			  <van-col span="11">
			  		<div class="gj">
			  		<div class="gj_title">
				  		<span>全新毛巾</span>
				  	</div>
				  	<div class="gj_pic">
				  		<img src="../assets/logo.png" />
				  	</div>
			  	</div>	
			  </van-col>
			  
			</van-row>
			
			<van-row type="flex" justify="space-between" class="gj_foot">
			  <van-col span="11">
			  	<div class="gj">
			  		<div class="gj_title">
				  		<span>清洁背包</span>
				  		
				  	</div>
				  	<div class="gj_pic">
				  		<img src="../assets/logo.png" />
				  		
				  	</div>
			  	</div>	
			  </van-col>
			  <van-col span="11">
			  		<div class="gj">
			  		<div class="gj_title">
				  		<span>全新毛巾</span>
				  	</div>
				  	<div class="gj_pic">
				  		<img src="../assets/logo.png" />
				  	</div>
			  	</div>	
			  </van-col>
			  
			</van-row>
		</div>
	</van-row>
	
	
	<van-row >
		<div class="sm">
			<h2>定期保洁</h2>
  			<p>• 按居室收费，经过优化的房屋</p>
  			<p>• 按居室收费，经过优化的房屋</p>
  			<p>• 按居室收费，经过优化的房屋</p>
  			
		</div>
	</van-row>-->
	
	<van-row >
		
						<van-button type="info" class="btn">立即预约</van-button>
						
			</van-row>


  			
		
	</van-row>
	
</div>
</template>

<script>
import Header from "@/components/Header";
	export default{
		name:'Repairman',
		data(){
			return{
				title:'预约金牌维修员'
			}	
		},
		components:{
		    Header
		}
		

	}
</script>

<style>
.top img{
	width: 100%;
	height: 160px;
}
.bj_header{
	padding-bottom: 20px;
	/*border-bottom: 1px solid #CCCCCC;*/
	margin-bottom: 10px;
	margin-left: 20px;
}
.p{
	width: 280px;
	height: 100px;
	border: 1px solid #CCCCCC;
	margin-top:10px ;
	padding: 10px;
}
.p p{
	font-size: 14px;
	color: #888888;
	line-height: 24px;
}
.bj_title{
	margin-top: 20px;
	margin-left: 20px;
}
h2{
	margin-bottom: 10px;
	font-weight: normal;
	
}

.bj_title p{
	color: "#888888";
	font-size: 12px;
}
.bj_tit{
	margin-left: 20px;
	margin-top: 20px;
	
}
.tit_pic{
	float: left;
}
.tit_pic img{
	width: 30px;
	height: 30px;
	margin-top: 10px;
}
.tit_list{
	float: left;
	margin-left: 30px;
}
.price{
	padding-bottom: 20px;
	/*border-bottom: 1px solid #CCCCCC;*/
	margin-bottom: 10px;
}
.fwprice{
	margin-left: 20px;
	
}
.fwprice p{
	margin-top: 5px;
}
.fwprice p b{
	margin-left: 150px;
	font-weight: normal;
}
.fwprice p .teshub{
	margin-left: 115px;
}
.sm{
	margin-left: 20px;
}
.sm p{
	font-size: 14px;
	color: #686868 ;
	margin: 10px 0 ;
}
.zygj{
	padding:0 20px;
	margin-top: 10px;
}
.gj{
	height: 100px;
	width: 144px;
	/*border: 1px solid #ccc;*/
}
.gj_title span{
	display: block;
	height: 24px;
	width: 78px;
	line-height: 24px;
	text-align: center;
	background: #DDD;
}
.gj_pic{
	width: 100px;
	height: 75px;
	float: right;
}
.gj_pic img{
	width: 100%;
	height: 100%;
}
.gj_foot{
	margin: 20px 0;
}
.foot{
	margin-bottom: 20px;
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