<template>
    <div>
        <van-row>
  			<Header :name="title"></Header>
		</van-row>
		
		<van-row class="top" >
	  		<img  src="../assets/logo.png" />
		</van-row>
		
		<van-row class="h2">
  			<h2>保洁服务</h2>
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
			
			<van-row class="h2">
  				<h2>客服口碑推荐</h2>
			</van-row>
			
			<van-row>
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
  							
  							<van-button  class="btn">立即预约</van-button>
  							</router-link>
  							
  						</div>
  					</div>
  				</div>
  			</van-row>
  			
  			<van-button  class="btn1">单次预约</van-button>
    </div>
    
</template>
<script>
import Header from "@/components/Header";
	
export default {
    name:"Weixiu",
    data(){
        return{
            title:"维修"
        }
    },
    
    components:{
        Header
    }
    ,methods:{
        tit(msg){
            this.title=msg;
        }
    }
    /*mounted(){
        this.$emit("toparent",this.title);
    }*/
}
</script>
<style scoped>
.top img{
	width: 100%;
	height: 120px;
	margin-top: 45px;
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
h2{
	margin: 20px 0;
		padding-left:20px ;
		font-size: 16px;
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
.btn1{
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
