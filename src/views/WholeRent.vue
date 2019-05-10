<template>
  <div class="bigbox">
    整租
  </div>
</template>

<script>
export default {
  name:'WholeRent',
  data(){
    return{
      tit:"整租"
    }
  },
  mounted(){
    this.$emit("toparent",this.tit)
  }
}
</script>

<style scoped>

</style>
