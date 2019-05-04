<template>
  <div class="hello">
   <van-tabbar
    v-model="active"
    active-color="#07c160"
  >
    <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="smile-comment" to="/shopping">商城</van-tabbar-item>
    <van-tabbar-item icon="balance-list-o" to="/landlord">房东</van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
     active:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
