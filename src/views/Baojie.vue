<template>
    <div>
        保洁
    </div>
</template>
<script>
export default {
    name:"Baojie",
    data(){
        return{
            title:"保洁"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>

</style>
