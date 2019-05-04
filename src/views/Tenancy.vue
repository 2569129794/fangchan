<template>
  <div class="bigbox">
    <Header :name="title"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name:'Tenancy',
  data(){
    return{
      title:"租房"
    }
  },
  components:{
    Header
  }
}
</script>

<style scoped>

</style>
