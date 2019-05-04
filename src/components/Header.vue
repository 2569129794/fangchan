<template>
  <div class="hello">
    <van-nav-bar
    :title="name"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:["name"],
  data(){
    return{
      active:""
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
