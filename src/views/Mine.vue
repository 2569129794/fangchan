<template>
    <div>
        我的
    </div>
</template>
<script>
export default {
    name:"Mine",
    data(){
        return{
            title:"我的",
            index:4
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
        eventBus.$emit("index",this.index);
    }
}
</script>
<style scoped>
    
</style>