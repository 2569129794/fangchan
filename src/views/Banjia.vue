<template>
    <div>
        <van-row>
	  		<Header :name="title"></Header>
		</van-row>
		
		<van-row class="top" >
	  		<img  src="../assets/logo.png" />
		</van-row>
		 
		<van-row >
	  		<ul class="bj_list"> 
	  			<router-link to="/xiaoban" tag="span"><li >面包小搬</li></router-link>
	  			<router-link to="/zhongban" tag="span" ><li >金杯中搬</li></router-link>
	  			<router-link to="/daban" tag="span" ><li >箱货大搬</li></router-link>
	  			<router-link to="/jingban" tag="span"><li >精致搬家</li></router-link>
	  			<router-link to="/qiyeban" tag="span"><li >企业搬家</li></router-link>
	  			
	  		</ul>
	  		
		</van-row>
		
			<router-view></router-view>
		
    </div>
</template>
<script>
import Header from "@/components/Header";
	export default{
		name:'Banjia',
		data(){
			return{
				title:'搬家'
			}	
		},
		components:{
		    Header
		},
		methods:{
			
		}
		

	}
</script>
<style scoped>
.top img{
	width: 100%;
	height: 120px;
	margin-top: 45px;
}
.bj_list{
	display: flex;
	justify-content: space-around;
	color: #888;
}
.bj_list li{
	height: 30px;
	display: block;
	flex: 1;
	text-align: center;
	line-height: 30px;
	font-size: 14px;
	
}
.router-link-active{
	color: #000;
}
</style>
