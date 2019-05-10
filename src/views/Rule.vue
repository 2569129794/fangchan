<template>
    <div>
        <Header :name="title"></Header>
        <router-view @toparent="tit"></router-view>
        <div class="top">
        	<p class="p1">
        		<van-icon name="checked" color="#0076FF" size="20px" />
        		<span class="span1">佣金规则</span>
        	</p>
        	<div class="p">
        		<p ><span>佣金：</span><i>0——7%</i></p>
        		<p ><span>佣金规则：</span><i>草签减佣</i></p>
        	</div>
        	
        	<p class="p1">
        		<van-icon name="checked" color="#0076FF" size="20px" />
        		<span class="span1">合作规则</span>
        	</p>
        	
        	<div class="p">
        		<p ><span>起止时间：</span><i>2018-05-12至2018-12-31</i></p>
        		<p ><span>报备时效：</span><i>报备成功当天有效(截止到24点)，从报备成功开始，
超过期限没有带看,经纪人可重新报备</i></p>
<p ><span>报备号码：</span><i>全号隐号均可报备</i></p>
<p ><span>到访信息：</span><i>需要填写</i></p>
<p ><span>带看规则：</span><i>现场带看</i></p>
        	</div>
        </div>
       
       <div class="p2">
       		<p>1、现场带看必须是以分销商将客户亲自带到案场为前提进行书面报备的一种报备形式。</p>
       	<p>2、每一组带访客户负责人在到达案场之后，置业顾问协助各分销商业务代表认真仔细的填写好《客户报备单》，并要求签字确认。</p>
       	<p>3、只要是来过现场的客户均应当进行书面报备并填写《客户报备单》。不管客户是第几次来到案场均应当认真报备并填写《客户报备单》</p>
       	<p>4、为避免项目周边截客,二级分销公司未知会辨客员，自行带客户到场的，客户判定为无归属</p>
       	<p>5、客户直系亲属，应当视作报备方客户本人。</p>
       		
       </div>
        	
        
      	
    </div>
</template>
<script>
import Header from "@/components/Header";

export default {
    name:"Rule",
    data(){
        return{
            title:"佣金及合作规则"
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
	margin-top: 45px;
}
.span1{
	font-size: 16px;
	float: left;
	margin-top: 8px;
}
.van-icon{
	margin: 10px 10px;
	float: left;
}

.top p{
	height: 20px;
	margin-left: 10px;
}
.p{
	margin-left: 40px;
	margin-top: 20px;
}
.p p{
	margin:10px 0;
	
}
i{
	font-style: normal;
}
.p2{
	margin-left: 50px;
	margin-right: 20px;
}
.p2 p{
	margin: 10px 0;
}
</style>
