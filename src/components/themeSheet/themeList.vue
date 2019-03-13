<template>
  <div v-if='them.length!=0'>
     <tab bar-active-color='red' ref='tabElement'>
        <tab-item selected  @on-item-click="onItemClick">本周最热</tab-item>
        <tab-item @on-item-click="onItemClick">最新发布</tab-item>
        <tab-item @on-item-click="onItemClick">最多收藏</tab-item>
        <!-- <tab-item>筛选</tab-item> -->
      </tab>
      <scroller scrollbarY lock-x height='-50' @on-scroll-bottom='onScrollBottom' ref='scrollerBottom' :scroll-bottom-offst="100" class="scroller-box">
        <div>
          <group class="group-box">
            <cell v-for='items in  them' :key='items._id' is-link :link="{path:'/themDetails',query:{bookId:items._id}}">
              <span slot="icon">
                <img :src='imgUrl+items.cover'  width='40' class="img-box"/>
              </span>
              <span slot="title" class="title-content">
                <div class="title-box"><strong>{{items.title}}</strong></div>
                <div class="author-box">{{items.author}}</div>
                <div class="desc-box author-box">{{items.desc}}</div>
                <div class="bookCount-box">共{{items.bookCount}}书&nbsp;|&nbsp;{{items.collectorCount}}人收藏</div>
              </span>
            </cell>
          </group>
        </div>
      </scroller>
  </div>
</template>
<script>

import {mapActions,mapState} from 'vuex';
import {showLoading,isfalse} from '../../util/utli.js';
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
      themList:state=> state.them.themList
    })
  },
  methods:{
    ...mapActions(['querythemList']),
      queryData(params,type){ //请求数据
      this.querythemList(params).then(()=>{
        this.total==0?this.total = this.themList.total:this.total;
          if(type=='loadMore'){
            this.them =this.them.concat(this.themList.bookLists);
            this.onFetching = false
          }else{
            this.them = this.themList.bookLists
          }
          this.$vux.loading.hide();
      })
    },
    onItemClick (index) {
       showLoading(this.$vux);
      if(index==0){
        Object.assign(this.params,{
          duration:'last-seven-days',
          sort:'collectorCount',
          start:0,
          limit:20,
          tag:'',
          gender:''
        })
      }else if(index==1){
        Object.assign(this.params,{
          duration:'all',
          sort:'created',
          start:0,
          limit:20,
          tag:'',
          gender:''
        })
      }else{
        Object.assign(this.params,{
          duration:'all',
          sort: 'collectorCount',
          start:0,
          limit:20,
          tag:'',
          gender:''
        })
      }
      this.queryData(this.params);
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
          this.queryData(this.params,'loadMore');
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
        }, 1000)
        }
      }
    },
  },
  created(){
    this.imgUrl = imgUrl;
     showLoading(this.$vux); //显示加载中
    this.queryData(this.params);
  },
  data(){
    return{
      them:[],
      total:0,
      onFetching:false,
      params:{
        duration:'last-seven-days',
        sort:'collectorCount',
        start:0,
        limit:20,
        tag:'',
        gender:''
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
