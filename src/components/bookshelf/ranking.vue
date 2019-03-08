<template>
  <div style="padding-top:23px;">
    <div class="tab-box">
      <tab>
      <tab-item selected @on-item-click="onItemClick">周榜</tab-item>
      <tab-item @on-item-click="onItemClick">月榜</tab-item>
      <tab-item @on-item-click="onItemClick">总榜</tab-item>
    </tab>
    </div>
    <group class="box">
    <cell v-for="(items,index) in bookList.books" :key=index is-link :link="{path:'/bookDetail',query:{bookid:items._id}}">
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
import {Group, Cell ,Tab, TabItem } from 'vux';
import {imgUrl} from '../../util/url.js';
import {isfalse} from '../../util/utli.js';
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
 components:{
   Cell,
   Group,
   Tab,
   TabItem,
 },
 name:'ranking',
 data(){
   return {
     bookList:[],
     week:{},
     month:{},
     total:{},
     imgUrl:''
   }
 },
 computed:{
   ...mapState({
     list:state=>state.rangking.rankingList
   })
 },
 created(){
    this.imgUrl=imgUrl
   this.showLoading();
   this.requestData(this.$route.query._id,'0');
 },
 methods:{ //定义函数
  ...mapActions([
    'queryranking'
  ]),
  showLoading(){ //显示loading
    this.$vux.loading.show({
        text: 'Loading'
      })
  },
  requestData(rankingId,index){
    this.showLoading();
    this.queryranking(rankingId).then(() =>{
      this.bookList = this.list.ranking;
      index==0?this.week=this.list.ranking:(index==1?this.month=this.list.ranking:this.total=this.list.ranking);
      this.$vux.loading.hide();
    })
  },
  onItemClick(index){
    if(index==0){
      isfalse(this.week)?this.requestData(this.$route.query._id,index):this.bookList=this.week;
    }else if(index==1){
      isfalse(this.month)?this.requestData(this.$route.query.monthRank,index):this.bookList=this.month;
    }else{
      isfalse(this.total)?this.requestData(this.$route.query.totalRank,index):this.bookList=this.total;
    }
  }
 }
}
</script>
<style lang='less'>
  .tab-box{
    position: fixed;
    width: 100vw;
    top: 0px;
    z-index: 99999;
  }
  .box{
    margin-top: 0px;

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
