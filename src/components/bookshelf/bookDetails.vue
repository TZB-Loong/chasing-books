<template>
  <div v-if="bookDetail">
    <div>
       <group class="group-box">
        <flexbox class="flex-box">
        <flexbox-item :span='2'>
          <div v-if="bookDetail.cover">
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
        <flexbox-item class="btn-box"> <x-button type="warn" @click.native="startClick">开始阅读</x-button></flexbox-item>
      </flexbox>
      <grid :show-lr-borders="false" :show-vertical-dividers="false" class="grid-box" style="margin-left:15px;">
        <grid-item class="item-box ">
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
     <div class="flex-box" v-if="bookDetail.tags.length!=0">
       <!-- <flexbox-item > -->
          <span v-for="(items,index) in bookDetail.tags"
          :key='index'
          class="text-box tags-box"
          v-bind:style="{backgroundColor:getcolor()}">{{items}}</span>
       <!-- </flexbox-item> -->
     </div>
     <div class="flex-box">
       {{bookDetail.longIntro}}
     </div>
      </group>
      <group v-if="bookReview.length!=0">
        <div class="flex-box">
          <flexbox>
            <flexbox-item>热门书评</flexbox-item>
            <flexbox-item style="text-align:right;">更多</flexbox-item>
          </flexbox>
        </div>
        <div v-for='items in bookReview' :key="items._id" class="vux-1px-b text-flex">
            <div>
              <div>
                <flexbox>
                  <flexbox-item :span='2' class="item-box">
                    <img :src='imgUrl+items.author.avatar' width="40"/>
                    </flexbox-item>
                  <flexbox-item :span='8'>
                    <div class="text-sm">{{items.author.nickname}}</div>
                    <div class="text-font"><strong>{{items.title}}</strong></div>
                  </flexbox-item>
                  <flexbox-item :span='2' class="time-text">{{diff(items.created)}}</flexbox-item>
                </flexbox>
              </div>
            </div>
            <div>
              <flexbox>
                <flexbox-item :span='2'>&nbsp;</flexbox-item>
                <flexbox-item :span='10' class="text-content" v-html='changeStr(items.content)'></flexbox-item>
              </flexbox>
            </div>
        </div>
      </group>
      <group>
         <cell :title="bookDetail.title" link="#" :inline-desc="'共有'+ bookDetail.postCount+'个帖子'"></cell>
      </group>
      <!-- <group>
        <Book_list  v-bind:payload='payload'></Book_list>
      </group> -->
    </div>
  </div>
</template>
<script>
import {Group, Cell ,Tab, TabItem ,Flexbox,FlexboxItem,XButton,GridItem,Grid} from 'vux';
import {imgUrl} from '../../util/url.js';
import {isfalse,dateDiff,getRandomColor} from '../../util/utli.js';
import {mapState,mapActions} from 'vuex';
import Book_list from '../common/book-list';
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
   Book_list
 },
 name:'ranking',
 data(){
   return {
     bookDetail:null,
     diffTime:'',
     bookReview:[], //评论列表
     payload:{}
   }
 },
 computed:{
   ...mapState({
     detail:state=>state.detail.detail,
     review:state =>state.detail.review
   })
 },
 created(){

   this.imgUrl=imgUrl;
   this.showLoading();
   this.requestData(this.$route.query.bookid); //书籍详情
   this.queryReview({  //热门评论
     book:this.$route.query.bookid,
     sort:'updated',
     start:'0',
     limit:'2'
   }).then(()=>{
     if(!isfalse(this.review)){
       this.bookReview = this.review.reviews;
     }
   })
 },
 methods:{ //定义函数
  ...mapActions(['queryDetail','queryReview']),
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
        this.payload={
          tag:this.detail.tags,
          major:this.detail.majorCate,
          gender:this.detail.gender
        }
      }
      this.$vux.loading.hide();
    })
  },
  getcolor(){
    let  color = getRandomColor()
    return color;
  },
  diff(oldTime){
    let diftime = dateDiff(oldTime);
    return diftime;
  },
  changeStr(str){
    let changData = str.replace(/\n|\r\n/g,"<br/>");
    return changData;
  },
  startClick(){
    this.$router.push({
            name: 'chapter',
            query: {bookId: this.bookDetail._id}
          })
  }
 }
}
</script>
<style lang='less' rel="stylesheet/less" Scoped>
  .flex-box{
    padding: 10px 15px;
  }
  .img-box{
    display:block;
    margin-right:5px;
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
    .weui-grid{
      color:#000;
      padding: 10px 0px;
    }
  }
  .group-box{
    .vux-no-group-title::before{
      border: none;
    }
  }
  .tags-box{
    display: inline-block;
    padding: 5px 15px;
    color:#fff;
    border-radius: 15px;
    margin-right: 10px;
  }
  .text-font{
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .text-sm{
    font-size: 12px;
    color: burlywood;
  }
  .time-text{
    font-size: 12px;
    color: #666;
  }
  .text-content{
    font-size: 14px;
    color: #666;
    height: 40px;
    overflow: hidden;
  }
  .text-flex{
    margin-left:15px;
    padding:10px 15px 10px 0px;
  }
</style>
