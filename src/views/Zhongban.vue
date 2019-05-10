<template>
	<div class="out">
		
		<van-row class="bj_pic">
	  		<img src="../../static/images/banjia2.png" />
		</van-row>
		
		<van-row >
	  		<ul class="list">
	  			<li><p>我是中搬</p><span>一位搬家师傅</span></li>
	  			<li><p>我是中搬</p><span>一位搬家师傅</span></li>
	  			<li><p>我是中搬</p><span>一位搬家师傅</span></li>
	  		</ul>
		</van-row>
		
		<van-row class="where_box">
	  		<van-row class="where">
	  			<p>您要搬出哪里:</p>
	  			<input type="text" />
	  			<hr />
	  			<p>您要搬到哪里:</p>
	  			<input type="text" />
	  			
			</van-row>
		</van-row>
		
		<van-row>
			<van-row  class="xq" >
	  			<p>预计99元</p>
	  			<span>服务详情></span>
			</van-row>
		</van-row>
		
		<van-button type="info" class="btn">单次预约</van-button>
	</div>
</template>

<script>
	export default{
		name:'Zhongban',
		data(){
			return{
				
			}	
		}
		

	}
</script>

<style scoped>
	
	.bj_pic img{
		height: 90px;
		width: 160px;
		margin:20px auto;
	}
	.list{
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
	}
	.list li{
		display: block;
		flex: 1;	
	}
	.list span{
		display: block;
		flex: 1;
		margin: 5px 0;	
		text-align: center;
		font-size: 10px;
		color: #888;
	}
	.list p{	
		text-align: center;
		font-size: 14px;
		color: #888;
	}
	.where_box{
		margin: 20px;
		border: 1px solid #ccc;
		padding: 20px;
	}
	.where p{
		margin: 10px 0;
		display: inline-block;
	}
	.where input{
		border: none;
	}
	.xq{
		margin-top: 40px;
		margin-left:35% ;
	}
	.xq p{
		font-size: 14px;
		color: #888;
		display: inline-block;
	}
	.xq span{
		font-size: 10px;
		color: #888;
		margin-left: 20px;
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