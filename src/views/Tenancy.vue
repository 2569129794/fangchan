<template>
  <div class="bigbox">
    <header>
      <Header :name="title"/>
    </header>
    <section>
      <router-view @toparent="tit"></router-view>
    </section>
    
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name:'Tenancy',
  data(){
    return{
      title:""
    }
  },
  methods:{
    tit(msg){
      this.title=msg;
    }
  },
  components:{
    Header
  }
}
</script>

<style scoped>
.bigbox{
  height:100vh;
  display:flex;
  flex-direction:column;
}

section{
  overflow:auto;
}
</style>
