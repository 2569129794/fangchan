<template>
	<div class="container">
		<van-row>
  			<Header :name="title"></Header>
		</van-row>
		<van-row class="xuanze">
			<h2>选择报修项</h2>
  			<select >
  				<option value="空调清洗">空调清洗</option>
  				<option value="冰箱清洗">冰箱清洗</option>
  				<option value="油烟机清洗">油烟机清洗</option>
  				<option value="热水器清洗">热水器清洗</option>
  				<option value="洗衣机清洗">洗衣机清洗</option>
  			</select>
  			<div class="bxlist">
  				<dl>
  					<dt><img src="../assets/logo.png"/></dt>
  					<dd>空调清洗</dd>
  				</dl>
  				<dl>
  					<dt><img src="../assets/logo.png"/></dt>
  					<dd>冰箱清洗</dd>
  				</dl>
  				<dl>
  					<dt><img src="../assets/logo.png"/></dt>
  					<dd>油烟机清洗</dd>
  				</dl>
  				<dl>
  					<dt><img src="../assets/logo.png"/></dt>
  					<dd>热水器清洗</dd>
  				</dl>
  				<dl>
  					<dt><img src="../assets/logo.png"/></dt>
  					<dd>洗衣机清洗</dd>
  				</dl>
  			</div>
		</van-row>
		
		<van-row class="fwsm">
  			<h2>服务说明</h2>
  			<span>极速上门，品质保证，价格透明</span>
  			<ul>
  				<li>1.常规可选上门时间：9:00—20:00   </li>
  				<li>当天18点前下单会为您安排在第二天；</li>
  				<li>当天18点后下单会为您安排在第三天；</li>
  				<li>员工会与您协商确认具体上门时间。</li>
  			</ul>
  			
  			<p>2.用户预约服务后，员工联系用户确认信息以便 更好地为用户服务；维修人员上门后现场服务流程为：检测—与用户确认价格—维修人员清洗服务—用户检查服务结果并线上支付—维修人员清理垃圾后离开。</p>
		</van-row>
		
		<van-button type="info" class="btn">立即预约</van-button>
	</div>
</template>

<script>
	import Header from "@/components/Header";
	export default{
		name:'JdCleaning',
		data(){
			return{
				title:'家电清洗'
			}	
		},
		components:{
		    Header
		}
		

	}
</script>

<style>
	.xuanze{
		margin-top: 50px;
		margin-left: 20px;
	}
	.xuanze select{
		height: 40px;
		width: 130px;
	}
	.bxlist dl{
		height: 60px;
		width: 67px;
		margin-right: 20px;
		float: left;
	}
	.bxlist dt{
		height: 40px;
		width: 67px;
		display: block;
		
	}
	.bxlist img{
		width: 100%;
		height: 100%;
	}
	.bxlist dd{
		display: block;
		height: 20px;
		text-align: center;
		width: 67px;
		margin-left: 0;
	}
	.fwsm{
		margin-left: 20px;
		color: #888;
	}
	.fwsm span{
		display: block;
		margin: 10px 0;
	}
	.fwsm p{
		margin: 10px 0 ;
	}
	h2{
		font-size:14px ;
		color:#888 ;
		margin: 10px 0;
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