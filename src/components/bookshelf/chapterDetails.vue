<template>
  <div v-if="chapterData" >
    <cell v-html='body'>

    </cell>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import {showLoading,urlChange,changeStr} from '../../util/utli.js';
import {Cell} from 'vux';
export default {
  components:{
    Cell
  },
  computed:{
    ...mapState({
      chapterDetail:state => state.chapter.chapterDetail
    })
  },
  methods:{
    ...mapActions(['querychaperDetail']),
    requeryData(payload){
      let params = urlChange(this.$route.query.link); //转换特殊字符串
      this.querychaperDetail(params).then(()=>{
          this.chapterData = this.chapterDetail;
          this.body = changeStr(this.chapterDetail.chapter.body)
          console.log(this.chapterData,'this.chapterData')
          this.$vux.loading.hide();
      });
    }
  },
  created(){
    let strArray = this.$route.query.link.split('_');
    this.num =strArray.pop().replace(/\.txt/g,'');
    this.chapterLink = strArray.join('_');
    showLoading(this.$vux);
    this.requeryData(this.chapterLink+'_'+this.num+'.txt');
  },
  data(){
    return {
      chapterData:null,
      chapterLink:'',
      num:'',
      body:''
    }
  }

}
</script>
<style lang="less">

</style>
