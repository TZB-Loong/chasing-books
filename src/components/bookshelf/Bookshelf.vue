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
        <cell-box class="sub-item" is-link v-for='items in boyOtherBookshelf' :key="items._id"
        :link="{path:'/rang',query:{_id:items._id,monthRank:items.monthRank,totalRank:items.totalRank}}"
        >
            {{items.title}}
        </cell-box>
      </template>
</group>
<group title="女生">
  <cell is-link v-for="(items,index) in girlBookshelf" :key='index' :link="{path:'/rang',query:{_id:items._id,monthRank:items.monthRank,totalRank:items.totalRank}}">
        <img  slot="icon" width="20" :src='imgUrl+items.cover' style="display:block;margin-right:5px;vertical-align:middle"/>
        <span slot="title" style="color:#666;"><span style="vertical-align:middle;">{{items.title}}</span> </span>
  </cell>
  <cell
      title="其他排行榜"
      is-link
      :border-intent="false"
      :arrow-direction="showContent1 ? 'up' : 'down'"
      @click.native="showContent1 = !showContent1"></cell>

      <template v-if="showContent1" >
        <cell-box class="sub-item" is-link v-for='items in girlOtherBookshelf' :key="items._id"
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
import {imgUrl} from '../../util/url.js';
import {mapState,mapActions,mapMutations,mapGetters } from 'vuex';
import {isfalse} from '../../util/utli.js';
export default {
  components:{
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      Grid,
      GridItem,
      CellBox,
  },
  computed:{
    ...mapState({
      books:state=>state.bookShelf.boyBooks //相当于是 this.$store.state.bookShelf.show
    }),
    ...mapGetters([
      'not_show','boyBooks'
      ])
  },
  methods:{
    ...mapActions([ //定义调用action的函数
      "booksChage", //将this.booksChage() `映射为this.$store.dispatch('booksChage')`
    ]),
    // ...mapMutations([ //调用定义的mutations 函数
    //   "booksChage", //将this.booksChage() `映射为this.$store.commit('booksChage')`
    // ])

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

    // this.$store.dispatch('booksChage'); //调用接口
    this.imgUrl = imgUrl;
    this.booksChage().then(()=>{
      if(!isfalse(this.books)){
        this.books.male.map(item=>{
            if(item.collapse){
            this.boyOtherBookshelf.push(item)
          }else{
            this.boyBookshelf.push(item)
          }
        })
        this.books.female.map(item=>{
          if(item.collapse){
          this.girlOtherBookshelf.push(item)
        }else{
           this.girlBookshelf.push(item)
        }
        })
      }
    });
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
