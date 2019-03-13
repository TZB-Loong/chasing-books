<template>
  <div class="box">
      <div class="banner">图片显示</div>
      <grid :cols="3" :show-lr-borders="false" class="bg-f" :show-vertical-dividers="true">
      <grid-item >
        <span class="grid-center">追书架</span>
      </grid-item>
      <grid-item>
        <span class="grid-center">追书社区</span>
      </grid-item>
      <grid-item link='/bookshelf'>
        <span class="grid-center">排行榜</span>
      </grid-item>
      <grid-item link='/themList'>
        <span class="grid-center">主题书单</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">分类</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">听书专区</span>
      </grid-item>
      <grid-item >
        <span class="grid-center">随机看书</span>
      </grid-item>
    </grid>

  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell ,Grid,GridItem } from 'vux'
export default {
  components:{
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      Grid,
      GridItem,
  },
  name: 'HelloWorld',
  data () { //定义在这个组件当中使用的 变量(类似于react  中的state)
    return {
      msg: 'Welcome to Your Vue.js App',
      bookData:[]
    }
  },
  beforeCreate(){ //创建之前

  },
  created(){ //创建

  },
  beforeMount(){ //挂载之前

  },
  mounted(){ //挂载完成 (进行数据请求)
    // this.axios.get(url,parmas:{a:1,b:2})
  },
  beforeUpdate(){ //更新之前

  },
  updated(){ //更新完成

  },
  beforeDestroy(){ //销毁之前

  },
  destroyed(){ //销毁完成

  }

}
</script>
<style lang="less" scoped>
.banner{
  height: 160px;
}

.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
.flex-links{
 .weui-cells{
   background-color: red;
 }
}
</style>
