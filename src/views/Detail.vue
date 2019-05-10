<template>
    <div>
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="#aaa" :height=189>
                <van-swipe-item>
                    <img :src="data.homedetails.image1" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img :src="data.homedetails.image2" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img :src="data.homedetails.image3" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img :src="data.homedetails.image4" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <section>
            <h3>【订】{{data.hdescribe}}</h3>
            <router-link tag="div" to="/fukuan" class="money">
                <span>￥{{data.price}}/月 (季付价)</span>
                <span>付款方式&gt;</span>
            </router-link>
            <div class="box">
                <div>
                    <p>空气质量已检测</p>
                    <p>查看结果</p>
                </div>
                <div>
                    <p>承诺空置30天出租</p>
                    <p>已空置20天</p>
                </div>
            </div>
            <div class="hai">
                <p class="one"></p>
                <p class="two">海燕计划</p>
                <p class="three">毕业生租房月付/0押金/送搬家卷</p>
            </div>
            <div class="you">
                <p v-for="(item,i) in data.meritList" :key="i">{{item.merit}}</p>
            </div>
        </section>
        <footer>
           <van-goods-action>
            <van-goods-action-mini-btn
                icon="like-o"
                text="收藏"
            />
            <van-goods-action-big-btn
                text="立即预定"
                @click="yuding"
            />
            <van-goods-action-big-btn
                primary
                text="预约看房"
                @click="kanfang"
            />
            </van-goods-action>
        </footer>
    </div>
</template>
<script>
import axios from "axios";
import Header from "@/components/header"
export default {
    name:"Detail",
    data(){
        return{
            tit:"房源详情",
            data:""
        }
    },
     methods: {
        yuding() {
        Toast('点击图标');
        },
        kanfang() {
        Toast('点击按钮');
        }
    },
    mounted(){
        this.$emit("toparent",this.tit);
        var id=this.$route.params.id;
        console.log(id)
        var _this=this;
        axios({
            method:"get",
            url:"http://39.105.73.76:8080/house-1.0/home/homeDetails.do",
            params:{
                id:id
            }
        }).then(function(data){
            console.log(data);
            _this.data=data.data.data;
        })
    }
}
</script>
<style scoped>
.banner{
    padding:0 10px;
}
.banner img{
    width:100%;
    height:189px;
}
section{
    padding:0 10px;
}
section h3{
    line-height:34px;
}
section .money{
    display:flex;
    justify-content:space-between;
    color:#aaa;
}
section .box{
    display:flex;
    padding:20px 12px;
    justify-content: space-between;
}
section .box div{
    width:150px;
    height:74px;
    background:#ccc;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
section .box div:first-child{
    background:#E3F0D3;
    color:#8BC34A;
}
section .box div:last-child{
    background:#FBD6A0 58%;
    color:#FF9800;
}
section .box p{
    line-height:20px;
}
section .hai{
    height:20px;
    line-height:20px;
}
section .hai p{
    float:left;
}
section .one{
    width:9px;
    height:20px;
    background:#F2602B 100%
}
section .two{
    margin:0 18px 0 10px;
    color:#888;
}
section .three{
    color:#F05020;
}
section .you{
    margin:25px 0;
    display:flex;
    justify-content: space-between;
}
section .you p{
    border:1px solid #aaa;
    padding:5px 2px;
    border-radius: 4px;
}
</style>

