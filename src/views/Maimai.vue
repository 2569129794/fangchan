<template>
    <div>
        <Header :name="title"></Header>
        <router-view @toparent="tit"></router-view>
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    name:"Maimai",
    data(){
        return{
            title:"买卖"
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

</style>
