<template>
  <div style="padding-top:23px;">
    书籍详情
  </div>
</template>
<script>
import {Group, Cell ,Tab, TabItem } from 'vux';
import {imgUrl} from '../../util/url.js';
import {isfalse} from '../../util/utli.js';
export default {
 components:{
   Cell,
   Group,
   Tab,
   TabItem
 },
 name:'ranking',
 data(){
   return {
     bookList:[],
   }
 },
 created(){
   this.imgUrl=imgUrl;
   this.showLoading();
   this.requestData(this.$route.query.bookid);
 },
 methods:{ //定义函数
  showLoading(){ //显示loading
    this.$vux.loading.show({
        text: 'Loading'
      })
  },
  requestData(rankingId){
    this.showLoading();
    this.$fetch('/book/'+rankingId).then(res =>{
      console.log(res,'res')
      this.bookList = res.ranking;
      this.$vux.loading.hide();
    })
  },
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
