<template>
<div  v-if='chapter.length!=0'>
  <group  gutter='0'>
    <cell v-for="(items,index) in chapter " :key="index" is-link :link="{path:'/chapterDetail',query:{link:items.link}}">
      <span slot="title">{{items.title}}</span>
    </cell>
  </group>
</div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
import {Cell,Group} from 'vux';
import {showLoading} from '../../util/utli.js';
export default {
components:{
  Cell,
  Group
},
computed:{
  ...mapState({
    chapterList:state=>state.chapter.chapterList
  })
},
methods:{
  ...mapActions(['querychapterList'])
},
created(){
  showLoading(this.$vux);
  this.querychapterList(this.$route.query.bookId).then(()=>{
    this.chapter = this.chapterList.mixToc.chapters;
    this.$vux.loading.hide();
  })
},
data(){
  return {
    chapter:[]
  }
}

}
</script>
<style lang="less">

</style>
