<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name='slide-fade' style='background-color:red;'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
</style>
