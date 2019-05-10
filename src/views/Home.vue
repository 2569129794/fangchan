<template>
    <div class="bigbox">
        <!-- 轮播 -->
        <div class="lunbo">
            <van-swipe :autoplay="3000" indicator-color="#aaa">
                <van-swipe-item>
                    <img src="http://img5.imgtn.bdimg.com/it/u=2273706689,121076832&fm=26&gp=0.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="http://img1.imgtn.bdimg.com/it/u=1049539032,683002273&fm=26&gp=0.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=477983399,3734536909&fm=26&gp=0.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3145519866,3485468253&fm=26&gp=0.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 租房区域 -->
        <div class="box">
            <router-link class="left" to="/tenancy" tag="div">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557325028808&di=590c1f757310d519a7c66e7f8dc60c4f&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnantong_house%2Fpics%2Fhv1%2F58%2F6%2F104%2F6764188.jpg" alt="">
            </router-link>
            <div class="right" tag="div">
                <router-link to="/cotenancy" tag="p">合租</router-link>
                <router-link to="/wholeRent" tag="p">整租</router-link>
                <router-link to="/apartment" tag="p">公寓</router-link>
                <router-link to="/mansion" tag="p">豪宅</router-link>
            </div>
        </div>
        <!-- 服务区域 -->
        <div class="box">
            <router-link class="left" to="/fuwu" tag="div">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2653481432,3544053867&fm=26&gp=0.jpg" alt="">
            </router-link>
            <div class="right" tag="div">
                <router-link to="/baojie" tag="p">保洁</router-link>
                <router-link to="/banjia" tag="p">搬家</router-link>
                <router-link to="/weixiu" tag="p">维修</router-link>
            </div>
        </div>
        <!-- 买卖区域 -->
        <div class="box">
            <router-link class="left" to="/maimai" tag="div">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3556067408,2683698187&fm=26&gp=0.jpg" alt="">
            </router-link>
            <div class="right" tag="div">
                <router-link to="/haiwai" tag="p">海外房产</router-link>
                <router-link to="/guonei" tag="p">国内房产</router-link>
                <router-link to="/kehu" tag="p">客户记录</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Home",
    data(){
        return{
            title:"首页",
            index:0
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
        eventBus.$emit("index",this.index);
    }
}
</script>
<style scoped>
.lunbo{
    margin-bottom:20px;
}
.lunbo img{
    width:100%;
    height:200px;
}
.box{
    height:100px;
    /* background:red; */
    display:flex;
    padding:0 10px;
    justify-content: space-between;
}
.box .left{
    width:115px;
    height:82px;
    background:#ccc;
}
.box .right{
    /* background:pink; */
    width:200px;
    height:82px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:baseline;
}
.box .right p{
    width:88px;
    height:27px;
    background:#FBD6A0 58%;
    line-height:27px;
    text-align:center;
    border:1px solid #aaa;
}
.box .right p:nth-of-type(n+3){
    margin-top:20px;
}
.box img{
    width:115px;
    height:82px;
}
</style>