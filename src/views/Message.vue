<template>
    <div>
        消息
    </div>
</template>
<script>
export default {
    name:"Message",
    data(){
        return{
            title:"消息",
            index:1
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