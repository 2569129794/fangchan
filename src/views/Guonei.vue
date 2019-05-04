<template>
    <div>
        国内房产
    </div>
</template>
<script>
export default {
    name:"Guonei",
    data(){
        return{
            title:"国内房产"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>

</style>
