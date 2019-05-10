<template>
    <div>
        <h3>用户名{{username}}</h3>
        <h3>名：{{data.name}}</h3>
        <p>手机号：{{data.phone}}</p>
        <p>账号：{{data.usernumber}}</p>
    </div>
</template>
<script>
import axios from "axios";
import {mapState} from "vuex";
export default {
    name:"Mine",
    props:["uid"],
    data(){
        return{
            title:"个人中心",
            data:""
        }
    },
    methods:{
        // ...mapActions(["login"])
        btn(){
            this.$store.commit("login")
        }
        
    },
    computed: {
        ...mapState(["username"])        
    },
    mounted(){
        this.$emit("toparent",this.title);
        eventBus.$emit("index",this.index);
        console.log(this.$props.uid);
        axios({
            method:"get",
            url:"http://39.105.73.76:8080/house-1.0/user/selectLoginUser.do",
            params:{
                id:this.$props.uid
            }
        }).then((data)=>{
            console.log(data);
            this.data=data.data.data;
        })
    }
}
</script>
<style scoped>
    
</style>