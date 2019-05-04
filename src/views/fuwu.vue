<template>
    <div>
        <Header :name="title"></Header>
        <router-view @toparent="tit"></router-view>
    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
    name:"Fuwu",
    data(){
        return{
            title:"服务"
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
