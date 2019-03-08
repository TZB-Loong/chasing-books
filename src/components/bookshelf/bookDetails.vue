<template>
  <div :v-show="isShow">
    <div>
       <group style="margin-top:-20px;">
        <flexbox class="flex-box">
        <flexbox-item :span='2'>
          <div>
          <img  slot="icon" width="50" :src='imgUrl+bookDetail.cover' alt="图片"/>
          </div>
        </flexbox-item>
        <flexbox-item :span='8'>
          <div>
            <div class="title-box">
              {{bookDetail.title}}
            </div>
            <div class="text-box">
              <span class="span-box">{{bookDetail.author}}</span>&nbsp;|&nbsp;{{bookDetail.cat}}&nbsp;|&nbsp;{{Math.floor(bookDetail.wordCount/10000)}}万字
            </div>
            <div class="text-box">
              {{diffTime}}更新
            </div>
          </div>
          </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class="btn-box"> <x-button>+&nbsp;追更新</x-button></flexbox-item>
        <flexbox-item class="btn-box"> <x-button type="warn">开始阅读</x-button></flexbox-item>
      </flexbox>
      <grid :show-lr-borders="false" :show-vertical-dividers="false" style="margin-left:15px;">
        <grid-item class="item-box grid-box">
          <span slot="label" class="number-box">追书人数</span>
           {{bookDetail.latelyFollower}}
        </grid-item>
        <grid-item class="item-box grid-box">
          <span slot="label" class="number-box">读者留存率</span>
           {{bookDetail.retentionRatio}}%
        </grid-item>
        <grid-item class="item-box grid-box">
          <span slot="label" class="number-box">更新字数/天</span>
            {{bookDetail.serializeWordCount}}
        </grid-item>
      </grid>

     <flexbox class="flex-box">
       <flexbox-item  v-for="(items,index) in tags" :key='index'>
          <span class="text-box tags-box" v-bind:style="{backgroundColor:getcolor()}">{{items}}</span>
       </flexbox-item>
     </flexbox>
      </group>
    </div>
  </div>
</template>
<script>
import {Group, Cell ,Tab, TabItem ,Flexbox,FlexboxItem,XButton,GridItem,Grid} from 'vux';
import {imgUrl} from '../../util/url.js';
import {isfalse,dateDiff,getRandomColor} from '../../util/utli.js';
import {mapState,mapActions} from 'vuex'
export default {
 components:{
   Cell,
   Group,
   Tab,
   TabItem,
   Flexbox,
   FlexboxItem,
   XButton,
   Grid,
   GridItem,
 },
 name:'ranking',
 data(){
   return {
     bookDetail:[],
     diffTime:'',
     isShow:false,
     tags:[]
   }
 },
 computed:{
   ...mapState({
     detail:state=>state.detail.detail
   })
 },
 created(){
   this.imgUrl=imgUrl;
   this.showLoading();
   this.requestData(this.$route.query.bookid);
   console.log(getRandomColor(),'9090')
 },
 methods:{ //定义函数
  ...mapActions(['queryDetail']),
  showLoading(){ //显示loading
    this.$vux.loading.show({
        text: 'Loading'
      })
  },
  requestData(rankingId){
    this.showLoading();
    this.queryDetail(rankingId).then(()=>{
      if(!isfalse(this.detail)){
        this.bookDetail = this.detail;
        this.diffTime = dateDiff(this.detail.updated);
        this.show = true;
        this.tags = this.detail.tags
      }
      console.log(this.bookDetail,'bookDetail')
      this.$vux.loading.hide();
    })
  },
  getcolor(){
    let  color = getRandomColor()
    return color;
  }
 }
}
</script>
<style lang='less'>
  .flex-box{
    padding: 15px;
  }
  .img-box{
    display:block;
    margin-right:5px;
    vertical-align:middle;
  }
  .item-box{
    text-align: center;
  }
  .title-box{
    font-size: 16px;
    font-weight: 800;
  }
  .text-box{
    font-size: 14px;
    color: #666;
  }
  .span-box{
    color: red;
  }
  .number-box{
    color:#666;
  }
  .btn-box{
    padding: 5px 15px 15px 15px;
  }
  .grid-box{
    color:#000;
  }
  .tags-box{
    display: inline-block;
    padding: 5px;
    color:#fff;
  }
</style>
