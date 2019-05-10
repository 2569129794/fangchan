<template>
    <div>
        <Header :name="title"></Header>
        <router-view @toparent="tit"></router-view>
      	<van-row class="top">
  			<img  src="../assets/logo.png" />
		</van-row>
		
		<van-row class="main" >
  			<p>恭和家园</p>
  			<i>均价52000元/平</i>
  			<van-button size="normal" style="display: block;">公寓</van-button>
		</van-row>
		
		<van-row class="xiaoshou" >
  			<p>销售阶段：</p><span>顺销</span> <br />
  			<p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</p><span>北京市朝阳区东双园路19号院</span><br />
  			<p>开盘时间：</p><span>2018.7.26</span><br />
  			<p>交房时间：</p><span>现房</span><br />
  			
		</van-row>
		
	<!--	<van-popup v-model="show" position="bottom" style="width: 100%; height: 50%;">内容</van-popup>
        <van-button type="primary" @click="showpopup">按钮</van-button>
		-->
		<van-button type="warning" class="youhui">优惠</van-button>
		<span>优惠活动</span>
		
		
		
		<div class="bxlist">
			
  				<dl>
  					<dt>38</dt>
  					<dd>报备客户</dd>
  				</dl>
  				<dl>
  					<dt>38</dt>
  					<dd>报备客户</dd>
  				</dl>
  				<dl>
  					<dt>38</dt>
  					<dd>报备客户</dd>
  				</dl>
  				<dl>
  					<dt>38</dt>
  					<dd>报备客户</dd>
  				</dl>
  				<dl>
  					<dt>38</dt>
  					<dd>报备客户</dd>
  				</dl>
  		
  			
  			</div>
		
		 	 	<router-link  to="/rule" tag="span">
					<div class="guize">
						<i></i>
						<span>佣金及合作规则</span>
					</div>
				</router-link >
				
				<div class="foot" >
	  			<div class="box"  @click="torecod()">
	  				报备记录
	  			</div>
	  			<div class="box"  @click="toworktable()">
	  				工作报表
	  			</div>
	  			<div class="box"  @click="toaddkehu()">
	  				新增客户
	  			</div>
	  			<div class="box" @click="to()">
	  				快速报备
	  			</div>
				</div>
				
				
    </div>
</template>
<script>
import Header from "@/components/Header";

export default {
    name:"Domestic",
    data(){
        return{
            title:"房产详情",
            
              show: false
        }
    },
    components:{
        Header
    },
    methods:{
        tit(msg){
            this.title=msg;
        },
        torecod(){
        	this.$router.push('/recod')
        },
        toworktable(){
        	this.$router.push('/worktable')
        },
        toaddkehu(){
        	this.$router.push('/addkehu')
        },
        to(){
        	this.$router.push('/baobei')
        }
        
        /*,
          showpopup(){
                this.show = true
            }*/
    }
}
</script>
<style scoped>
	
.top{
	width: 100%;
	height: 235px;
	margin-top: 45px;
}
.top img{
	width: 100%;
	height: 100%;
}
.main p{
	margin: 10px 0 10px 10px;
	font-size: 14px;
}
.main i{
	display: block;
	margin: 10px 10px;
	color:#FF9800;
	font-size: 10px;
	font-style:normal
}
.van-button{
	margin-left: 10px;
	height: 30px;
	line-height: 30px;
	border-radius: 4px;
	border: 1px solid #888;
	
}
.xiaoshou{
	margin: 10px 10px;
}
.xiaoshou p{
	display: inline-block;
	margin: 5px 10px 5px 0;
}
.xiaoshou span{
	display: inline-block;
}
.youhui{
	border: none;
	margin-right:10px ;
	
}
.bxlist{
	display: flex;
	justify-content: space-around;
	background:#ECECEC;
	margin: 10px 0;
}
.bxlist dt{
	margin-left:15px ;
}
.bxlist dd{
	
	color: #101010;
	margin-top: 5px;
	margin-left:0 ;
}
.guize i{
	width: 10px;
	height: 20px;
	background: #F2602B;
	display: inline-block;
	float: left;
	margin-right: 10px;
}
.guize span{
	
	
	display: inline-block;
	float: left;
	height: 20px;
	line-height: 20px;
}
.foot{
	margin-top: 50px;
	display: flex;
	justify-content: space-around;
}
.foot div{
	height: 30px;
	width: 25vw;
	text-align: center;
}
</style>
