<template>
    <div>
        客户记录
    </div>
</template>
<script>
export default {
    name:"Kehu",
    data(){
        return{
            title:"客户记录"
        }
    },
    mounted(){
        this.$emit("toparent",this.title);
    }
}
</script>
<style scoped>

</style>
