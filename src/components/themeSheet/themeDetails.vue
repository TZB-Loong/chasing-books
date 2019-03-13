
<template>
  <div v-if='detailData'>
    <div>
      <cell>
        <span slot="icon"><img :src="imgUrl+detailData.author.avatar" width="40" class="img-box"/></span>
        <span slot="title">
          <div class="nick-box text-color">{{detailData.author.nickname}}</div>
          <div class="nick-box">{{difftime}}</div>
        </span>
      </cell>
    </div>
    <div class="cell-box">
       <div class="title-box"><strong>{{detailData.title}}</strong></div>
        <div class="content-box">{{detailData.desc}}</div>
    </div>
    <div class="cell-box" style="display:flex;">
      <span><img :src="imgUrl+detailData.author.avatar" width="20" class="img-box"/></span>
      <span class="nick-box">创建自<span class="text-color">&nbsp;&nbsp;{{detailData.author.nickname}}</span></span>
    </div>
    <card  v-for="items in detailData.books" :key='items.book._id' @click.native="cradClick(items.book._id)">
      <div slot="content">
          <cell>
            <span slot="icon"><img :src='imgUrl+items.book.cover' width="30" class="img-box"/></span>
            <span slot="title">
              <div class="title-box"><strong>{{items.book.title}}</strong></div>
              <div class="nick-box">{{items.book.author}}|{{items.book.cat}}|{{items.book.latelyFollower}}在追</div>
            </span>
          </cell>
          <cell class="nick-box" v-if="items.comment"><span slot="title" style="font-size:14px;">{{items.comment}}</span></cell>

      </div>
    </card>

  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex';
  import { Cell,Group,Card,Divider } from 'vux';
  import {imgUrl} from '../../util/url.js';
  import {dateDiff,showLoading} from '../../util/utli.js';
export default {
  components:{
  Cell,
  Card,
  Group,
  Divider
  },
  computed:{
    ...mapState({
      themDetail:state=>state.them.themDetail
    })
  },
  methods:{
    ...mapActions(['querythemDetail']),
    quereyData(){
      this.querythemDetail(this.$route.query.bookId).then(()=>{
        this.detailData = this.themDetail;
        this.difftime =  dateDiff(this.themDetail.created);
         this.$vux.loading.hide();
      })
    },
    cradClick(bookId){
       this.$router.push({
            name: 'bookDetail',
            query: {bookid: bookId}
          })
    }
  },
  created(){
    this.imgUrl = imgUrl;
    showLoading(this.$vux)
    this.quereyData();
  },
  data(){
    return {
      detailData:null,
      imgUrl:'',
      difftime:null
    }
  }

}
</script>
<style lang="less">
  @color:#666;
  @color2:darkgoldenrod;
  .nick-box{
    font-size: 12px;
    color:@color;
  }
  .img-box{
    display:block;
    margin-right:10px;
  }
  .cell-box{
    padding: 15px;
  }
  .title-box{
    font: 14px;
  }
  .content-box{
    color:@color;
    font-size: 14px;
  }
  .text-color{
    color: @color2;
  }
</style>
