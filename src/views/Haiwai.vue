<template>
    <div>
        海外房产
    </div>
</template>
<script>
export default {
    name:"Haiwai",
    data(){
        return{
            title:"海外房产"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>

</style>
