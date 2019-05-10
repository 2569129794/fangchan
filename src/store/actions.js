import axios from "axios";
import router from "@/router";
import qs from "qs";

var actions={
    login({commit},value){
        console.log(value);
        axios({
            method:"post",
            url:"http://39.105.73.76:8080/house-1.0/user/login.do",
            data:qs.stringify({
                usernumber:value.username,
                password:value.password
            })
        }).then((data)=>{
            console.log(data);
            if(data.data.code==1000){
                commit("login",value.username);
                alert(data.data.msg);
                router.push({path:"/index",query:{uid:data.data.data}});
            }else{
                alert(data.data.msg);
            }
        })
    }
}
export default actions;