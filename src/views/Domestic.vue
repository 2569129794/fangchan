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
				
				
				<van-row type="flex" justify="space-around" class="select">
				  <van-col span="4">
				  	<select name="">
				  		<option value="区域">区域</option>
				  		<option value="区域">北上广</option>
				  		<option value="区域">京津唐</option>
				  		<option value="区域">黄淮海</option>
				  		<option value="区域">北上广</option>
				  	</select>
				  </van-col>
				  <van-col span="4">
				  	<select name="">
				  		<option value="区域">单价</option>
				  		<option value="区域">五万以下</option>
				  		<option value="区域">五万到十万</option>
				  		<option value="区域">十万到二十万</option>
				  		<option value="区域">二十万以上</option>
				  	</select>
				  </van-col>
				  <van-col span="4">
				  	<select name="">
				  		<option value="区域">面积</option>
				  		<option value="区域">三四十平</option>
				  		<option value="区域">百平以下</option>
				  		<option value="区域">一百五十平左右</option>
				  		<option value="区域">二百平以上</option>
				  	</select>
				  </van-col>
				  <van-col span="4">
				  	<select name="">
				  		<option value="区域">更多</option>
				  		<option value="区域">北上广</option>
				  		<option value="区域">京津唐</option>
				  		<option value="区域">黄淮海</option>
				  		<option value="区域">北上广</option>
				  	</select>
				  </van-col>
				</van-row>
  			
  			<h3>共有20个楼盘搜索</h3>
  			
		<router-link to="/propertydetails" tag="span">
  			<van-row class="loupan">
			  	<img src="../../static/images/house.jpg"/>
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
			  	<img src="../../static/images/house3.jpg" />
			  	<p>恭和家园</p>
			  	<span>均价52000元/平</span>
			</van-row>
		</router-link>
			
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    name:"Domestic",
    data(){
        return{
            title:"国内房产"
        }
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
.select{
	margin: 30px 0px 10px 0px;
	
}
.select select{
	width: 70px;
	height: 30px;
	border-radius: 4px;
}



h3{
	font-size: 10px;
	color: #888;
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
