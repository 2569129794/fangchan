<template>
    <div class="bigbox">
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" indicator-color="#aaa" :height=200>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 租房区域 -->
        <div class="box">
            <router-link class="left" to="/tenancy" tag="div">
                <img src="" alt="">
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
                <img src="" alt="">
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
                <img src="" alt="">
            </router-link>
            <div class="right" tag="div">
                <router-link to="/overseas" tag="p">海外房产</router-link>
                <router-link to="/domestic" tag="p">国内房产</router-link>
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
    background:#ccc;
    line-height:27px;
    text-align:center;
    border:1px solid #aaa;
}
.box .right p:nth-of-type(n+3){
    margin-top:20px;
}
</style>