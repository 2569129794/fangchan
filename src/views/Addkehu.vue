<template>
    <div>
		<van-row>
  			<Header :name="title"></Header>
		</van-row>


        <van-cell-group class="add">
            <p >从通讯录添加</p>
        </van-cell-group>


        <van-row type="flex" justify="space-between">
            <van-col span="9" class="new">
                <van-field
                        v-model="username"
                        clearable
                        placeholder="请输入用户名"
                />
            </van-col>
            <van-col span="6" class="_new">
                <van-radio-group >
                    <van-radio name="1">男</van-radio>

                </van-radio-group>
            </van-col>
            <van-col span="6" class="_new">
                <van-radio-group >
                    <van-radio name="1">女</van-radio>
                </van-radio-group>
            </van-col>
        </van-row>
        <hr/>

        <van-field
                v-model="username"
                clearable
                placeholder="请输入手机号码"
        />
        <hr/>

        <van-field
                v-model="username"
                clearable
                placeholder="客户身份证号"
                class="card"
        />


        <p class="zhu"> 请输入备忘录</p>

        <van-collapse v-model="activeNames" class="pur">
            <van-collapse-item title="购房意向">
                提供多样店铺模板，快速搭建网上商城
            </van-collapse-item>
        </van-collapse>


        <van-cell-group class="add">
            <p >分组至</p>
        </van-cell-group>


        <van-tabbar v-model="active" >
            <van-button type="info" class="cun">保存</van-button>
        </van-tabbar>
    </div>
</template>

<script>
import Header from "@/components/Header";
    export default {
        name: "Addkehu",
        data(){
            return{
                username:'',
                activeNames: ['1'],
                active: 0,
                title:'新增客户'
            }
        },
       components:{
        Header
    }


    }
</script>

<style scoped>
.add{

    font-size: 14px;
    height: 50px;
    line-height: 50px;
    margin: 30px auto;
    padding-left: 10px;

}
.new{
    margin-top: 20px;
}
._new{
    margin-top: 30px;
}
.card{
    height: 50px;
}
.zhu{
    height: 100px;
    color: #ccc;
   margin: 10px;
    border-top:1px solid #ccc ;
    border-bottom:1px solid #ccc ;
}
.pur{
        margin-top: 20px;
    }
.cun{
    margin: 0 auto;
}

</style>