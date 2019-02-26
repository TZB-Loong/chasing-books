<template>
<div>
  <group title="男生">
  <cell is-link v-for="(items,index) in boyBookshelf" :key=index :link="{path:'/rang',query:{_id:items._id,monthRank:items.monthRank,totalRank:items.totalRank}}">
        <img  slot="icon" width="20" :src='imgUrl+items.cover' style="display:block;margin-right:5px;vertical-align:middle"/>
        <span slot="title" style="color:#666;"><span style="vertical-align:middle;">{{items.title}}</span> </span>
  </cell>
  <cell
      title="其他排行榜"
      is-link
      :border-intent="false"
      :arrow-direction="showContent ? 'up' : 'down'"
      @click.native="showContent = !showContent"></cell>

      <template v-if="showContent">
        <cell-box class="sub-item" is-link v-for='(items,index) in boyOtherBookshelf' :key=index
        :link="{path:'/rang',query:{_id:items._id,monthRank:items.monthRank,totalRank:items.totalRank}}"
        >
            {{items.title}}
        </cell-box>
      </template>
</group>
<group title="女生">
  <cell is-link v-for="(items,index) in girlBookshelf" :key=index :link="{path:'/rang',query:{_id:items._id,monthRank:items.monthRank,totalRank:items.totalRank}}">
        <img  slot="icon" width="20" :src='imgUrl+items.cover' style="display:block;margin-right:5px;vertical-align:middle"/>
        <span slot="title" style="color:#666;"><span style="vertical-align:middle;">{{items.title}}</span> </span>
  </cell>
  <cell
      title="其他排行榜"
      is-link
      :border-intent="false"
      :arrow-direction="showContent1 ? 'up' : 'down'"
      @click.native="showContent1 = !showContent1"></cell>

      <template v-if="showContent1">
        <cell-box class="sub-item" is-link v-for='(items,index) in girlOtherBookshelf' :key=index
        :link="{path:'/rang',query:{_id:items._id,monthRank:items.monthRank,totalRank:items.totalRank}}"
        >
            {{items.title}}
        </cell-box>
      </template>
</group>
</div>

</template>
<script>
import { Tabbar, TabbarItem, Group, Cell ,Grid,GridItem,CellBox } from 'vux'
import {imgUrl} from '../../util/util.js';
export default {
  components:{
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      Grid,
      GridItem,
      CellBox
  },
  name: 'Bookshelf',
  data () { //定义在这个组件当中使用的 变量(类似于react  中的state)
    return {
      msg: 'Welcome to Your Vue.js App',
      boyBookshelf:[],
      boyOtherBookshelf:[],
      girlBookshelf:[],
      girlOtherBookshelf:[],
      imgUrl:'',
      showContent:false,
      showContent1:false
    }
  },
  beforeCreate(){ //创建之前

  },
  created(){ //创建
    this.imgUrl = imgUrl;
    this.$fetch('ranking/gender').then(res =>{
      console.log(res,'res')
      res.male.map(item=>{
        if(item.collapse){
          this.boyOtherBookshelf.push(item)
        }else{
          this.boyBookshelf.push(item)
        }
      })

      res.female.map(item=>{
        if(item.collapse){
          this.girlOtherBookshelf.push(item)
        }else{
           this.girlBookshelf.push(item)
        }
      })
    })
  },
}
</script>
<style lang="less" scoped>
.box{
  margin-top: -20px;
}
.sub-item{
  padding-left: 35px;
}
</style>
