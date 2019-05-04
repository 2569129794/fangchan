<template>
    <div>
        商城
    </div>
</template>
<script>
export default {
    name:"Shopping",
    data(){
        return{
            title:"商城",
            index:2
        }
    },
    mounted(){
        eventBus.$emit("index",this.index);
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>
    
</style>