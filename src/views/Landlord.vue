<template>
    <div>
        房东
    </div>
</template>
<script>
export default {
    name:"Landlord",
    data(){
        return{
            title:"房东",
            index:3
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