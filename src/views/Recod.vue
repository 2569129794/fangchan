<template>
    <div>
    	<van-row>
  			<Header :name="title"></Header>
		</van-row>
    	

        <van-row type="flex" justify="space-around" class="top">
            <van-col span="2">
                <p>所有</p>
                <p style="text-align: center">8</p>
            </van-col>
            <van-col span="3">
                <p>已报备</p>
                <p style="text-align: center">0</p>
            </van-col>
            <van-col span="2">
                <p>有效</p>
                <p style="text-align: center">0</p>
            </van-col>
            <van-col span="3">
                <p>已带看</p>
                <p style="text-align: center">0</p>
            </van-col>
            <van-col span="3">
                <p>已认筹</p>
                <p style="text-align: center">0</p>
            </van-col>
        </van-row>
        <hr/>


        <van-row type="flex" justify="space-between">
            <van-col span="10" class="tel">
                <div class="new">
                    <p><strong>李老师</strong><span class="_tel">1363437827</span></p>
                    <span class="sure">新华联南洋国际度假中心</span>
                    <span class="sure">确认专员崔超男  18838937892</span>

                </div>
            </van-col>
            <van-col span="8">
                <div class="new">
                    <p style="color:darkblue">已带看</p>
                    <span>10-26 18：19</span>
                </div>
            </van-col>

        </van-row>
    </div>
</template>

<script>
import Header from "@/components/Header";
	
    export default {
        name:"Recod",
        
        data(){
            return{
                title:'报备记录'
            }
        },
         components:{
	        Header
	    }
        

    }
</script>

<style scoped>
.top{
	margin-top: 50px;
}
.new{

    height: 100px;
}
.tel{
    margin-left: 10px;

}
._tel{
    margin-left: 10px;
}
span{
    color: #ccc;
    margin-top: 20px;
}
.sure{
    margin-top: 20px;
}
</style>