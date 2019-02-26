<template>
  <div>
    <group class="box">
    <cell v-for="(items,index) in week.books" :key=index is-link>
      <img  slot="icon" width="60" :src='imgUrl+items.cover' style="display:block;margin-right:10px;vertical-align:middle"/>
        <span slot="title" style="color:#666;"><span style="vertical-align:middle;">
          <div>
            <div class="title"><h5>{{items.title}}</h5></div>
            <div class="author"> {{items.author}}&nbsp;|&nbsp;{{items.majorCate}}</div>
            <div class="shortIntro">{{items.shortIntro}}</div>
            <div class="latelyFollower">{{items.latelyFollower}}在追 &nbsp;|&nbsp;{{items.retentionRatio}}%读者留存</div>
          </div>
          </span>
        </span>
    </cell>
    </group>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell ,Grid,GridItem,CellBox } from 'vux';
import {imgUrl} from '../../util/util.js';
export default {
 components:{
   Cell,
   Group
 },
 name:'ranking',
 data(){
   return {
     week:[],
     month:[],
     total:[],
     imgUrl:''
   }
 },
 created(){
   this.imgUrl=imgUrl
   this.$fetch('/ranking/'+this.$route.query._id).then(res=>{
     console.log('res',res);
     this.week = res.ranking;
   })
 },
}
</script>
<style lang='less'>
  .box{
    margin-top: -20px
  }
  .cell-box{
    padding: 10px 15px;
  }

  .author{
    font-size: 12px;
  }
  .latelyFollower{
    font-size: 12px;
  }
  .shortIntro{
    font-size: 12px;
    width: 100%;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
</style>
