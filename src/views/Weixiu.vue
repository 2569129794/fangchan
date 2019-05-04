<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name:"Weixiu",
    data(){
        return{
            title:"维修"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>

</style>
