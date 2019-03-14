<template>
  <div v-if='dataList'>
    <group-title>男生</group-title>
    <grid :cols='3'>
      <grid-item :label="''" v-for="items in dataList.male" :key="items.name" :link="{path:'/categoryDetail',query:{gender:'male',tag:'',major:items.name}}">
        <!-- <img slot="icon" :src="imgUrl+items.icon"> -->
        <span slot="label">
          <div><strong>{{items.name}}</strong></div>
          <div class="text-box">{{items.bookCount}}&nbsp;本</div>
        </span>
      </grid-item>
    </grid>
    <group-title>女生</group-title>
     <grid :cols='3'>
      <grid-item :label="''" v-for="items in dataList.female" :key="items.name" :link="{path:'/categoryDetail',query:{gender:'female',tag:'',major:items.name}}">
        <!-- <img slot="icon" :src="imgUrl+items.icon"> -->
        <span slot="label">
          <div><strong>{{items.name}}</strong></div>
          <div class="text-box">{{items.bookCount}}&nbsp;本</div>
        </span>
      </grid-item>
    </grid>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import {showLoading} from '../../util/utli.js';
import {imgUrl} from '../../util/url.js';
import {Grid,GridItem,GroupTitle } from 'vux';
export default {
  components:{
    Grid,
    GridItem,
    GroupTitle
  },
  computed:{
    ...mapState({
      categoryList:state=>state.category.categoryList
    })
  },
  methods:{
    ...mapActions(['querycategoryList']),
    requeryData(){
      this.querycategoryList().then(()=>{
        this.dataList = this.categoryList;
        this.$vux.loading.hide();
      })
    }
  },
  created(){
    this.imgUrl = imgUrl
    showLoading(this.$vux);
    this.requeryData();
  },
   data(){
    return {
      dataList:null,
      imgUrl:''
    }
  }
}
</script>
<style lang="less">
  .text-box{
    font-size: 12px;
    color:#999999;
  }
</style>
