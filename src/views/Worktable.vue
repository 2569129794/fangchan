<template>
    <div>
    	<van-row>
  			<Header :name="title"></Header>
		</van-row>
		
    <van-row type="flex" justify="center" class="day">
        <van-col span="4" class="_day">
            <van-button type="info" size="large">日报</van-button>
        </van-col>
        <van-col span="4" class="_day">
            <van-button plain type="primary" size="large">周报</van-button>
        </van-col>
        <van-col span="4" class="_day">
            <van-button plain type="primary" size="large">月报</van-button>
        </van-col>
    </van-row>

        <div class="time">
        <p>11月03日 周六</p>
        <p style="color: red">业绩 0.00万</p>
        </div>

        <div>
        <van-button plain hairline type="danger" class="see">查看记录</van-button>
        </div>
            <van-circle
                v-model="currentRate"
                text="报备数"
                class="bao"
        />
        <van-circle
                v-model="currentRate"
                text="带看数"
                class="_bao"
        />

        <div class="num">
        <van-row type="flex" justify="space-between">
            <van-col span="6">
                <div class="btn">
                    <p>报备数</p>
                    <p style="font-size: 20px">0 -</p>
                </div>
            </van-col>
            <van-col span="6">
                <div class="btn">
                    <p>认购数</p>
                    <p style="font-size: 20px">0 -</p>
                </div>
            </van-col>
            <van-col span="6">
                <div class="btn">
                    <p>签约数</p>
                    <p style="font-size: 20px">0 -</p>
                </div>
            </van-col>
        </van-row>

            <van-row type="flex" justify="space-between">
                <van-col span="6">
                    <div class="btn btns">
                        <p>带看率</p>
                        <p style="font-size: 20px">0 -</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="btn btns">
                        <p>成交率</p>
                        <p style="font-size: 20px">0 -</p>
                    </div>
                </van-col>
                <van-col span="6">

                </van-col>
            </van-row>

    </div>
    </div>

</template>

<script>
import Header from "@/components/Header";
	
    export default {

        name: "Worktable",
        data(){
            return{
                title:'工作报表',

                currentRate: 0,
                text:'报备数',
            }
        }
        ,
       components:{
        Header
    }
        

    }
</script>

<style scoped>
    .day{
        margin-top: 55px;
    }
    ._day{
        width: 80px;
    }
    .time{
        width: 100%;
        height: 80px;
        margin-top: 10px;
    }
    .time p{
        text-align: center;
        line-height: 20px;
    }
    .see{
        margin-left: 150px;
    }
    .bao{
        margin-left: 80px;
        margin-top: 30px;
    }
    ._bao{
        margin-left: 10px;
    }
    .num{
        margin-top: 50px;
    }
    .btn{
        width: 100px;
        height: 100px;
        border: 1px  solid #ccc;
    }
    .btn p{
        text-align: center;
        line-height: 20px;
    }
    .btns{
        margin-top: 20px;
    }



</style>