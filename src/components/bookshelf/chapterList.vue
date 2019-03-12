<template>
  <group v-if='chapter.length!=0'>
    <cell v-for="(items,index) in chapter " :key="index" is-link :link='items.link'>
      <span slot="title">{{items.title}}</span>
    </cell>
  </group>
</template>
<script>
import {mapActions,mapState} from 'vuex'
import {Cell,Group} from 'vux'
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
  this.querychapterList(this.$route.query.bookId).then(()=>{
    this.chapter = this.chapterList.mixToc.chapters
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
