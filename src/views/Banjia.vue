<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name:"Banjia",
    data(){
        return{
            title:"搬家"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>

</style>
