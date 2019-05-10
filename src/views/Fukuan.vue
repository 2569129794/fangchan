<template>
    <div>
        fukaungfangshi
    </div>
</template>
<script>
export default {
    name:"Fukuan",
    data(){
        return{
            title:"付款方式"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>
    
</style>