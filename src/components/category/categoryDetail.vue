<template>
  <div v-if="dataDetail.length!=0">
     <tab bar-active-color='red' ref='tabElement'>
        <tab-item selected  @on-item-click="onItemClick">热门</tab-item>
        <tab-item @on-item-click="onItemClick">新书</tab-item>
        <tab-item @on-item-click="onItemClick">好评</tab-item>
        <tab-item @on-item-click="onItemClick">完结</tab-item>
      </tab>
      <scroller scrollbarY lock-x height='-50' @on-scroll-bottom='onScrollBottom' ref='scrollerBottom' :scroll-bottom-offst="100" class="scroller-box">
        <div>
          <group class="group-box">
            <cell v-for='(items,index) in  dataDetail' :key='index' is-link :link="{path:'/bookDetail',query:{bookid:items._id}}">
              <span slot="icon">
                <img :src='imgUrl+items.cover'  width='40' class="img-box"/>
              </span>
              <span slot="title" class="title-content">
                <div class="title-box"><strong>{{items.title}}</strong></div>
                <div class="author-box">{{items.author}}</div>
                <div class="desc-box author-box">{{items.desc}}</div>
                <div class="bookCount-box">{{items.latelyFollower}}在追&nbsp;|&nbsp;{{items.retentionRatio}}读者留存</div>
              </span>
            </cell>
          </group>
        </div>
      </scroller>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import {showLoading} from '../../util/utli.js';
import {Group,Cell,Tab,TabItem,Scroller} from 'vux';
import {imgUrl} from '../../util/url.js';
export default {
  components:{
    Group,
    Cell,
    TabItem,
    Tab,
    Scroller
  },
  computed:{
    ...mapState({
      categoryDetail:state=> state.category.categoryDetail
    })
  },
  methods:{
    ...mapActions(['querycategoryDetail']),
    requeryData(params,type){
      this.querycategoryDetail(params).then(()=>{
        this.total==0?this.total = this.categoryDetail.total:this.total;
        if(type=='loadMore'){
            this.dataDetail =this.dataDetail.concat(this.categoryDetail.books);
            this.onFetching = false
          }else{
            this.dataDetail = this.categoryDetail.books
          }
        this.$vux.loading.hide();
      })
    },
    onItemClick(index){
      showLoading(this.$vux);
      Object.assign(this.params,{
          type:index==0?'hot':(index==1?'new':(index==2?'reputation':'over')),
          start:0,
          limit:20,
        })
      this.requeryData(this.params);
    },
    onScrollBottom(){  // 下拉加载
     if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        if(this.params.start<this.total){
          setTimeout(() => {
           Object.assign(this.params,{
            start:this.params.start + this.params.limit,
            limit:this.params.limit + 20
          })
           showLoading(this.$vux);
          this.requeryData(this.params,'loadMore');
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
        }, 1000)
        }
      }
    },
  },
  created(){
    Object.assign(this.params,this.$route.query);
    this.imgUrl= imgUrl;
    showLoading(this.$vux);
    this.requeryData(this.params)
  },
  data(){
    return {
      dataDetail:[],
      total:0,
      imgUrl:'',
      params:{
        type:'hot',
        major:'玄幻',
        start:0,
        limit:20,
        tag:'东方玄幻,异界大陆,异界争霸,远古神话',
        gender:'male'
      }
    }
  }
}
</script>
<style lang="less">
  .scroller-box{
    overflow: hidden;
  }
  .group-box{
    margin-top: -20px;
  }
  .img-box{
    display:block;
    margin-right:10px;
  }
  .author-box{
    font-size: 12px;
    color: #666;
  }
  .desc-box{
    overflow: hidden;
    text-overflow: ellipsis;
     width: 100%;
     display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
  }
  .bookCount-box{
    font-size: 12px;
    color: #444;
  }
  .title-box{
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
     width: 100%;
     display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
  }
  .title-content{
    line-height: 20px;
  }
</style>
