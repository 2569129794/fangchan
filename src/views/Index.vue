<template>
  <div class="bigbox">
    <header>
      <Header :name="title"/>
    </header>
    <section>
      <router-view @toparent="tit" :uid="this.uid"></router-view>
    </section>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name:'Index',
  data(){
      return{
        title:"",
        uid:""
      }
  },
  components:{
      Header,
      Footer
  },
  methods:{
    tit(msg){
        this.title=msg;
    }
  },
  mounted(){
    console.log(this.$route.query.uid);
    this.uid=this.$route.query.uid;
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
